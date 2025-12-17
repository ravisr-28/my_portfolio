import React from 'react';
import BackgroundStyle from '@/core/common/background';

export default function SkillsFallback() {
    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 animate-pulse">
                {/* Section Header */}
                <div className="h-8 w-32 bg-gray-200 dark:bg-gray-800 rounded mb-6" />

                {/* Skill Categories */}
                <div className="space-y-4 sm:space-y-6">
                    {[...Array(3)].map((_, categoryIndex) => (
                        <div key={categoryIndex} className="space-y-3 sm:space-y-6">
                            {/* Category Title */}
                            <div className="h-6 w-40 bg-gray-200 dark:bg-gray-800 rounded" />

                            {/* Skills Grid */}
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {[...Array(8)].map((_, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="h-9 sm:h-10 w-24 sm:w-28 bg-gray-200 dark:bg-gray-800 rounded-sm"
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </BackgroundStyle>
    );
}
