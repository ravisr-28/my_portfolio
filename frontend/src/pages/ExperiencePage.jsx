import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaMapMarkerAlt } from 'react-icons/fa'
import BackgroundStyle from '../components/core/BackgroundStyle'
import { Link } from 'react-router-dom'
import { experiences } from '../data/exp-data'
import Timeline from '../components/core/Timeline'

export default function ExperiencePage() {
    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-4">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12">
                    <Link to="/" className="group inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300">
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Home</span>
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold mt-8 mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
                        Professional Journey
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        A comprehensive overview of my professional experience and achievements
                    </p>
                </motion.div>

                <div className="relative">
                    <Timeline />
                    <div className="space-y-8 sm:space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative pl-12 sm:pl-16">
                                <div className="absolute left-3 sm:left-5 top-1.5"><div className="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-500" /></div>
                                <div className="bg-white dark:bg-gray-800/50 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600/50 transition-all duration-300">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{exp.role}</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {exp.companyUrl !== '#' ? <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">{exp.company}</a> : exp.company}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">{exp.type}</span>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{exp.duration}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 justify-end mt-1"><FaMapMarkerAlt size={10} />{exp.location}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, idx) => (
                                            <span key={idx} className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800/50 rounded border border-gray-200 dark:border-gray-700">
                                                <tech.icon className={tech.color} size={12} /> {tech.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </BackgroundStyle>
    )
}
