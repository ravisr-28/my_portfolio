"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface DotPatternProps {
    width?: number;
    height?: number;
    className?: string;
}

export default function DotPattern({
    width = 20,
    height = 20,
    className,
    ...props
}: DotPatternProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const maskImage = useMotionTemplate`radial-gradient(250px circle at ${mouseX}px ${mouseY}px, white, transparent)`;

    return (
        <div
            className={cn(
                "pointer-events-auto fixed inset-0 h-full w-full z-[-1] overflow-hidden",
                className
            )}
            onMouseMove={onMouseMove}
            {...props}
        >
            <div
                className="absolute inset-0 h-full w-full opacity-[0.15] dark:opacity-[0.1]"
                style={{
                    backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
                    backgroundSize: `${width}px ${height}px`,
                }}
            />

            <motion.div
                className="absolute inset-0 h-full w-full opacity-100 dark:opacity-100 text-gray-500 dark:text-gray-400"
                style={{
                    backgroundImage: `radial-gradient(currentColor 1.5px, transparent 1.5px)`,
                    backgroundSize: `${width}px ${height}px`,
                    maskImage: maskImage,
                    WebkitMaskImage: maskImage,
                }}
            />
        </div>
    );
}
