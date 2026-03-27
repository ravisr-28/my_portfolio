import React, { useState, useRef, useEffect } from 'react'
import { FaDesktop, FaMobileAlt, FaRobot, FaArrowLeft, FaGithub, FaExternalLinkAlt, FaGlobe, FaMobile } from 'react-icons/fa'
import { projectsData, projectTabs } from '../data/projects-data'
import BackgroundStyle from '../components/core/BackgroundStyle'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ProjectsPage() {
    const [activeTab, setActiveTab] = useState('all')
    const tabsContainerRef = useRef(null)

    const getProjectTypeIcon = (type) => {
        switch (type) {
            case 'website': return <FaDesktop className="text-blue-500" />
            case 'ai': return <FaRobot className="text-purple-500" />
            case 'app': return <FaMobileAlt className="text-green-500" />
            default: return null
        }
    }

    const filteredProjects = activeTab === 'all'
        ? projectsData
        : projectsData.filter(project => project.projectType === activeTab)

    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8 sm:mb-10 md:mb-12">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="group inline-flex items-center gap-2 text-sm sm:text-base text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300">
                            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                            <span>Back to Home</span>
                        </Link>
                        <div className="hidden md:flex gap-2">
                            {projectTabs.map((tab) => (
                                <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                                    className={`px-4 py-1 rounded-md cursor-pointer text-sm font-medium transition-all duration-300
                                        ${activeTab === tab.id ? `${tab.color} text-white` : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'}`}>
                                    {tab.icon && <tab.icon className="inline-block mr-2" />}
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6 sm:mt-8 mb-2 sm:mb-4
                        bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
                        My Projects
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 truncate">
                        A collection of my work in web development and AI...
                    </p>
                    {/* Mobile tabs */}
                    <div ref={tabsContainerRef} className="md:hidden flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
                        {projectTabs.map((tab) => (
                            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                                className={`px-3 py-1 rounded-md cursor-pointer text-xs font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0
                                    ${activeTab === tab.id ? `${tab.color} text-white` : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'}`}>
                                {tab.icon && <tab.icon className="inline-block mr-1" />}
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div key={index}
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: index * 0.05 }}
                            className="group relative bg-white dark:bg-gray-800/40 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700/50 hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all duration-500 hover:shadow-2xl"
                        >
                            <div className="relative h-48 w-full overflow-hidden">
                                <img src={project.images[0]} alt={project.title} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-90" />
                                <div className="absolute top-3 right-3 flex gap-2 z-10 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/10 transition-all duration-300 hover:scale-110 shadow-lg">
                                        <FaGithub size={16} />
                                    </a>
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-blue-500/80 backdrop-blur-md hover:bg-blue-500 text-white border border-blue-400/30 transition-all duration-300 hover:scale-110 shadow-lg">
                                        <FaExternalLinkAlt size={14} />
                                    </a>
                                </div>
                                <div className="absolute top-3 left-3">
                                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-900/60 backdrop-blur-md border border-white/10 shadow-lg">
                                        {getProjectTypeIcon(project.projectType)}
                                    </div>
                                </div>
                            </div>
                            <div className="relative p-5 pt-4 bg-white dark:bg-[#0F1115] border-t border-gray-100 dark:border-gray-800">
                                <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-1">{project.title}</h3>
                                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wide">{project.subtitle}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100 dark:border-gray-800/50">
                                    {project.technologies.slice(0, 4).map((tech, idx) => (
                                        <span key={idx} className="px-2 py-0.5 text-[11px] font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800/50 rounded border border-gray-200 dark:border-gray-700">{tech}</span>
                                    ))}
                                    {project.technologies.length > 4 && <span className="px-2 py-0.5 text-[11px] font-medium text-gray-500 dark:text-gray-400">+{project.technologies.length - 4}</span>}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </BackgroundStyle>
    )
}
