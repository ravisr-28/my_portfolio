import { useEffect, useState } from 'react'
import { FaChevronDown, FaGithub, FaUsers, FaCode, FaStar } from 'react-icons/fa'
import BackgroundStyle from '../../core/BackgroundStyle'
import { motion, AnimatePresence } from 'framer-motion'

async function fetchGitHubContributions(username, year) {
    const token = import.meta.env.VITE_GITHUB_TOKEN
    if (!token) return null

    const targetYear = year || new Date().getFullYear()
    const from = `${targetYear}-01-01T00:00:00Z`
    const to = `${targetYear}-12-31T23:59:59Z`

    const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({
            query: `query($username: String!, $from: DateTime!, $to: DateTime!) {
                user(login: $username) {
                    followers { totalCount }
                    repositories(privacy: PUBLIC) { totalCount }
                    contributionsCollection(from: $from, to: $to) {
                        contributionCalendar {
                            totalContributions
                            weeks { contributionDays { contributionCount date weekday } }
                        }
                        startedAt endedAt
                    }
                }
            }`,
            variables: { username, from, to },
        }),
    })

    if (!response.ok) throw new Error(`GitHub API error: ${response.status}`)
    const { data, errors } = await response.json()
    if (errors) throw new Error(errors.map(e => e.message).join('\n'))

    return {
        year: targetYear,
        collection: data.user.contributionsCollection,
        followers: data.user.followers.totalCount,
        publicRepos: data.user.repositories.totalCount,
    }
}

export default function GithubContribution() {
    const [contributions, setContributions] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
    const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false)

    useEffect(() => {
        const loadData = async () => {
            setLoading(true)
            try {
                const data = await fetchGitHubContributions('ravisr-28', selectedYear)
                setContributions(data)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error')
            } finally {
                setLoading(false)
            }
        }
        loadData()
    }, [selectedYear])

    const getContributionColor = (count) => {
        if (count === 0) return 'bg-gray-100 dark:bg-neutral-800/50'
        if (count < 2) return 'bg-blue-200 dark:bg-blue-900/40'
        if (count < 4) return 'bg-blue-300 dark:bg-blue-700/60'
        if (count < 6) return 'bg-blue-400 dark:bg-blue-600/80'
        return 'bg-blue-500 dark:bg-blue-500'
    }

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const years = [2026, 2025, 2024]

    if (loading) return (
        <BackgroundStyle className="p-6 md:p-8">
            <div className="animate-pulse space-y-4">
                <div className="h-8 bg-gray-800/50 rounded w-48" />
                <div className="h-32 bg-gray-800/50 rounded" />
            </div>
        </BackgroundStyle>
    )
    if (error || !contributions) return null

    return (
        <BackgroundStyle className="p-6 md:p-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl text-gray-900 dark:text-white">
                        <FaGithub className="text-2xl" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">GitHub Activity</h2>
                        <a href="https://github.com/ravisr-28" target="_blank" rel="noopener noreferrer"
                            className="text-sm font-medium text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                            @ravisr-28
                        </a>
                    </div>
                </div>

                <div className="relative w-full sm:w-auto z-10">
                    <button onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
                        className="flex items-center justify-between gap-3 px-4 py-2.5 w-full sm:w-40 text-sm font-medium border border-gray-200 dark:border-gray-800 rounded-xl hover:border-gray-300 dark:hover:border-gray-800 transition-all duration-200 shadow-sm">
                        <span>Year: {selectedYear}</span>
                        <FaChevronDown className={`w-3 h-3 transition-transform duration-300 text-gray-400 ${isYearDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                        {isYearDropdownOpen && (
                            <motion.div initial={{ opacity: 0, y: 5, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 5, scale: 0.95 }} transition={{ duration: 0.1 }}
                                className="absolute right-0 mt-2 w-full border border-gray-200 dark:border-gray-800 rounded-xl py-1.5 shadow-xl overflow-hidden bg-white dark:bg-gray-900">
                                {years.map((year) => (
                                    <button key={year} onClick={() => { setSelectedYear(year); setIsYearDropdownOpen(false) }}
                                        className={`w-full px-4 py-2 text-left text-sm font-medium transition-colors ${selectedYear === year ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50'}`}>
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
                <div className="relative overflow-x-auto pb-4">
                    <div className="min-w-[800px] md:min-w-full">
                        <div className="grid grid-cols-12 mb-3">
                            {months.map((month) => (
                                <div key={month} className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">{month}</div>
                            ))}
                        </div>
                        <div className="grid grid-cols-12 gap-2 md:gap-3">
                            {months.map((month, monthIndex) => {
                                const monthWeeks = contributions.collection.contributionCalendar.weeks.filter(week => {
                                    const weekDate = new Date(week.contributionDays[0].date)
                                    return weekDate.getMonth() === monthIndex
                                })
                                return (
                                    <div key={month} className="space-y-1">
                                        <div className="grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] gap-1">
                                            {monthWeeks.map((week, weekIndex) => (
                                                <div key={weekIndex} className="grid grid-rows-7 gap-1">
                                                    {week.contributionDays.map((day, dayIndex) => (
                                                        <motion.div key={`${weekIndex}-${dayIndex}`}
                                                            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: (monthIndex * 0.05) + (weekIndex * 0.01) + (dayIndex * 0.005) }}
                                                            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm ${getContributionColor(day.contributionCount)} cursor-help transition-all duration-200`}
                                                            title={`${new Date(day.date).toLocaleDateString(undefined, { dateStyle: 'long' })}: ${day.contributionCount} contributions`}
                                                            whileHover={{ scale: 1.5, borderRadius: '4px', zIndex: 10 }}
                                                        />
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* Stats and Legend */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6 pt-6 border-t border-gray-100 dark:border-neutral-800">
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white">
                            <FaStar className="text-orange-500 dark:text-orange-400" />
                            <span>{contributions.collection.contributionCalendar.totalContributions.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white">
                            <FaCode className="text-blue-500 dark:text-blue-400" />
                            <span>{contributions.publicRepos.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white">
                            <FaUsers className="text-purple-500 dark:text-purple-400" />
                            <span>{contributions.followers.toLocaleString()}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-medium text-gray-500 dark:text-neutral-400">
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
            </div>
        </BackgroundStyle>
    )
}
