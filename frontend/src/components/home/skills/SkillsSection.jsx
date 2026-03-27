import BackgroundStyle from '../../core/BackgroundStyle'
import React, { useState, useEffect } from 'react'
import SectionHeader from '../../core/SectionHeader'
import { skillCategories } from '../../../data/skills-data'

export default function SkillsSection() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 600)
        return () => clearTimeout(timer)
    }, [])

    if (loading) return (
        <BackgroundStyle>
            <div className="animate-pulse space-y-4 p-6">
                <div className="h-8 bg-gray-800/50 rounded w-32" />
                <div className="flex flex-wrap gap-2">
                    {[...Array(8)].map((_, i) => <div key={i} className="h-8 bg-gray-800/50 rounded w-24" />)}
                </div>
            </div>
        </BackgroundStyle>
    )

    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2">
                <SectionHeader title="Skills" />
                <div className="space-y-4 sm:space-y-6">
                    {skillCategories.map((category) => (
                        <div key={category.title} className="space-y-3 sm:space-y-6">
                            <h3 className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-medium">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {category.skills.map((skill, skillIndex) => {
                                    const IconComponent = category.icons[skillIndex]
                                    const colorClass = category.colors[skillIndex]
                                    return (
                                        <div key={skill}
                                            className="group relative flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 
                                            bg-gray-100 hover:bg-gray-200 dark:bg-gray-800/50 dark:hover:bg-gray-700/50 
                                            rounded-sm border border-gray-200 dark:border-gray-700/50 transition-all duration-300
                                            hover:border-gray-300 dark:hover:border-gray-600/50 cursor-default"
                                        >
                                            <span className="text-base sm:text-lg md:text-xl">
                                                {IconComponent && <IconComponent className={colorClass} size={16} />}
                                            </span>
                                            <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-medium">
                                                {skill}
                                            </span>
                                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-100/0 via-gray-200/5 to-gray-100/0 
                                            dark:from-gray-800/0 dark:via-gray-700/5 dark:to-gray-800/0 
                                            opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </BackgroundStyle>
    )
}
