import BackgroundStyle from '../../core/BackgroundStyle'
import React, { useState, useEffect } from 'react'
import SectionHeader from '../../core/SectionHeader'
import { educationData } from '../../../data/education-data'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt } from 'react-icons/fa'

export default function EducationSection() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500)
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
                <SectionHeader title="Education" />
                <div className="space-y-6">
                    {educationData.map((edu, index) => (
                        <motion.div key={index}
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                            className="relative pl-8 sm:pl-12"
                        >
                            <div className="absolute left-3 sm:left-5 top-1.5">
                                <div className="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-500" />
                            </div>
                            <div className="bg-white dark:bg-gray-800/50 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600/50 transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <img src={edu.logo} alt={edu.institution} className="w-12 h-12 rounded-lg object-cover border border-gray-200 dark:border-gray-700" />
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{edu.degree}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{edu.institution}</p>
                                        <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-gray-500 dark:text-gray-400">
                                            <span>{edu.duration}</span>
                                            <div className="flex items-center gap-1">
                                                <FaMapMarkerAlt size={10} />
                                                <span>{edu.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </BackgroundStyle>
    )
}
