"use client";

import BackgroundStyle from '@/core/common/background'
import React from 'react'
import { experiences } from '../data/exp-data'
import SectionHeader from '@/core/common/section-header'
import ExperienceCard from '../components/exp-card'
import { IExperience } from '@/types/exp-types'
import Timeline from '@/core/common/timeline'
import { motion } from 'framer-motion'

export default function ExperienceSection() {
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
                <SectionHeader title="Experience" link="/experience" linkText="View All Experience" />

                <div className="relative mt-8 sm:mt-12">
                    {/* Enhanced Timeline Line */}
                    <Timeline />

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={containerVariants}
                        className="space-y-8 sm:space-y-12"
                    >
                        {experiences.map((exp: IExperience, index: number) => (
                            <ExperienceCard key={index} exp={exp} index={index} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </BackgroundStyle>
    )
}
