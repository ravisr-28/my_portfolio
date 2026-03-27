import React from 'react'

export default function ContentWrapper({ children }) {
    return (
        <main className="w-full relative">
            {children}
        </main>
    )
}
