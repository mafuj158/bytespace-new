"use client"

import Image from 'next/image'
import { FaCheck, FaStar } from 'react-icons/fa'

const BENEFITS = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
]

const AVATARS = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
]

const CreateManage = () => {
    return (
        <section id="create-manage" className="py-20 overflow-hidden relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    
                    {/* Left Column: Visual Composition */}
                    <div className="lg:col-span-6 flex justify-center lg:justify-start relative order-2 lg:order-1">
                        <div className="relative w-full max-w-[540px] h-[520px] sm:h-[560px] flex items-center justify-center">
                            
                            {/* Soft background radial glow */}
                            <div className="absolute inset-0 bg-radial from-blue-500/15 via-transparent to-transparent rounded-full blur-3xl -z-10" />

                            {/* Female Creator Character Image */}
                            <div className="relative w-[340px] sm:w-[380px] h-[440px] sm:h-[490px] z-10">
                                <Image
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80"
                                    alt="Creator managing courses on tablet"
                                    fill
                                    className="object-cover rounded-3xl shadow-xl"
                                    sizes="(max-width: 768px) 100vw, 500px"
                                />
                            </div>

                            {/* Floating Dark Blue Card 1: Total Revenue (Top Left) */}
                            <div className="absolute top-8 -left-2 sm:left-2 z-20 bg-[#003BE2] text-white p-4 rounded-2xl shadow-2xl border border-blue-400/30 w-[180px] flex flex-col gap-1.5">
                                <div className="flex justify-between items-center text-[10px] text-blue-200">
                                    <span>Total Revenue</span>
                                    <span>Jan 25</span>
                                </div>
                                <span className="text-xl font-bold font-satoshi tracking-tight">$120.29</span>
                                <div className="w-full bg-blue-900/60 h-1.5 rounded-full overflow-hidden mt-1">
                                    <div className="bg-[#D4FB20] h-full rounded-full w-[70%]" />
                                </div>
                            </div>

                            {/* Floating Dark Blue Card 2: Year to Date (Middle Left) */}
                            <div className="absolute top-36 -left-4 sm:left-0 z-20 bg-[#003BE2] text-white p-4 rounded-2xl shadow-2xl border border-blue-400/30 w-[180px] flex flex-col gap-1.5">
                                <div className="flex justify-between items-center text-[10px] text-blue-200">
                                    <span>Year to Date</span>
                                    <span>2024</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-xl font-bold font-satoshi tracking-tight">$1,200.38</span>
                                    <span className="text-[10px] font-bold bg-[#D4FB20] text-black px-1.5 py-0.5 rounded-md">
                                        +10%
                                    </span>
                                </div>
                            </div>

                            {/* Decorative 3D Lime Spring */}
                            <div className="absolute top-28 right-8 sm:right-14 z-30 w-16 h-16 pointer-events-none">
                                <Image
                                    src="/lime-spring.png"
                                    alt="Decorative 3D shape"
                                    width={64}
                                    height={64}
                                    className="object-contain drop-shadow-lg"
                                />
                            </div>

                            {/* Floating Happy Students Badge (Bottom Right) */}
                            <div className="absolute bottom-6 right-0 sm:right-4 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-gray-100 shadow-xl flex flex-col gap-2 min-w-[210px]">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-semibold text-gray-900">Happy Students</span>
                                    <div className="flex items-center gap-1 text-[11px] font-semibold text-gray-700">
                                        <span>4.8</span>
                                        <FaStar className="text-amber-400 text-xs" />
                                    </div>
                                </div>
                                <div className="flex items-center -space-x-2">
                                    {AVATARS.map((avatar, idx) => (
                                        <div key={idx} className="relative w-7 h-7 rounded-full border-2 border-white overflow-hidden shadow-xs">
                                            <Image
                                                src={avatar}
                                                alt="Student"
                                                fill
                                                className="object-cover"
                                                sizes="28px"
                                            />
                                        </div>
                                    ))}
                                    <div className="relative w-7 h-7 rounded-full border-2 border-white bg-[#D4FB20] text-black text-[10px] font-bold flex items-center justify-center shadow-xs">
                                        18k+
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:col-span-6 flex flex-col items-start gap-8 order-1 lg:order-2">
                        <div className="flex flex-col gap-4 max-w-xl">
                            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-semibold text-gray-900 leading-[1.15] tracking-tight">
                                Create & Manage Courses Easily.
                            </h2>
                            <p className="text-base sm:text-lg text-[#82868E] leading-relaxed mt-2">
                                ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
                            </p>
                        </div>

                        {/* Benefits List with Checkmarks */}
                      
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CreateManage
