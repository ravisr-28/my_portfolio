import React from 'react';
import BackgroundStyle from '@/core/common/background';

export default function ProjectsFallback() {
    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 animate-pulse">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="h-8 w-48 bg-gray-200 dark:bg-gray-800 rounded" />
                    <div className="h-6 w-36 bg-gray-200 dark:bg-gray-800 rounded" />
                </div>

                {/* Project Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700/50">
                            {/* Image Placeholder */}
                            <div className="h-48 w-full bg-gray-200 dark:bg-gray-800" />

                            {/* Content */}
                            <div className="p-5 space-y-3 bg-white dark:bg-[#0F1115]">
                                <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-800 rounded" />
                                <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-800 rounded" />
                                <div className="space-y-2">
                                    <div className="h-3 w-full bg-gray-200 dark:bg-gray-800 rounded" />
                                    <div className="h-3 w-4/5 bg-gray-200 dark:bg-gray-800 rounded" />
                                </div>

                                {/* Tech Stack */}
                                <div className="flex gap-2 pt-3">
                                    {[...Array(3)].map((_, i) => (
                                        <div key={i} className="h-5 w-16 bg-gray-200 dark:bg-gray-800 rounded" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </BackgroundStyle>
    );
}
