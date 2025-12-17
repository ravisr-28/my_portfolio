import React from 'react'
import Image from 'next/image'
import { FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa'
import { IEducation } from '../data/education-data'
import { motion } from 'framer-motion'

export default function EducationCard({ edu, index }: { edu: IEducation, index: number }) {
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
        <motion.div
            variants={itemVariants}
            className="relative pl-12 md:pl-16 group/timeline"
        >
            {/* Timeline Dot */}
            {/* Enhanced Timeline Dot */}
            <div className="absolute left-[9px] md:left-[17px] top-4 md:top-6 z-10 w-4 h-4 rounded-full flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-blue-500/20 dark:bg-blue-400/20 animate-ping" />
                <div className="relative w-3 h-3 md:w-4 md:h-4 rounded-full bg-white dark:bg-[#0F1115] border-2 border-blue-500 dark:border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                    <div className="absolute inset-0 rounded-full bg-blue-500/20 dark:bg-blue-400/20 m-0.5" />
                </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-[#0F1115] dark:to-gray-900/50 rounded-2xl p-3 sm:p-4
                border border-gray-200 dark:border-gray-800 
                hover:border-gray-300 dark:hover:border-gray-700
                transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-none
                hover:-translate-y-1 transform"
            >
                {/* Institution Link */}
                {edu.website && (
                    <a
                        href={edu.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-3 right-3 p-1.5 rounded-full bg-white dark:bg-gray-800
                            hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200
                            border border-gray-100 dark:border-gray-700 transition-all duration-300"
                    >
                        <FaExternalLinkAlt size={10} />
                    </a>
                )}

                <div className="flex gap-3">
                    {/* Institution Logo */}
                    <div className="relative shrink-0">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white dark:bg-gray-800 
                            p-1.5 border border-gray-100 dark:border-gray-700/50 flex items-center justify-center
                            shadow-sm group-hover:border-blue-500/20 dark:group-hover:border-blue-400/20 transition-all duration-300">
                            <Image
                                src={edu.logo}
                                alt={edu.institution}
                                width={48}
                                height={48}
                                className="rounded-lg w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    <div className="flex-1 pt-0.5">
                        <h3 className="text-sm md:text-base font-bold text-gray-900 dark:text-gray-100 mb-0.5 leading-tight">
                            {edu.degree}
                        </h3>
                        <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">
                            {edu.institution}
                        </p>

                        {/* Minimalist Details Pills */}
                        <div className="flex flex-wrap gap-2 text-[10px] md:text-xs">
                            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full 
                                bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300
                                border border-gray-200 dark:border-gray-700/50">
                                <FaCalendarAlt className="text-gray-400" size={10} />
                                <span className="font-medium">{edu.duration}</span>
                            </div>
                            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full 
                                bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300
                                border border-gray-200 dark:border-gray-700/50">
                                <FaMapMarkerAlt className="text-gray-400" size={10} />
                                <span>{edu.location}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 border border-transparent group-hover:border-gray-200/50 
                    dark:group-hover:border-gray-700/50 rounded-2xl pointer-events-none transition-colors duration-500" />
            </div>
        </motion.div>
    )
}
