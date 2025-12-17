"use client";

import BackgroundStyle from '@/core/common/background'
import React, { useState, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt, FaGlobe, FaRobot, FaMobile, FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'
import { projectsData } from '../data/projects-data'
import SectionHeader from '@/core/common/section-header'
import { motion } from 'framer-motion'
import ProjectsFallback from '@/core/fallback/projects-fallback'

export default function ProjectsSection() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 700);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <ProjectsFallback />;

    const getProjectTypeIcon = (type: string) => {
        switch (type) {
            case 'website':
                return <FaGlobe className="text-blue-500" size={16} />
            case 'ai':
                return <FaRobot className="text-purple-500" size={16} />
            case 'app':
                return <FaMobile className="text-green-500" size={16} />
            default:
                return null
        }
    }

    const getProjectTypeTooltip = (type: string) => {
        switch (type) {
            case 'website':
                return 'Web Application'
            case 'ai':
                return 'AI Project'
            case 'app':
                return 'Mobile/Desktop App'
            default:
                return ''
        }
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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
                damping: 15
            }
        }
    };

    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4">
                <SectionHeader title="Featured Projects" link="/projects" linkText="View All Projects" />

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                    {projectsData.map((project, index) => (
                        project.featured && (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="group relative bg-white dark:bg-gray-800/40 rounded-2xl overflow-hidden
                                border border-gray-100 dark:border-gray-700/50 
                                hover:border-blue-500/30 dark:hover:border-blue-400/30
                                transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
                            >
                                {/* Project Image Area */}
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                        src={project.images[0]}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                                    {/* Floating Action Buttons */}
                                    <div className="absolute top-3 right-3 flex gap-2 z-10 
                                        translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                                        transition-all duration-300 delay-100">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-full bg-white/10 backdrop-blur-md 
                                            hover:bg-white/20 text-white border border-white/10
                                            transition-all duration-300 hover:scale-110 shadow-lg"
                                            title="View Code"
                                        >
                                            <FaGithub size={16} />
                                        </a>
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-full bg-blue-500/80 backdrop-blur-md 
                                            hover:bg-blue-500 text-white border border-blue-400/30
                                            transition-all duration-300 hover:scale-110 shadow-lg"
                                            title="Live Demo"
                                        >
                                            <FaExternalLinkAlt size={14} />
                                        </a>
                                    </div>

                                    {/* Type Badge */}
                                    <div className="absolute top-3 left-3">
                                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full 
                                            bg-gray-900/60 backdrop-blur-md border border-white/10 shadow-lg">
                                            {getProjectTypeIcon(project.projectType)}
                                            <span className="text-[10px] font-medium text-gray-200">
                                                {getProjectTypeTooltip(project.projectType)}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="relative p-5 pt-4 bg-white dark:bg-[#0F1115] border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r 
                                            from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wide line-clamp-1">
                                        {project.subtitle}
                                    </p>

                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed h-10">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100 dark:border-gray-800/50">
                                        {project.technologies.slice(0, 3).map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2 py-0.5 text-[11px] font-medium text-gray-600 dark:text-gray-300
                                                bg-gray-100 dark:bg-gray-800/50 rounded
                                                border border-gray-200 dark:border-gray-700"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="px-2 py-0.5 text-[11px] font-medium text-gray-500 dark:text-gray-400">
                                                +{project.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Hover Glow Overlay */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/10 
                                    dark:group-hover:border-blue-400/10 rounded-2xl pointer-events-none transition-colors duration-500" />
                            </motion.div>
                        )
                    ))}
                </motion.div>
            </div>
        </BackgroundStyle>
    )
}
