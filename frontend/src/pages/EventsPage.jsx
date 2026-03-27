import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaMapMarkerAlt, FaCalendar, FaUser, FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa'
import BackgroundStyle from '../components/core/BackgroundStyle'
import { events, tabs } from '../data/event-data'

export default function EventsPage() {
    const [activeTab, setActiveTab] = useState('all')
    const [selectedEvent, setSelectedEvent] = useState(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768)
        check()
        window.addEventListener('resize', check)
        return () => window.removeEventListener('resize', check)
    }, [])

    const filteredEvents = activeTab === 'all' ? events : events.filter(event => event.type === activeTab)

    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8 sm:mb-12">
                    <Link to="/" className="group inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300 mb-4">
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Home</span>
                    </Link>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
                        Events & Hackathons
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg mb-6">
                        My journey through events, hackathons, and workshops
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {tabs.map((tab) => (
                            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                                className={`px-3 sm:px-4 py-1.5 rounded-sm text-xs sm:text-sm font-medium transition-all duration-300
                                    ${activeTab === tab.id ? 'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'}`}>
                                {tab.icon && <tab.icon className="inline-block mr-1.5" />}
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Events Grid */}
                <div className="space-y-6">
                    {filteredEvents.map((event, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                            className="group bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600/50 transition-all duration-300">
                            {/* Image Gallery */}
                            {event.images && event.images.length > 0 && (
                                <div className="relative h-48 sm:h-64 overflow-hidden">
                                    <img src={event.images[0]} alt={event.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gray-900/60 backdrop-blur text-xs text-white font-medium capitalize">{event.type}</span>
                                </div>
                            )}
                            <div className="p-4 sm:p-6">
                                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">{event.title}</h3>
                                <div className="flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                                    <div className="flex items-center gap-1"><FaCalendar size={10} />{event.date}</div>
                                    <div className="flex items-center gap-1"><FaMapMarkerAlt size={10} />{event.location}</div>
                                    <div className="flex items-center gap-1"><FaUser size={10} />{event.host}</div>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{event.overview}</p>

                                {event.learningOutcomes && (
                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Learnings</h4>
                                        <ul className="space-y-1">
                                            {event.learningOutcomes.map((outcome, i) => (
                                                <li key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 flex-shrink-0" />{outcome}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {filteredEvents.length === 0 && (
                    <div className="text-center py-16 text-gray-500 dark:text-gray-400">
                        <p className="text-lg">No events found for this category</p>
                    </div>
                )}
            </div>
        </BackgroundStyle>
    )
}
