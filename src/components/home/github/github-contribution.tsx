'use client';

import { useEffect, useState } from 'react';
import { fetchGitHubContributions } from '@/apis/fetch-github';
import type { GitHubContributions } from '@/types/github-types';
import { FaChevronDown, FaGithub, FaUsers, FaCode, FaStar } from 'react-icons/fa';
import ContributionsFallback from '@/core/fallback/contributions-fallback';
import BackgroundStyle from '../../../core/common/background';
import { motion, AnimatePresence } from 'framer-motion';

export default function GitHubContributions() {
    const [contributions, setContributions] = useState<GitHubContributions | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
    const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchGitHubContributions('mohitxcodes', selectedYear);
                if (data) {
                    setContributions(data);
                } else {
                    setError('Failed to load contributions');
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [selectedYear]);

    const getContributionColor = (count: number): string => {
        if (count === 0) return 'bg-gray-100 dark:bg-neutral-800/50';
        if (count < 2) return 'bg-blue-200 dark:bg-blue-900/40';
        if (count < 4) return 'bg-blue-300 dark:bg-blue-700/60';
        if (count < 6) return 'bg-blue-400 dark:bg-blue-600/80';
        return 'bg-blue-500 dark:bg-blue-500';
    };

    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const years = [2025, 2024, 2023];

    if (loading) return <ContributionsFallback />;
    if (error) return <div className="text-red-400 p-4 border border-red-200 rounded-lg">Error: {error}</div>;
    if (!contributions) return null;

    return (
        <BackgroundStyle className="p-6 md:p-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-white">
                        <FaGithub className="text-2xl" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                            GitHub Activity
                        </h2>
                        <a
                            href="https://github.com/mohitxcodes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                        >
                            @mohitxcodes
                        </a>
                    </div>
                </div>

                <div className="relative w-full sm:w-auto z-10">
                    <button
                        onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
                        className="flex items-center justify-between gap-3 px-4 py-2.5 w-full sm:w-40
                        text-sm font-medium
                        bg-white dark:bg-neutral-800 
                        border border-gray-200 dark:border-neutral-700
                        rounded-xl hover:border-gray-300 dark:hover:border-neutral-600
                        transition-all duration-200 shadow-sm"
                    >
                        <span>Year: {selectedYear}</span>
                        <FaChevronDown className={`w-3 h-3 transition-transform duration-300 text-gray-400 ${isYearDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                        {isYearDropdownOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 5, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                                transition={{ duration: 0.1 }}
                                className="absolute right-0 mt-2 w-full 
                                bg-white dark:bg-neutral-800 
                                border border-gray-200 dark:border-neutral-700 
                                rounded-xl py-1.5 shadow-xl overflow-hidden"
                            >
                                {years.map((year) => (
                                    <button
                                        key={year}
                                        onClick={() => {
                                            setSelectedYear(year);
                                            setIsYearDropdownOpen(false);
                                        }}
                                        className={`w-full px-4 py-2 text-left text-sm font-medium transition-colors
                                            ${selectedYear === year
                                                ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                                                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-700/50'
                                            }`}
                                    >
                                        {year}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Contributions Grid */}
            <div className="space-y-6">
                <div className="relative overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-neutral-700">
                    <div className="min-w-[800px] md:min-w-full">
                        {/* Month Labels */}
                        <div className="grid grid-cols-12 mb-3">
                            {months.map((month) => (
                                <div key={month} className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
                                    {month}
                                </div>
                            ))}
                        </div>

                        {/* Contribution Grid */}
                        <div className="grid grid-cols-12 gap-2 md:gap-3">
                            {months.map((month, monthIndex) => {
                                const monthWeeks = contributions.collection.contributionCalendar.weeks.filter(week => {
                                    const weekDate = new Date(week.contributionDays[0].date);
                                    return weekDate.getMonth() === monthIndex;
                                });

                                return (
                                    <div key={month} className="space-y-1">
                                        <div className="grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] gap-1">
                                            {monthWeeks.map((week, weekIndex) => (
                                                <div key={weekIndex} className="grid grid-rows-7 gap-1">
                                                    {week.contributionDays.map((day, dayIndex) => (
                                                        <motion.div
                                                            key={`${weekIndex}-${dayIndex}`}
                                                            initial={{ opacity: 0, scale: 0 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: (monthIndex * 0.05) + (weekIndex * 0.01) + (dayIndex * 0.005) }}
                                                            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm ${getContributionColor(day.contributionCount)} 
                                                            cursor-help transition-all duration-200`}
                                                            title={`${new Date(day.date).toLocaleDateString(undefined, { dateStyle: 'long' })}: ${day.contributionCount} contributions`}
                                                            whileHover={{ scale: 1.5, borderRadius: '4px', zIndex: 10 }}
                                                        />
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Legend */}
                <div className="flex items-center justify-end gap-3 text-xs font-medium text-gray-500 dark:text-neutral-400">
                    <span>Less</span>
                    <div className="flex gap-1.5 p-1 bg-gray-50 dark:bg-neutral-800/50 rounded-lg border border-gray-100 dark:border-neutral-800">
                        <div className="w-3 h-3 rounded-[2px] bg-gray-100 dark:bg-neutral-800/50" />
                        <div className="w-3 h-3 rounded-[2px] bg-blue-200 dark:bg-blue-900/40" />
                        <div className="w-3 h-3 rounded-[2px] bg-blue-300 dark:bg-blue-700/60" />
                        <div className="w-3 h-3 rounded-[2px] bg-blue-400 dark:bg-blue-600/80" />
                        <div className="w-3 h-3 rounded-[2px] bg-blue-500 dark:bg-blue-500" />
                    </div>
                    <span>More</span>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100 dark:border-neutral-800">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 dark:bg-neutral-800/30 border border-gray-100 dark:border-neutral-800">
                    <div className="p-2.5 rounded-xl bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400">
                        <FaStar className="text-lg" />
                    </div>
                    <div>
                        <p className="text-xs font-medium text-gray-500 dark:text-neutral-400 uppercase tracking-wider">Total Contributions</p>
                        <p className="text-lg font-bold text-gray-900 dark:text-white tabular-nums">
                            {contributions.collection.contributionCalendar.totalContributions.toLocaleString()}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 dark:bg-neutral-800/30 border border-gray-100 dark:border-neutral-800">
                    <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                        <FaCode className="text-lg" />
                    </div>
                    <div>
                        <p className="text-xs font-medium text-gray-500 dark:text-neutral-400 uppercase tracking-wider">Repositories</p>
                        <p className="text-lg font-bold text-gray-900 dark:text-white tabular-nums">
                            {contributions.publicRepos.toLocaleString()}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 dark:bg-neutral-800/30 border border-gray-100 dark:border-neutral-800">
                    <div className="p-2.5 rounded-xl bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400">
                        <FaUsers className="text-lg" />
                    </div>
                    <div>
                        <p className="text-xs font-medium text-gray-500 dark:text-neutral-400 uppercase tracking-wider">Followers</p>
                        <p className="text-lg font-bold text-gray-900 dark:text-white tabular-nums">
                            {contributions.followers.toLocaleString()}
                        </p>
                    </div>
                </div>
            </div>
        </BackgroundStyle>
    );
}