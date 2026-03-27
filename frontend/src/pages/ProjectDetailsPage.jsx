import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { projectsData } from '../data/projects-data'
import BackgroundStyle from '../components/core/BackgroundStyle'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectDetailsPage() {
    const { projectId } = useParams()
    const project = projectsData.find(p => p.id === projectId)

    if (!project) {
        return (
            <BackgroundStyle>
                <div className="max-w-7xl mx-auto px-4 py-16 text-center">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">Project Not Found</h1>
                    <Link to="/projects" className="text-blue-500 hover:text-blue-600">← Back to Projects</Link>
                </div>
            </BackgroundStyle>
        )
    }

    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <Link to="/projects" className="group inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300 mb-8">
                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Projects</span>
                </Link>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">{project.title}</h1>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-6">{project.subtitle}</p>

                    {/* Image Gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {project.images.map((img, idx) => (
                            <div key={idx} className="relative aspect-video rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700/50">
                                <img src={img} alt={`${project.title} ${idx + 1}`} className="object-cover w-full h-full" />
                            </div>
                        ))}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700/50">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Tech Stack</h3>
                            <div className="space-y-3">
                                {Object.entries(project.techStack).map(([key, value]) => (
                                    <div key={key}>
                                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">{key}</span>
                                        <p className="text-sm text-gray-700 dark:text-gray-300">{value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700/50">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">Challenges</h3>
                                <ul className="space-y-2">
                                    {project.challenges.map((c, i) => (
                                        <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                                            {c}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700/50">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">Impact</h3>
                                <ul className="space-y-2">
                                    {project.impact.map((c, i) => (
                                        <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                                            {c}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Technologies & Links */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                                <span key={i} className="px-3 py-1.5 rounded-lg text-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700">{tech}</span>
                            ))}
                        </div>
                        <div className="flex gap-3">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                <FaGithub /> View Code
                            </a>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-sm bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-90 transition-opacity">
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                        </div>
                    </div>

                    <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-medium">Role:</span> {project.role} · <span className="font-medium">Duration:</span> {project.duration}
                    </div>
                </motion.div>
            </div>
        </BackgroundStyle>
    )
}
