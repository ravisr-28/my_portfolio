import React from 'react'
import Image from 'next/image'
import { FaExternalLinkAlt, FaCalendarAlt, FaAward } from 'react-icons/fa'
import { ICertification } from '@/types/certification-types'
import { motion } from 'framer-motion'

export default function CertificationsCard({ cert, index }: { cert: ICertification, index: number }) {
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
            className="group relative h-full bg-gradient-to-br from-white to-gray-50 dark:from-[#0F1115] dark:to-gray-900/50 
                rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 
                hover:border-gray-300 dark:hover:border-gray-700
                transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-none
                hover:-translate-y-1"
        >
            {/* Certificate Image Area */}
            <div className="relative h-36 w-full overflow-hidden bg-gray-100 dark:bg-gray-800/50">
                <Image
                    src={cert.certificateImage}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-60 
                    group-hover:opacity-80 transition-opacity duration-500" />

                {/* Organization Logo Badge */}
                <div className="absolute top-2.5 right-2.5 p-1 rounded-lg bg-white/90 dark:bg-gray-900/30 backdrop-blur-md
                    shadow-lg border border-white/20 ring-1 ring-black/5 dark:ring-white/10
                    transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <div className="relative w-6 h-6">
                        <Image
                            src={cert.organizationLogo}
                            alt={cert.organization}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* External Link Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-gray-900/90 backdrop-blur-md
                            text-xs font-medium text-gray-900 dark:text-white shadow-xl transform scale-90 group-hover:scale-100 transition-all duration-300
                            hover:bg-white dark:hover:bg-gray-800"
                    >
                        <span>View Credential</span>
                        <FaExternalLinkAlt size={10} />
                    </a>
                </div>
            </div>

            {/* Content Area */}
            <div className="p-4 flex flex-col h-[calc(100%-9rem)]">
                <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-800 dark:text-gray-100 mb-2 line-clamp-1 leading-tight
                        group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 ">
                        {cert.title}
                    </h3>


                </div>

                {/* Footer Meta */}
                <div className="pt-3 mt-auto border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-[10px] text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1.5">
                        <FaCalendarAlt size={10} />
                        <span>Issued {cert.issueDate}</span>
                    </div>

                    <div className="flex items-center gap-2 ">
                        <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800/50 
                            text-[10px] font-medium text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700/50">
                            <FaAward className="text-blue-500 dark:text-blue-400" size={10} />
                            {cert.organization}
                        </span>
                    </div>
                </div>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 border border-transparent group-hover:border-gray-200/50 
                dark:group-hover:border-gray-700/50 rounded-2xl pointer-events-none transition-colors duration-500" />
        </motion.div>
    )
}
