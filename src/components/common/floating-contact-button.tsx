"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MessagesSquare } from 'lucide-react'

export default function FloatingContactButton() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.5
            }}
            className="fixed bottom-6 right-6 z-50 group"
        >
            {/* Outer glow rings */}
            <div
                className="absolute inset-0 rounded-full bg-white dark:bg-gray-700/80 animate-ping backdrop-blur-sm opacity-0 group-hover:opacity-100"
                style={{ animationDuration: '2s' }}
            />

            <div
                className="absolute inset-0 rounded-full bg-gray-300 dark:bg-black/10 opacity-5 animate-pulse backdrop-blur-sm"
                style={{ animationDuration: '3s' }}
            />

            {/* Tooltip - appears ABOVE on hover */}
            <div
                className="absolute bottom-24 left-1/2 -translate-x-1/2 pointer-events-none 
                    opacity-0 group-hover:opacity-100 
                    translate-y-2 group-hover:translate-y-0
                    scale-90 group-hover:scale-100
                    transition-all duration-300 ease-out origin-bottom"
            >
                <div className="bg-gray-900/95 dark:bg-gray-800/95 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-md border border-gray-700/50 shadow-lg whitespace-nowrap">
                    Contact Us
                    {/* Arrow pointing down */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-800 rotate-45 border-b border-r border-gray-700/50" />
                </div>
            </div>

            {/* Main button */}
            <Link href="/contact-us" aria-label="Contact Us">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-16 h-16 rounded-full cursor-pointer
                        border border-gray-300/30 dark:border-gray-600/40
                        backdrop-blur-xl
                        bg-white/10 dark:bg-gray-800/20
                        shadow-lg shadow-black/10 dark:shadow-white/5
                        transition-all duration-300
                        hover:shadow-xl hover:shadow-black/20 dark:hover:shadow-white/10
                        hover:border-gray-400/40 dark:hover:border-gray-500/50
                        overflow-hidden
                        flex items-center justify-center"
                >
                    {/* Background wave effect */}
                    <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(156, 163, 175, 0.1) 0%, transparent 70%)',
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Rotating gradient */}
                    <motion.div
                        className="absolute inset-0 rounded-full opacity-30"
                        style={{
                            background: 'conic-gradient(from 0deg, transparent 0deg, rgba(156, 163, 175, 0.2) 90deg, transparent 180deg)',
                        }}
                        animate={{
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />

                    {/* Contact Icon */}
                    <motion.div
                        className="relative z-10"
                        animate={{
                            y: [0, -3, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <MessagesSquare
                            className="w-7 h-7 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300"
                            strokeWidth={2}
                        />
                    </motion.div>

                    {/* Ripple effect on hover */}
                    <motion.div
                        className="absolute inset-0 rounded-full bg-white/10 dark:bg-white/5"
                        initial={{ scale: 1, opacity: 0 }}
                        whileHover={{ scale: 1.5, opacity: [0, 0.3, 0] }}
                        transition={{ duration: 0.8 }}
                    />
                </motion.div>
            </Link>
        </motion.div>
    )
}
