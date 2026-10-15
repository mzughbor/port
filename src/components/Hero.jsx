import { useEffect, useState } from 'react'
import portfolio from '../data/portfolioData.json'

const { profile } = portfolio;
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
        <section id="home" className="flex min-h-screen w-full scroll-mt-28 flex-col items-center justify-center overflow-hidden bg-[var(--palette-salmon-soft)] px-6 pb-20 pt-36 text-[#202124]">

            {/* Inner Container */}
            <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center">

                {/* Top Greeting Pill (Using classic blue) */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--palette-salmon-mid)] bg-white/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#202124] shadow-xs">
                    <span className="size-2 rounded-full bg-[var(--palette-green)]"></span>
                    Available for New Opportunities
                </div>
                
                {/* Main Heading */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] max-w-4xl text-[#202124]">
                    I'm <span className="name-color-cycle">Mahmoud Zughbor</span>,<br />
                    {profile.title}.
                </h1>

                {/* Subtitle */}
                <p className="mt-6 text-lg sm:text-xl text-[#5f6368] max-w-2xl font-normal leading-relaxed">
                    {profile.tagline}
                </p>

                {/* Hero Graphic & Floating Elements */}
                <div className="relative mt-16 w-full max-w-4xl flex justify-center items-end">

                    {/* Left Floating Card */}
                    <div className="hidden lg:block absolute left-8 top-1/4 z-30 max-w-[220px] p-5 rounded-2xl bg-white border border-[#dadce0] shadow-[0_4px_20px_rgba(0,0,0,0.06)] text-left">
                        <span className="text-[var(--palette-salmon)] text-2xl font-serif">“</span>
                        <p className="text-xs text-[#5f6368] leading-relaxed mt-1 font-medium">
                            Delivering clean code, robust APIs, and reliable project execution.
                        </p>
                    </div>

                    {/* Center Stack: Arch & Image */}
                    <div className="relative w-80 sm:w-96 h-[400px] flex justify-center items-end">

                        <div className="absolute inset-0 z-0 h-full w-full rounded-t-full border-t border-[var(--palette-salmon-mid)] bg-gradient-to-t from-[var(--palette-salmon-mid)] to-white shadow-sm" />

                        {/* Photo Layer */}
                        <div className="absolute -bottom-2 z-10 w-[115%] h-[115%] flex justify-center items-end pointer-events-none">
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
                                className="flex items-center gap-1.5 rounded-full bg-[var(--palette-green)] px-6 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#467b25] sm:text-sm"
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
                    <div className="hidden lg:block absolute right-8 top-1/4 z-30 p-5 rounded-2xl bg-white border border-[#dadce0] shadow-[0_4px_20px_rgba(0,0,0,0.06)] text-left">
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