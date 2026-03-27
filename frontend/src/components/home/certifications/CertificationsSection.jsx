import BackgroundStyle from '../../core/BackgroundStyle'
import React, { useState, useEffect } from 'react'
import SectionHeader from '../../core/SectionHeader'
import { certifications } from '../../../data/certifications-data'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

export default function CertificationsSection() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500)
        return () => clearTimeout(timer)
    }, [])

    if (loading) return (
        <BackgroundStyle>
            <div className="animate-pulse space-y-4 p-6">
                <div className="h-8 bg-gray-800/50 rounded w-48" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[1,2,3].map(i => <div key={i} className="h-32 bg-gray-800/50 rounded" />)}
                </div>
            </div>
        </BackgroundStyle>
    )

    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2">
                <SectionHeader title="Certifications" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div key={index}
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                            className="group bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600/50 transition-all duration-300 hover:shadow-lg"
                        >
                            <div className="relative h-40 overflow-hidden">
                                <img src={cert.certificateImage} alt={cert.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <img src={cert.organizationLogo} alt={cert.organization} className="w-6 h-6 rounded object-cover" />
                                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{cert.organization}</span>
                                </div>
                                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100 mb-2 line-clamp-2">{cert.title}</h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-500 dark:text-gray-400">{cert.issueDate}</span>
                                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer"
                                        className="text-xs text-blue-500 hover:text-blue-600 flex items-center gap-1">
                                        View <FaExternalLinkAlt size={10} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </BackgroundStyle>
    )
}
