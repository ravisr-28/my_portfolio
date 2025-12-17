import { FaExternalLinkAlt, FaBuilding, FaMapMarkerAlt, FaCalendarAlt, FaClock } from 'react-icons/fa'
import { IExperience, ITechnology } from '@/types/exp-types'
import Image from 'next/image'
import { PiBuildingOffice } from 'react-icons/pi'
import { IoPerson } from 'react-icons/io5'
import { motion } from 'framer-motion'

export default function ExperienceCard({ exp, }: { exp: IExperience, index: number }) {
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
            {/* Enhanced Timeline Dot */}
            {/* Enhanced Timeline Dot */}
            <div className="absolute left-[9px] md:left-[17px] top-4 md:top-6 z-10 w-4 h-4 rounded-full flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-blue-500/20 dark:bg-blue-400/20 animate-ping" />
                <div className="relative w-3 h-3 md:w-4 md:h-4 rounded-full bg-white dark:bg-[#0F1115] border-2 border-blue-500 dark:border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                    <div className="absolute inset-0 rounded-full bg-blue-500/20 dark:bg-blue-400/20 m-0.5" />
                </div>
            </div>

            {/* Connecting Line - managed by parent timeline usually, but we can add dynamic connection here if needed */}

            <div className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-[#0F1115] dark:to-gray-900/50 rounded-2xl p-5 md:p-6
                border border-gray-200 dark:border-gray-800 
                hover:border-gray-300 dark:hover:border-gray-700
                transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-none
                hover:-translate-y-1 transform"
            >
                {/* Company Link */}
                {exp.companyUrl != "#" && (
                    <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 p-2 rounded-full bg-white dark:bg-gray-800
                            hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200
                            border border-gray-100 dark:border-gray-700 transition-all duration-300"
                    >
                        <FaExternalLinkAlt size={12} />
                    </a>
                )}

                {/* Header */}
                <div className="flex gap-4 mb-5">
                    <div className="relative shrink-0">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white dark:bg-gray-800 
                            p-2 border border-gray-100 dark:border-gray-700/50 flex items-center justify-center
                            shadow-sm">
                            {exp.companyLogo == "#" ?
                                <PiBuildingOffice className='text-gray-400 dark:text-gray-500 w-full h-full' /> :
                                <Image src={`/${exp.companyLogo}`} alt={exp.company} width={56} height={56} className="rounded-lg w-full h-full object-contain" />
                            }
                        </div>
                    </div>

                    <div className="pt-0.5">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                            {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                            <FaBuilding className="text-gray-400 dark:text-gray-500" size={12} />
                            <span>{exp.company}</span>
                        </div>
                    </div>
                </div>

                {/* Minimalist Details Pills */}
                <div className="flex flex-wrap gap-2.5 mb-6 text-xs md:text-sm">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full 
                        bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300
                        border border-gray-200 dark:border-gray-700/50">
                        <IoPerson className="text-gray-400" size={12} />
                        <span className="font-medium">{exp.type}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full 
                        bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300
                        border border-gray-200 dark:border-gray-700/50">
                        <FaMapMarkerAlt className="text-gray-400" size={12} />
                        <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full 
                        bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300
                        border border-gray-200 dark:border-gray-700/50">
                        <FaCalendarAlt className="text-gray-400" size={12} />
                        <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full 
                        bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300
                        border border-gray-200 dark:border-gray-700/50">
                        <FaClock className="text-gray-400" size={12} />
                        <span>{exp.time}</span>
                    </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech: ITechnology, idx: number) => (
                        <div
                            key={idx}
                            className="flex items-center gap-1.5 px-2.5 py-1 
                            bg-white dark:bg-gray-800/30 rounded-md
                            border border-gray-200 dark:border-gray-700/50
                            hover:border-gray-300 dark:hover:border-gray-600
                            transition-colors duration-300"
                        >
                            <tech.icon className={`${tech.color} w-3.5 h-3.5 opacity-80`} />
                            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 border border-transparent group-hover:border-gray-200/50 
                    dark:group-hover:border-gray-700/50 rounded-2xl pointer-events-none transition-colors duration-500" />
            </div>
        </motion.div>
    )
}