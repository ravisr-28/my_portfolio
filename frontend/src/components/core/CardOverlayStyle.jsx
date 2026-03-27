import React from 'react'

export default function CardOverlayStyle() {
    return (
        <>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-100/50 to-transparent dark:from-gray-700/20 rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray-100/30 to-transparent dark:from-gray-700/10 rounded-tr-full" />
        </>
    )
}
