import React from 'react'

export default function BackgroundStyle({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative p-6 rounded-lg 
            border border-gray-200/60 dark:border-gray-800 
            shadow-lg backdrop-blur-sm
            transition-all duration-300
            hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-700
            hover:-translate-y-1">
            {children}
        </div>
    )
}
