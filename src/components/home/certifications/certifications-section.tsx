"use client";

import BackgroundStyle from '@/core/common/background'
import React, { useState, useEffect } from 'react'
import { certifications } from './data/certifications-data'
import CertificationsCard from './components/certifications-card'
import SectionHeader from '@/core/common/section-header'
import { ICertification } from '@/types/certification-types'
import { motion } from 'framer-motion'
import CertificationsFallback from '@/core/fallback/certifications-fallback'

export default function CertificationsSection() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 750);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <CertificationsFallback />;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-8">
                <SectionHeader title="Licenses & Certifications" link="/experience" linkText="View All Certifications" />

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8"
                >
                    {certifications.map((cert: ICertification, index: number) => (
                        <CertificationsCard key={index} cert={cert} index={index} />
                    ))}
                </motion.div>
            </div>
        </BackgroundStyle>
    )
}
