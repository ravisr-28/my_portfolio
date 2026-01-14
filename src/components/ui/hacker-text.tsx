"use client";

import React, { useRef, useState } from "react";

interface HackerTextProps {
    text: string;
    className?: string;
}

const HackerText: React.FC<HackerTextProps> = ({ text, className = "" }) => {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;':\",./<>?";

    const startScramble = () => {
        let iteration = 0;
        clearInterval(intervalRef.current as NodeJS.Timeout);

        intervalRef.current = setInterval(() => {
            setDisplayText(() =>
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(intervalRef.current as NodeJS.Timeout);
            }

            iteration += 1 / 2; // Slower decoding for better effect
        }, 40); // Slower interval
    };

    const stopScramble = () => {
        clearInterval(intervalRef.current as NodeJS.Timeout);
        setDisplayText(text);
    };

    return (
        <span
            onMouseEnter={startScramble}
            onMouseLeave={stopScramble}
            className={`inline-block whitespace-nowrap ${className}`}
        >
            {displayText}
        </span>
    );
};

export default HackerText;
