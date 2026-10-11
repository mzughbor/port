import { useState } from 'react';

export default function Navbar() {
    const [activeTab, setActiveTab] = useState('Home');
    const navItems = ['Home', 'About', 'Services', 'Resume', 'Projects', 'Contact'];

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
            <div className="bg-white/90 backdrop-blur-md border border-[#dadce0] rounded-full px-6 py-2.5 flex items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.06)]">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <a href="#" className="flex items-center gap-2">
                        <img 
                            src={`${import.meta.env.BASE_URL}white-original-mzughbor.gif`}
                            alt="Mahmoud Logo" 
                            className="h-8 w-auto object-contain" 
                        />
                    </a>
                </div>

                {/* Links */}
                <ul className="flex items-center gap-1 sm:gap-2">
                    {navItems.map((item) => (
                        <li key={item}>
                            <button
                                onClick={() => setActiveTab(item)}
                                className={`px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ${
                                    activeTab === item
                                        ? 'bg-[#7e5ab5] text-white font-semibold shadow-sm'
                                        : 'text-[#5f6368] hover:text-[#202124] hover:bg-gray-100'
                                }`}
                            >
                                {item}
                            </button>
                        </li>
                    ))}
                </ul>

            </div>
        </nav>
    );
}