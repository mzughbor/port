import heroImage from '../assets/IMG_Hero_20250214.png'

export default function Hero() {
    return (
        <section className="w-full min-h-screen bg-[#f8f9fa] text-[#202124] pt-36 pb-20 px-6 flex flex-col justify-center items-center overflow-hidden">

            {/* Inner Container */}
            <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center">

                {/* Top Greeting Pill (Using classic blue) */}
                <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wide shadow-xs transition-all hover:shadow-md cursor-pointer">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    Available for New Opportunities
                </div>
                
                {/* Main Heading */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] max-w-4xl text-[#202124]">
                    I'm <span className="text-[#7e5ab5]">Mahmoud</span>,<br />
                    Full-Stack Web Developer.
                </h1>

                {/* Subtitle */}
                <p className="mt-6 text-lg sm:text-xl text-[#5f6368] max-w-2xl font-normal leading-relaxed">
                    Building scalable web applications, robust backend architectures, and clean user-focused interfaces with precision.
                </p>

                {/* Hero Graphic & Floating Elements */}
                <div className="relative mt-16 w-full max-w-4xl flex justify-center items-end">

                    {/* Left Floating Card */}
                    <div className="hidden lg:block absolute left-8 top-1/4 z-30 max-w-[220px] p-5 rounded-2xl bg-white border border-[#dadce0] shadow-[0_4px_20px_rgba(0,0,0,0.06)] text-left">
                        <span className="text-[#7e5ab5] text-2xl font-serif">“</span>
                        <p className="text-xs text-[#5f6368] leading-relaxed mt-1 font-medium">
                            Delivering clean code, robust APIs, and reliable project execution.
                        </p>
                    </div>

                    {/* Center Stack: Arch & Image */}
                    <div className="relative w-80 sm:w-96 h-[400px] flex justify-center items-end">

                        {/* Arch Background using #7e5ab5 tints */}
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#f4f0fb] to-white rounded-t-full border-t border-[#e2d9ed] shadow-sm z-0" />

                        {/* Photo Layer */}
                        <div className="absolute -bottom-2 z-10 w-[115%] h-[115%] flex justify-center items-end pointer-events-none">
                            <img
                                src={heroImage}
                                alt="Mahmoud Zughbor"
                                className="w-full h-full object-contain object-bottom pointer-events-auto filter drop-shadow-md"
                            />
                        </div>

                        {/* Floating Action Pill */}
                        <div className="absolute bottom-6 z-30 p-1.5 rounded-full bg-white/90 border border-[#dadce0] backdrop-blur-md flex items-center gap-2 shadow-lg">
                            <a
                                href="#projects"
                                className="px-6 py-2.5 rounded-full bg-[#7e5ab5] hover:bg-[#6c48a3] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm flex items-center gap-1.5"
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
                        <p className="text-xl font-bold text-[#202124]">Full-Stack Tech</p>
                        <p className="text-xs text-[#5f6368] font-medium mt-0.5">React, Node, Django & PHP</p>
                    </div>

                </div>

            </div>

        </section>
    );
}