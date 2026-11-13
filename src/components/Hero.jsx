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

export default function Hero() {
    return (
        <section id="home" className="relative flex min-h-screen w-full scroll-mt-28 items-center overflow-hidden bg-[#202124] px-4 py-24 text-white sm:px-6 sm:py-28 lg:px-8">
            <img
                src={`${import.meta.env.BASE_URL}IMG_20261026_234154.jpg`}
                alt=""
                aria-hidden="true"
                fetchPriority="high"
                className="absolute inset-0 h-full w-full object-cover object-left sm:object-center"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-black/70" />

            <div className="relative mx-auto w-full max-w-7xl">
                <div className="flex max-w-3xl flex-col items-start text-left">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/30 px-4 py-1.5 text-xs font-semibold tracking-wide text-white">
                        <span className="size-2 rounded-full bg-[#a8fa72]"></span>
                        Available for New Opportunities
                    </div>
                    <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl xl:text-6xl">
                        I'm {profile.name},<br />
                        <TypingTitle />
                    </h1>
                    <p className="mt-5 max-w-2xl text-base font-normal leading-relaxed text-white sm:mt-6 sm:text-lg lg:text-xl">
                        {profile.tagline}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="#projects"
                            className="rounded-full bg-[var(--palette-movy)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#6e21b8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Explore Projects ↗
                        </a>
                        <a
                            href="#contact"
                            className="rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#202124] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Contact me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}