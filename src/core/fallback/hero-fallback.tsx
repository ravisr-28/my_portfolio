import React from 'react';
import BackgroundStyle from '@/core/common/background';

export default function HeroFallback() {
    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-8 animate-pulse">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Profile Image Skeleton */}
                    <div className="w-full md:w-auto flex justify-center md:justify-start">
                        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gray-200 dark:bg-gray-800" />
                    </div>

                    {/* Content Skeleton */}
                    <div className="flex-1 space-y-6 w-full">
                        {/* Name & Title */}
                        <div className="space-y-3">
                            <div className="h-8 sm:h-10 w-3/4 bg-gray-200 dark:bg-gray-800 rounded" />
                            <div className="h-6 w-1/2 bg-gray-200 dark:bg-gray-800 rounded" />
                            <div className="flex items-center gap-2">
                                <div className="h-4 w-4 bg-gray-200 dark:bg-gray-800 rounded" />
                                <div className="h-4 w-32 bg-gray-200 dark:bg-gray-800 rounded" />
                            </div>
                        </div>

                        {/* Bio */}
                        <div className="space-y-2">
                            <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded" />
                            <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-800 rounded" />
                            <div className="h-4 w-4/5 bg-gray-200 dark:bg-gray-800 rounded" />
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-lg" />
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                            <div className="h-10 w-32 bg-gray-200 dark:bg-gray-800 rounded-lg" />
                            <div className="h-10 w-28 bg-gray-200 dark:bg-gray-800 rounded-lg" />
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="h-6 w-16 bg-gray-200 dark:bg-gray-800 rounded" />
                                    <div className="h-4 w-20 bg-gray-200 dark:bg-gray-800 rounded" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </BackgroundStyle>
    );
}
