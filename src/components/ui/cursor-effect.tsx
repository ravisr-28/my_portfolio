"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    color: string;
    size: number;
}

const CursorEffect = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles = useRef<Particle[]>([]);
    const mouse = useRef({ x: 0, y: 0 });
    const lastMouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.current = { x: e.clientX, y: e.clientY };
            addParticles(e.clientX, e.clientY);
        };

        const addParticles = (x: number, y: number) => {
            // Calculate speed to determine number of particles
            const dx = x - lastMouse.current.x;
            const dy = y - lastMouse.current.y;
            const speed = Math.sqrt(dx * dx + dy * dy);

            const count = Math.min(Math.floor(speed * 0.1), 5); // Cap particles per frame

            for (let i = 0; i < count; i++) {
                particles.current.push({
                    x: x,
                    y: y,
                    vx: (Math.random() - 0.5) * 2,
                    vy: (Math.random() - 0.5) * 2,
                    life: 1,
                    color: "255, 255, 255", // White or Emerald-500
                    size: Math.random() * 2 + 1,
                });
            }
            lastMouse.current = { x, y };
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw sparks
            for (let i = 0; i < particles.current.length; i++) {
                const p = particles.current[i];
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 0.02;
                p.vy += 0.05; // Gravity

                if (p.life <= 0) {
                    particles.current.splice(i, 1);
                    i--;
                    continue;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.color}, ${p.life})`;
                ctx.fill();
            }


            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener("resize", resizeCanvas);
        window.addEventListener("mousemove", handleMouseMove);



        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);

        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 z-50"
            style={{ width: "100%", height: "100%" }}
        />
    );
};

export default CursorEffect;
