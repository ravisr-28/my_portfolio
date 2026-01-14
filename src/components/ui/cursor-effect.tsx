"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorEffect = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 20, stiffness: 350, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            // "just bottom little right" - adding offset
            cursorX.set(e.clientX + 12);
            cursorY.set(e.clientY + 18);
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-50"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
            }}
        >
            <div className="relative size-5">
                <div className="absolute inset-0 rounded-full bg-blue-800/70 blur-xl scale-105" />
                <div className="absolute inset-0 rounded-full bg-white mix-blend-difference" />
            </div>
        </motion.div>
    );
};

export default CursorEffect;
