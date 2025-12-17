"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { IoClose } from 'react-icons/io5'
import { RiMenu3Line } from 'react-icons/ri'
import BackgroundStyle from '@/core/common/background'

export default function Header() {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Projects', href: '/projects' },
        { label: 'Experience', href: '/experience' },
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Events', href: '/events' },
        { label: 'Contact', href: '/contact-us' }
    ]

    return (
        <header className="max-w-5xl mx-3 md:mx-auto relative z-50 my-6 ">
            <div className="dark:border-gray-800 px-3 pl-4 pr-2 md:px-4 md:py-2.5 backdrop-blur-md 
                border boundary-border rounded-2xl shadow-sm dark:shadow-none
                transition-all duration-300  ">
                <div className="flex items-center justify-between">
                    {/* Logo/Brand */}
                    <Link
                        href="/"
                        className="md:text-xl font-bold tracking-tight
                            text-gray-900 dark:text-gray-100 
                            hover:opacity-80 transition-opacity"
                    >
                        Mohit Kumar
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-300
                                        ${isActive
                                            ? 'text-gray-900 dark:text-white'
                                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-xl"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{item.label}</span>
                                </Link>
                            )
                        })}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-xl
                            text-gray-600 hover:text-gray-900 
                            dark:text-gray-400 dark:hover:text-white
                            hover:bg-gray-100 dark:hover:bg-gray-800
                            transition-all duration-300"
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMobileMenuOpen ? (
                            <IoClose className="w-6 h-6" />
                        ) : (
                            <RiMenu3Line className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="md:hidden overflow-hidden"
                        >
                            <nav className="flex flex-col mt-4 pt-2 pb-2 space-y-1">
                                {navItems.map((item, index) => {
                                    const isActive = pathname === item.href
                                    return (
                                        <motion.div
                                            key={item.href}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300
                                                    ${isActive
                                                        ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                                                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'}`}
                                            >
                                                <span className={`w-1.5 h-1.5 rounded-full mr-3 transition-colors
                                                    ${isActive ? 'bg-gray-900 dark:bg-white' : 'bg-gray-300 dark:bg-gray-600'}`}
                                                />
                                                <span className="font-medium text-sm">{item.label}</span>
                                                {isActive && (
                                                    <motion.div
                                                        layoutId="activeMobileDot"
                                                        className="ml-auto w-1.5 h-1.5 bg-current rounded-full"
                                                    />
                                                )}
                                            </Link>
                                        </motion.div>
                                    )
                                })}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}
