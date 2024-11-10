"use client"

import { useState, useEffect } from 'react';
import { ScreenSize, getScreenSize } from "@/libs/getScreenSize"

export function useMediaQuery(minScreen: ScreenSize | "", maxScreen: ScreenSize | "") {

    const query = [
        minScreen ? `(min-width: ${getScreenSize(minScreen)})` : '',
        maxScreen ? `(max-width: ${getScreenSize(maxScreen)})` : '',
    ]
        .filter(Boolean)
        .join(' and ')

    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const media = window.matchMedia(query)

        if (media.matches !== matches) {
            setMatches(media.matches)
        }

        const listener = () => setMatches(media.matches)
        media.addEventListener('change', listener)

        return () => media.removeEventListener('change', listener)

    }, [matches, query])

    return matches
}

export default useMediaQuery