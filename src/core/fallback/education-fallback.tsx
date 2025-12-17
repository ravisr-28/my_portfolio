import React from 'react';
import BackgroundStyle from '@/core/common/background';

export default function EducationFallback() {
    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-8 animate-pulse">
                {/* Section Header */}
                <div className="h-8 w-32 bg-gray-200 dark:bg-gray-800 rounded mb-8" />

                {/* Education Cards */}
                <div className="relative space-y-4 sm:space-y-6">
                    {/* Timeline Line */}
                    <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800" />

                    {[...Array(2)].map((_, index) => (
                        <div key={index} className="relative pl-12 sm:pl-16">
                            {/* Timeline Dot */}
                            <div className="absolute left-2.5 sm:left-4 top-2 w-3 h-3 rounded-full bg-gray-200 dark:bg-gray-800 border-2 border-white dark:border-black" />

                            {/* Card Content */}
                            <div className="space-y-3 p-4 rounded-xl border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-gray-800/20">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="space-y-2 flex-1">
                                        <div className="h-6 w-48 bg-gray-200 dark:bg-gray-800 rounded" />
                                        <div className="h-5 w-36 bg-gray-200 dark:bg-gray-800 rounded" />
                                    </div>
                                    <div className="h-5 w-20 bg-gray-200 dark:bg-gray-800 rounded" />
                                </div>

                                <div className="space-y-2">
                                    <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded" />
                                    <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-800 rounded" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </BackgroundStyle>
    );
}
