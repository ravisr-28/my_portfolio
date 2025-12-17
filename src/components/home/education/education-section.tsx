"use client";

import BackgroundStyle from '@/core/common/background'
import React, { useState, useEffect } from 'react'
import { educationData } from './data/education-data'
import { IEducation } from './data/education-data'
import SectionHeader from '@/core/common/section-header'
import EducationCard from './components/education-card'
import Timeline from '@/core/common/timeline'
import { motion } from 'framer-motion'
import EducationFallback from '@/core/fallback/education-fallback'

export default function EducationSection() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 680);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <EducationFallback />;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-8">
                <SectionHeader title="Education" />

                <div className="relative mt-8 sm:mt-12">
                    {/* Shared Timeline Line */}
                    <Timeline />

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={containerVariants}
                        className="space-y-4 sm:space-y-6"
                    >
                        {educationData.map((edu: IEducation, index: number) => (
                            <EducationCard key={index} edu={edu} index={index} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </BackgroundStyle>
    )
}
