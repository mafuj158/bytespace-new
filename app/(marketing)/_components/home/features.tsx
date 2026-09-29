
import growth_banner from "@/public/growth-banner.png"
import manage_banner from "@/public/create_and_manage_banner.png"
import Image from "next/image"
import { FaCheck, FaStar } from 'react-icons/fa'

const BENEFITS = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
]
const STATS = [
    { value: "12K", label: "Students" },
    { value: "70+", label: "Courses" },
    { value: "16", label: "Creators" },
]


const Features = () => {
    return (
        <div className="py-28 relative overflow-hidden">
            {/* content */}
            <div className="container z-20 relative flex flex-col gap-10">
                {/* professional growth */}
                <div className="flex justify-between items-center gap-16">
                    {/* left side */}
                    <div className="flex-1 flex flex-col gap-6 justify-center">
                        <p className="text-[44px] font-semibold tracking-[-0.44px] leading-[52.8px]">Your Path to Professional Growth Starts Here!</p>
                        <p className="text-lg font-satoshi">Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.</p>
                        <div className="flex items-center gap-10 sm:gap-14 pt-4">
                            {STATS.map((stat, idx) => (
                                <div key={idx} className="flex flex-col">
                                    <span className="text-3xl sm:text-4xl font-bold text-[#003BE2] font-satoshi">
                                        {stat.value}
                                    </span>
                                    <span className="text-sm font-medium text-gray-500 mt-1">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* right side */}
                    <div className="w-2xl h-xl flex justify-center items-center shrink-0">
                        <Image src={growth_banner} alt="growth banner" className="w-full h-full object-contain" />
                    </div>
                </div>
                {/* create and manage */}
                <div className="flex justify-between items-center gap-16">
                    {/* left side */}
                    <div className="w-2xl h-xl flex justify-center items-center shrink-0">
                        <Image src={manage_banner} alt="growth banner" className="w-full h-full object-contain" />
                    </div>
                    {/* right side */}
                    <div className="flex-1 flex flex-col gap-6 justify-center">
                        <p className="text-[44px] font-semibold tracking-[-0.44px] leading-[52.8px]">Create & Manage Courses Easily.</p>
                        <p className="text-lg font-satoshi"><b>ByteSpace</b> supports individuals or entities in the creation, publication, and administration of educational courses. </p>

                        <div className="flex flex-col gap-4 w-full">
                            {BENEFITS.map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-3.5">
                                    <div className="w-6 h-6 rounded-full bg-[#003BE2] flex items-center justify-center text-white shrink-0 shadow-xs">
                                        <FaCheck className="text-[10px]" />
                                    </div>
                                    <span className="text-base sm:text-lg font-medium text-gray-900">
                                        {benefit}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            {/* radial lime gradient backgrounds */}
            <div className="absolute -top-150 left-[-10%] size-290 rounded-full bg-[radial-gradient(circle,rgba(203,252,1,0.4)_0%,rgba(203,252,1,0.09)_53%,rgba(203,252,1,0.02)_75%,transparent_100%)] blur-[20px] pointer-events-none"></div>

            {/* radial blue gradient backgrounds */}
            <div className="absolute top-[-30%] right-[-20%]  bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,59,226,0.08)_0%,rgba(0,59,226,0.02)_53%,rgba(0,59,226,0.00)_75%,rgba(0,59,226,0.00)_100%)] size-290 rounded-full  blur-[20px] pointer-events-none"></div>
            {/* botmm blue radial gradient */}
            <div className="absolute bottom-[-35%] right-[-30%]  size-300 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,59,226,0.24)_0%,rgba(0,59,226,0.06)_53%,rgba(0,59,226,0.01)_75%,rgba(0,59,226,0)_100%)] blur-[20px] pointer-events-none"></div>

            <div className="absolute top-1/2 -translate-y-1/2  left-[-25%]  size-200 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,59,226,0.24)_0%,rgba(0,59,226,0.06)_53%,rgba(0,59,226,0.01)_75%,rgba(0,59,226,0)_100%)] blur-[20px] pointer-events-none"></div>

            <div className="absolute bottom-[-20%] rotate-45 left-[-20%]  size-200 bg-[radial-gradient(circle,rgba(203,252,1,0.4)_0%,rgba(203,252,1,0.09)_53%,rgba(203,252,1,0.02)_75%,transparent_100%)] blur-[20px] pointer-events-none"></div>
        </div>
    )
}

export default Features