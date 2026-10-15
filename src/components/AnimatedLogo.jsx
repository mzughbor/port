import { useEffect, useState } from 'react'

const logoFiles = [
    'white-original-mzughbor.gif',
    '1.gif',
    '2.gif',
    '3.gif',
    'lightMode-logo-yellow-shallow.gif',
    'lightMode-logo-purpule-transparent.gif',
    'darkMode-logo-coloerd-transparent.gif',
    'darkMode-logo-purpule+yellow-transparent.gif',
]

const logoPath = `${import.meta.env.BASE_URL}logos/`
const logoPassDuration = 5010
const crossfadeDuration = 450

export default function AnimatedLogo() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [loadedIndex, setLoadedIndex] = useState(null)
    const [previousIndex, setPreviousIndex] = useState(null)
    const [isCrossfading, setIsCrossfading] = useState(false)

    useEffect(() => {
        if (loadedIndex !== activeIndex) return undefined

        let isCancelled = false
        let nextLogoLoaded = false
        let currentPassFinished = false
        let advanceTimer
        let passTimer

        const nextIndex = (activeIndex + 1) % logoFiles.length
        const nextLogo = new Image()

        const advanceWhenReady = () => {
            if (isCancelled || !nextLogoLoaded || !currentPassFinished) return

            setPreviousIndex(activeIndex)
            setActiveIndex(nextIndex)
            setIsCrossfading(false)

            window.requestAnimationFrame(() => {
                if (!isCancelled) setIsCrossfading(true)
            })

            advanceTimer = window.setTimeout(() => {
                if (isCancelled) return
                setPreviousIndex(null)
                setIsCrossfading(false)
            }, crossfadeDuration)
        }

        const markNextLogoLoaded = () => {
            nextLogoLoaded = true
            advanceWhenReady()
        }

        nextLogo.decoding = 'async'
        nextLogo.fetchPriority = 'low'
        nextLogo.onload = markNextLogoLoaded
        nextLogo.src = `${logoPath}${logoFiles[nextIndex]}`

        if (nextLogo.complete && nextLogo.naturalWidth > 0) {
            markNextLogoLoaded()
        }

        passTimer = window.setTimeout(() => {
            currentPassFinished = true
            advanceWhenReady()
        }, logoPassDuration)

        return () => {
            isCancelled = true
            window.clearTimeout(advanceTimer)
            window.clearTimeout(passTimer)
            nextLogo.onload = null
        }
    }, [activeIndex, loadedIndex])

    const activeLogo = logoFiles[activeIndex]

    return (
        <span className="relative block h-8 w-[116px] overflow-hidden" aria-hidden="true">
            {previousIndex !== null && (
                <img
                    src={`${logoPath}${logoFiles[previousIndex]}`}
                    alt=""
                    width="487"
                    height="134"
                    className={`absolute inset-0 h-8 w-[116px] object-contain transition-opacity duration-500 ${isCrossfading ? 'opacity-0' : 'opacity-100'}`}
                />
            )}
            <img
                key={activeLogo}
                src={`${logoPath}${activeLogo}`}
                alt=""
                width="487"
                height="134"
                fetchPriority="high"
                onLoad={() => setLoadedIndex(activeIndex)}
                className={`absolute inset-0 h-8 w-[116px] object-contain transition-opacity duration-500 ${previousIndex === null || isCrossfading ? 'opacity-100' : 'opacity-0'}`}
            />
        </span>
    )
}