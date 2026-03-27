import BackgroundStyle from '../../core/BackgroundStyle'
import React, { useState, useEffect } from 'react'
import SectionHeader from '../../core/SectionHeader'
import { experiences } from '../../../data/exp-data'
import { motion } from 'framer-motion'

export default function ExperienceSection() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 650)
        return () => clearTimeout(timer)
    }, [])

    if (loading) return (
        <BackgroundStyle>
            <div className="animate-pulse space-y-4 p-6">
                <div className="h-8 bg-gray-800/50 rounded w-48" />
                <div className="h-24 bg-gray-800/50 rounded" />
            </div>
        </BackgroundStyle>
    )

    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2">
                <SectionHeader title="Experience" link="/experience" linkText="View All" />
                <div className="space-y-6">
                    {experiences.slice(0, 2).map((exp, index) => (
                        <motion.div key={index}
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                            className="relative pl-8 sm:pl-12"
                        >
                            <div className="absolute left-3 sm:left-5 top-1.5">
                                <div className="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-500" />
                            </div>
                            <div className="bg-white dark:bg-gray-800/50 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600/50 transition-all duration-300">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{exp.role}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{exp.company}</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">{exp.type}</span>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{exp.duration}</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, idx) => (
                                        <span key={idx} className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800/50 rounded border border-gray-200 dark:border-gray-700">
                                            <tech.icon className={`${tech.color}`} size={12} />
                                            {tech.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </BackgroundStyle>
    )
}
