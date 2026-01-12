"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrolling() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5, // The duration of the scroll animation
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function for smoother feel
            orientation: "vertical", // Scroll orientation
            gestureOrientation: "vertical", // Gesture orientation
            smoothWheel: true, // Enable smooth scrolling for mouse wheel events
            touchMultiplier: 2, // Multiplier for touch events
        });

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
}
