import React from 'react';
import BackgroundStyle from '../common/background';

export default function ContributionsFallback() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return (
        <BackgroundStyle className="p-6 md:p-8 animate-pulse">
            {/* Header Skeleton */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800">
                        <div className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                        <div className="h-6 w-40 bg-gray-200 dark:bg-gray-800 rounded" />
                        <div className="h-4 w-28 bg-gray-200 dark:bg-gray-800 rounded" />
                    </div>
                </div>
                <div className="h-10 w-40 bg-gray-200 dark:bg-gray-800 rounded-xl" />
            </div>

            {/* Contributions Grid Skeleton */}
            <div className="space-y-6">
                <div className="relative overflow-x-auto pb-4">
                    <div className="min-w-[800px] md:min-w-full">
                        {/* Month Labels Skeleton */}
                        <div className="grid grid-cols-12 mb-3">
                            {months.map((month) => (
                                <div key={month} className="h-3 w-8 bg-gray-200 dark:bg-gray-800 rounded" />
                            ))}
                        </div>

                        {/* Contribution Grid Skeleton */}
                        <div className="grid grid-cols-12 gap-2 md:gap-3">
                            {months.map((month) => (
                                <div key={month} className="space-y-1">
                                    <div className="grid grid-cols-4 gap-1">
                                        {[...Array(4)].map((_, weekIndex) => (
                                            <div key={weekIndex} className="grid grid-rows-7 gap-1">
                                                {[...Array(7)].map((_, dayIndex) => (
                                                    <div
                                                        key={dayIndex}
                                                        className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm bg-gray-200 dark:bg-gray-800"
                                                    />
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats and Legend Skeleton */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6 pt-6 border-t border-gray-100 dark:border-neutral-800">
                    {/* Stats Skeleton */}
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="h-5 w-16 bg-gray-200 dark:bg-gray-800 rounded" />
                        <div className="h-5 w-16 bg-gray-200 dark:bg-gray-800 rounded" />
                        <div className="h-5 w-16 bg-gray-200 dark:bg-gray-800 rounded" />
                    </div>

                    {/* Legend Skeleton */}
                    <div className="flex items-center gap-3">
                        <div className="h-3 w-8 bg-gray-200 dark:bg-gray-800 rounded" />
                        <div className="flex gap-1.5 p-1 bg-gray-50 dark:bg-neutral-800/50 rounded-lg border border-gray-100 dark:border-neutral-800">
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-3 h-3 rounded-[2px] bg-gray-200 dark:bg-gray-800"
                                />
                            ))}
                        </div>
                        <div className="h-3 w-8 bg-gray-200 dark:bg-gray-800 rounded" />
                    </div>
                </div>
            </div>
        </BackgroundStyle>
    );
}
