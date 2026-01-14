"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
}

export default function InteractiveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles = useRef<Particle[]>([]);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothMouseX = useSpring(mouseX, { damping: 30, stiffness: 150 });
    const smoothMouseY = useSpring(mouseY, { damping: 30, stiffness: 150 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles.current = [];
            const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 100);

            for (let i = 0; i < particleCount; i++) {
                particles.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    radius: Math.random() * 2 + 1,
                });
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const currentMouseX = smoothMouseX.get();
            const currentMouseY = smoothMouseY.get();

            // Update particles
            particles.current.forEach((particle) => {
                // Calculate distance to mouse
                const dx = currentMouseX - particle.x;
                const dy = currentMouseY - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Attract to mouse when close
                if (distance < 200 && distance > 0) {
                    const force = (200 - distance) / 200;
                    const angle = Math.atan2(dy, dx);
                    particle.vx += Math.cos(angle) * force * 0.1;
                    particle.vy += Math.sin(angle) * force * 0.1;
                }

                // Move particles
                particle.x += particle.vx;
                particle.y += particle.vy;

                // Add friction
                particle.vx *= 0.99;
                particle.vy *= 0.99;

                // Wrap around edges
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;

                // Keep some minimum movement
                if (Math.abs(particle.vx) < 0.1) particle.vx += (Math.random() - 0.5) * 0.1;
                if (Math.abs(particle.vy) < 0.1) particle.vy += (Math.random() - 0.5) * 0.1;
            });

            // Draw connections between nearby particles
            particles.current.forEach((p1, i) => {
                particles.current.slice(i + 1).forEach((p2) => {
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {
                        const opacity = (120 - distance) / 120;
                        ctx.strokeStyle = `rgba(100, 116, 139, ${opacity * 0.2})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                });

                // Draw connection to mouse if close
                const dx = currentMouseX - p1.x;
                const dy = currentMouseY - p1.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    const opacity = (150 - distance) / 150;
                    // Gray-400: 156, 163, 175
                    ctx.strokeStyle = `rgba(156, 163, 175, ${opacity * 0.4})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(currentMouseX, currentMouseY);
                    ctx.stroke();
                }
            });

            // Draw particles
            particles.current.forEach((particle) => {
                const dx = currentMouseX - particle.x;
                const dy = currentMouseY - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Particles glow near mouse
                if (distance < 150) {
                    const opacity = (150 - distance) / 150;

                    // Glow - Gray
                    const gradient = ctx.createRadialGradient(
                        particle.x, particle.y, 0,
                        particle.x, particle.y, 8
                    );
                    gradient.addColorStop(0, `rgba(156, 163, 175, ${opacity * 0.4})`);
                    gradient.addColorStop(1, `rgba(156, 163, 175, 0)`);

                    ctx.fillStyle = gradient;
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, 8, 0, Math.PI * 2);
                    ctx.fill();

                    ctx.fillStyle = `rgba(156, 163, 175, ${opacity})`;
                } else {
                    ctx.fillStyle = "rgba(100, 116, 139, 0.4)";
                }

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fill();
            });

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
    }, [mouseX, mouseY, smoothMouseX, smoothMouseY]);

    return (
        <>
            {/* Video Background */}
            <div className="fixed inset-0 z-[-5] overflow-hidden pointer-events-none">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute  inset-0 w-full h-full object-cover opacity-20 dark:opacity-20"
                >
                    <source src="/test.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
            </div>

            {/* Subtle cursor glow - Gray */}
            <motion.div
                className="pointer-events-none fixed inset-0 z-[-1] opacity-0 dark:opacity-100 transition-opacity duration-500"
                style={{
                    background: `radial-gradient(600px circle at ${smoothMouseX}px ${smoothMouseY}px, rgba(156, 163, 175, 0.05), transparent 60%)`, // Gray glow
                }}
            />

            {/* Minimal ambient gradient - Neutral hue */}
            <div className="pointer-events-none fixed inset-0 z-[-3] opacity-0 dark:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/5 to-transparent" />
            </div>
        </>
    );
}
