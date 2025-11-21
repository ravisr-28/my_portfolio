"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import { FiHeart } from 'react-icons/fi'
import BackgroundStyle from '../../../core/common/background'
import { socialLinks } from '@/data/hero-data'
import { motion } from 'framer-motion'

export default function HeroSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    return (
        <BackgroundStyle>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Profile Banner */}
                <motion.div
                    variants={itemVariants}
                    className="h-24 sm:h-32 overflow-hidden bg-gradient-to-r 
                    from-green-100 to-green-50 
                    dark:from-green-500/10 dark:to-green-500/5 
                    rounded-t-lg -mt-6 -mx-6"
                >
                    <Image
                        src="/profile/profile_banner.png"
                        alt="Profile Banner"
                        width={1000}
                        height={1000}
                        className='object-cover object-center w-full h-full'
                        priority
                    />
                </motion.div>

                {/* Profile Image */}
                <motion.div
                    variants={itemVariants}
                    className="relative -mt-12 sm:-mt-16 mb-4 px-4 sm:px-6"
                >
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full 
                        border-4 border-white dark:border-gray-900
                        shadow-lg overflow-hidden">
                        <Image
                            src="/profile/mohit-dp.jpeg"
                            alt="Profile Photo"
                            width={128}
                            height={128}
                            className="object-cover object-center w-full h-full"
                            priority
                        />
                    </div>
                </motion.div>

                {/* Profile Info */}
                <div className="space-y-4 px-4 sm:px-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="space-y-2">
                            <div className='flex flex-wrap items-center gap-2'>
                                <motion.div
                                    variants={itemVariants}
                                    className="flex flex-wrap items-center gap-1"
                                >
                                    <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Mohit Kumar</h1>
                                    <span className="text-gray-400">
                                        <RiVerifiedBadgeFill />
                                    </span>
                                    <span className="text-sm text-gray-400">(he/him)</span>
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <Link
                                        href="https://github.com/sponsors/mohitxcodes"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium bg-pink-500/5 text-pink-400 
                                            rounded-sm hover:bg-pink-500/10 transition border border-pink-500/30 
                                            flex items-center gap-2 active:scale-95"
                                    >
                                        <FiHeart className="w-4 h-4" />
                                        <span className="whitespace-nowrap">Sponsor</span>
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <motion.p
                        variants={itemVariants}
                        className="text-sm sm:text-base text-gray-700 dark:text-gray-300 max-w-2xl"
                    >
                        CSE&apos;28 | Full-Stack Developer | Next.js/ReactJs | Flutter | Redux/Toolkit | Node.js | ExpressJs | MongoDB | Freelancer | Exploring AI & Emerging Technologies.
                    </motion.p>

                    {/* Social Links & Resume */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap items-center gap-4 sm:gap-6"
                    >
                        <div className="flex items-center gap-3 sm:gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-green-600 
                                        dark:text-gray-400 dark:hover:text-white 
                                        transition hover:scale-110 active:scale-90"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                </a>
                            ))}
                        </div>
                        <div className="active:scale-95 transition">
                            <Link
                                href="/exp/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 sm:px-5 py-1.5 text-xs sm:text-sm font-medium 
                                    bg-white-500/10 text-white-400 rounded-sm 
                                    hover:bg-gray-500/20 transition border-2 
                                    overflow-hidden border-gray-500 
                                    flex items-center gap-2 active:scale-95"
                            >
                                <span className='text-xs'>📄</span>
                                <span>Resume</span>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Location & Contact */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 
                        text-sm text-gray-700 dark:text-gray-300"
                    >
                        <span className="flex items-center gap-1">
                            <span>📍</span>
                            <span>Bihar, India</span>
                        </span>
                        <span className="hidden sm:block">•</span>
                        <span className="flex items-center gap-1">
                            <span>📧</span>
                            <span>Contact - <a href="mailto:mohitxcodes@gmail.com"
                                className="hover:text-black dark:hover:text-white transition hover:underline">
                                mohitxcodes@gmail.com
                            </a></span>
                        </span>
                    </motion.div>
                </div>
            </motion.div>
        </BackgroundStyle>
    )
}