import { useEffect, useState } from 'react'
import portfolio from '../data/portfolioData.json'

const { profile } = portfolio;
const titles = [`${profile.title} in the morning`, 'AI Engineer in the evening']

function TypingTitle() {
    const [visibleTitle, setVisibleTitle] = useState(titles[0])

    useEffect(() => {
        const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
        let titleIndex = 0
        let currentText = titles[0]
        let erasing = true
        let timer

        const tick = () => {
            if (erasing) {
                currentText = currentText.slice(0, -1)
                if (!currentText) {
                    titleIndex = (titleIndex + 1) % titles.length
                    erasing = false
                }
            } else {
                currentText = titles[titleIndex].slice(0, currentText.length + 1)
            }
            setVisibleTitle(currentText)

            let delay = erasing ? 45 : 90
            if (!erasing && currentText === titles[titleIndex]) {
                erasing = true
                delay = 2500
            } else if (!currentText) {
                delay = 300
            }
            timer = window.setTimeout(tick, delay)
        }

        const handleMotionChange = () => {
            window.clearTimeout(timer)
            titleIndex = 0
            currentText = titles[0]
            erasing = true
            if (motionPreference.matches) {
                setVisibleTitle(titles.join(' and '))
            } else {
                setVisibleTitle(currentText)
                timer = window.setTimeout(tick, 2500)
            }
        }

        timer = window.setTimeout(handleMotionChange, 0)
        motionPreference.addEventListener('change', handleMotionChange)
        return () => {
            window.clearTimeout(timer)
            motionPreference.removeEventListener('change', handleMotionChange)
        }
    }, [])

    return (
        <span>
            <span className="sr-only">{titles.join(' and ')}.</span>
            <span aria-hidden="true">
                {visibleTitle}
                <span className="ml-1 inline-block h-[0.9em] w-[0.06em] animate-pulse bg-current align-baseline motion-reduce:hidden" />
            </span>
        </span>
    )
}

const portraitImages = [
    {
        src: `${import.meta.env.BASE_URL}mzughbor/1780391330359.jpg`,
        width: 1936,
        height: 2592,
    },
    {
        src: `${import.meta.env.BASE_URL}mzughbor/IMG_20260922_172409.jpg`,
        width: 2448,
        height: 3264,
    },
]

export default function Hero() {
    const [activePortrait, setActivePortrait] = useState(0)

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        const rotation = window.setInterval(() => {
            setActivePortrait((current) => (current + 1) % portraitImages.length)
        }, 10000)

        return () => window.clearInterval(rotation)
    }, [])

    return (
        <section id="home" className="flex min-h-screen w-full scroll-mt-28 items-center justify-center overflow-hidden bg-[var(--palette-javascript-color-logo)] px-4 py-24 text-[#202124] sm:px-6 sm:py-28 lg:px-8">

            {/* Inner Container */}
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">

                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    {/* Top Greeting Pill (Using classic blue) */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--palette-salmon-mid)] bg-white/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#202124] shadow-xs">
                        <span className="size-2 rounded-full bg-[var(--palette-movy)]"></span>
                        Available for New Opportunities
                    </div>

                    {/* Main Heading */}
                    <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-[#202124] sm:text-4xl md:text-5xl xl:text-6xl">
                        I'm <span className="name-color-cycle">Mahmoud Zughbor</span>,<br />
                        <TypingTitle />
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-5 max-w-2xl text-base font-normal leading-relaxed text-[#5f6368] sm:mt-6 sm:text-lg lg:text-xl">
                        {profile.tagline}
                    </p>
                </div>

                {/* Hero Graphic & Floating Elements */}
                <div className="relative mx-auto flex w-full max-w-[34rem] items-end justify-center lg:mt-0">
                    {/* Left Floating Card */}
                    <div className="hidden mzlg:block absolute left-8 top-1/4 z-30 max-w-[220px] p-5 rounded-2xl bg-white border border-[#dadce0] shadow-[0_4px_20px_rgba(0,0,0,0.06)] text-left">
                        <span className="text-[var(--palette-salmon)] text-2xl font-serif">“</span>
                        <p className="text-xs text-[#5f6368] leading-relaxed mt-1 font-medium">
                            Delivering clean code, robust APIs, and reliable project execution.
                        </p>
                    </div>

                    {/* Center Stack: Arch & Image */}
                    <div className="relative flex aspect-[4/5] w-full max-w-[22rem] items-end justify-center">

                        {/* Photo Layer */}
                        <div className="pointer-events-none absolute inset-0 z-10 flex items-end justify-center">
                            {portraitImages.map((portrait, index) => {
                                const isActive = index === activePortrait
                                return (
                                    <img
                                        key={portrait.src}
                                        src={portrait.src}
                                        alt={isActive ? `${profile.name} portrait` : ''}
                                        aria-hidden={!isActive}
                                        width={portrait.width}
                                        height={portrait.height}
                                        fetchPriority={index === 0 ? 'high' : 'auto'}
                                        className={`absolute inset-0 h-full w-full object-contain object-bottom drop-shadow-md transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${isActive ? 'opacity-100' : 'opacity-0'}`}
                                    />
                                )
                            })}
                        </div>

                        {/* Floating Action Pill */}
                        <div className="absolute bottom-6 z-30 p-1.5 rounded-full bg-white/90 border border-[#dadce0] backdrop-blur-md flex items-center gap-2 shadow-lg">
                            <a
                                href="#projects"
                                className="flex items-center gap-1.5 rounded-full bg-[var(--palette-movy)] px-6 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#467b25] sm:text-sm"
                            >
                                Explore Projects ↗
                            </a>
                            <a
                                href="#contact"
                                className="px-5 py-2.5 rounded-full text-[#5f6368] hover:text-[#202124] text-xs sm:text-sm font-medium transition-colors"
                            >
                                Contact me
                            </a>
                        </div>

                    </div>

                    {/* Right Floating Card */}
                    <div className="hidden mzlg:block absolute right-8 top-1/4 z-30 p-5 rounded-2xl bg-white border border-[#dadce0] shadow-[0_4px_20px_rgba(0,0,0,0.06)] text-left">
                        <div className="flex items-center gap-1 text-amber-500 text-sm mb-1">
                            ★★★★★
                        </div>
                            <p className="text-xl font-bold text-[#202124]">Cairo, Egypt</p>
                        <p className="text-xs text-[#5f6368] font-medium mt-0.5">React, Django, WordPress & APIs</p>
                    </div>

                </div>

            </div>

        </section>
    );
}