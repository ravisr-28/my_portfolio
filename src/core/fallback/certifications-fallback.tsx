import React from 'react';
import BackgroundStyle from '@/core/common/background';

export default function CertificationsFallback() {
    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-8 animate-pulse">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="h-8 w-56 bg-gray-200 dark:bg-gray-800 rounded" />
                    <div className="h-6 w-40 bg-gray-200 dark:bg-gray-800 rounded" />
                </div>

                {/* Certification Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="p-5 space-y-4 rounded-xl border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-gray-800/20">
                            {/* Logo/Icon */}
                            <div className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-lg" />

                            {/* Title */}
                            <div className="space-y-2">
                                <div className="h-5 w-full bg-gray-200 dark:bg-gray-800 rounded" />
                                <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-800 rounded" />
                            </div>

                            {/* Issuer & Date */}
                            <div className="space-y-2">
                                <div className="h-3 w-1/2 bg-gray-200 dark:bg-gray-800 rounded" />
                                <div className="h-3 w-1/3 bg-gray-200 dark:bg-gray-800 rounded" />
                            </div>

                            {/* Credential ID */}
                            <div className="h-3 w-3/4 bg-gray-200 dark:bg-gray-800 rounded" />
                        </div>
                    ))}
                </div>
            </div>
        </BackgroundStyle>
    );
}
