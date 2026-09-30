"use client";

import { Button } from "@/components/ui/button";
import bgBlueFrame from "@/public/hero_frame.png";
import Image from "next/image";
import { FiArrowLeft, FiClock } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";

interface UnderDevelopmentProps {
    title: string;
    subtitle?: string;
    description?: string;
    badge?: string;
    primaryActionHref?: string;
    primaryActionLabel?: string;
}

export default function UnderDevelopment({
    title,
    subtitle,
    description = "We are currently designing and engineering this experience with cutting-edge features. Check back soon or explore our available courses in the meantime.",
    badge = "Under Development",
    primaryActionHref = "/courses",
    primaryActionLabel = "Explore Courses",
}: UnderDevelopmentProps) {
    return (
        <main className="relative w-full flex-1 flex flex-col items-center justify-center bg-[#003BE2] min-h-[70vh] sm:min-h-[76vh] md:min-h-[82vh] pt-28 sm:pt-36 md:pt-42 pb-16 sm:pb-20 md:pb-24 px-4 overflow-hidden text-center">
            {/* Blue Grid Backdrop (Matching 404 Not Found Page) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
                <Image
                    src={bgBlueFrame}
                    alt="Background Grid"
                    fill
                    className="object-cover opacity-90"
                    priority
                />
            </div>

            {/* Ambient Lime & Blue Glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 size-72 sm:size-96 rounded-full bg-lime/15 blur-3xl pointer-events-none" />

            {/* Inner Content Container */}
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-5 sm:gap-6">
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-xs">
                    <span className="relative flex size-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75" />
                        <span className="relative inline-flex rounded-full size-2 bg-lime" />
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white tracking-tight">
                        {badge}
                    </span>
                </div>

                {/* Animated Clock / Sparkles Box */}
                <div className="relative size-16 sm:size-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center text-lime transition-transform hover:scale-105 duration-300">
                    <FiClock className="size-8 sm:size-10 text-lime animate-pulse" />
                    <HiOutlineSparkles className="size-4 sm:size-5 text-white absolute -top-1.5 -right-1.5" />
                </div>

                {/* Title & Subtitle */}
                <div className="flex flex-col gap-2.5 sm:gap-3.5">
                    <h1 className="text-2xl 2xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-sm sm:text-base md:text-lg font-semibold text-lime">
                            {subtitle}
                        </p>
                    )}
                    <p className="text-xs sm:text-sm md:text-base text-blue-100/85 font-satoshi max-w-lg mx-auto leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-2 w-full sm:w-auto">
                    <Button
                        isLink
                        href="/"
                        variant="outline"
                        className="w-full sm:w-auto px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-full text-xs sm:text-sm md:text-base font-semibold border border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                        <FiArrowLeft className="size-4" />
                        <span>Back to Home</span>
                    </Button>
                    <Button
                        isLink
                        href={primaryActionHref}
                        variant="secondary"
                        className="w-full sm:w-auto px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-full text-xs sm:text-sm md:text-base font-bold bg-lime text-black hover:bg-lime/90 shadow-lg shadow-black/15 transition-all duration-300 active:scale-95 cursor-pointer"
                    >
                        {primaryActionLabel}
                    </Button>
                </div>
            </div>
        </main>
    );
}
