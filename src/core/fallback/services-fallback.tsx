import React from 'react';
import BackgroundStyle from '@/core/common/background';

export default function ServicesFallback() {
    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 animate-pulse">
                <div className="rounded-xl border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-gray-800/50 p-4 sm:p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6">
                        {/* Text Content */}
                        <div className="text-center sm:text-left w-full sm:w-auto space-y-2">
                            <div className="h-6 w-56 bg-gray-200 dark:bg-gray-800 rounded mx-auto sm:mx-0" />
                            <div className="h-4 w-48 bg-gray-200 dark:bg-gray-800 rounded mx-auto sm:mx-0" />
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 w-full sm:w-auto">
                            <div className="h-9 w-32 bg-gray-200 dark:bg-gray-800 rounded" />
                            <div className="h-9 w-28 bg-gray-200 dark:bg-gray-800 rounded" />
                        </div>
                    </div>
                </div>
            </div>
        </BackgroundStyle>
    );
}
