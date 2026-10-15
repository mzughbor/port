import { useEffect, useState } from 'react'
import AnimatedLogo from './AnimatedLogo'

export default function Navbar({ homePath = '' }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const navItems = [
        ['Home', 'home'],
        ['About', 'about'],
        ['Skills', 'services'],
        ['Resume', 'resume'],
        ['Projects', 'projects'],
        ['Contact', 'contact'],
    ];

    useEffect(() => {
        const updateScrollState = () => setIsScrolled(window.scrollY > 12)
        updateScrollState()
        window.addEventListener('scroll', updateScrollState, { passive: true })
        return () => window.removeEventListener('scroll', updateScrollState)
    }, [])

    return (
        <nav
            aria-label="Main navigation"
            onKeyDown={(event) => {
                if (event.key === 'Escape') setIsMenuOpen(false)
            }}
            className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-white/95 shadow-[0_1px_8px_rgba(60,64,67,0.12)] backdrop-blur-md' : 'bg-[var(--palette-salmon-soft)]/90'}`}
        >
            <div className="relative mx-auto flex max-w-7xl items-center gap-4 px-4 py-2.5 sm:px-6 md:px-8">
                <button
                    type="button"
                    aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setIsMenuOpen((open) => !open)}
                    className="inline-flex size-11 shrink-0 flex-col items-center justify-center gap-[5px] rounded-full text-[#5f6368] transition-colors hover:bg-[var(--palette-salmon-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--palette-salmon)] md:hidden"
                >
                    <span className="h-0.5 w-[18px] rounded-full bg-current" />
                    <span className="h-0.5 w-[18px] rounded-full bg-current" />
                    <span className="h-0.5 w-[18px] rounded-full bg-current" />
                </button>

                <a href={`${homePath}#home`} aria-label="Mahmoud Zughbor home" className="block h-8 w-[116px] shrink-0">
                    <AnimatedLogo />
                </a>

                <ul className="ml-auto hidden items-center gap-1 md:flex">
                    {navItems.map(([label, target]) => (
                        <li key={target} className="shrink-0">
                            <a href={`${homePath}#${target}`} className="block whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-[#5f6368] transition-colors hover:bg-[var(--palette-salmon-soft)] hover:text-[#202124]">
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {isMenuOpen && (
                <ul id="mobile-navigation" className="absolute left-4 right-4 top-full grid gap-1 rounded-2xl bg-white p-2 shadow-[0_8px_28px_rgba(60,64,67,0.18)] md:hidden">
                    {navItems.map(([label, target]) => (
                        <li key={target}>
                            <a
                                href={`${homePath}#${target}`}
                                onClick={() => setIsMenuOpen(false)}
                                className="block rounded-xl px-4 py-3 text-base font-medium text-[#3c4043] transition-colors hover:bg-[var(--palette-salmon-soft)] focus-visible:outline-2 focus-visible:outline-[var(--palette-salmon)]"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}