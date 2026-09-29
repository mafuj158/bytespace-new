"use client";

import Image from "next/image";
import bgBlueFrame from "@/public/hero_frame.png";
import heroCharacter from "@/public/hero-character.png";
import limeCircle from "@/public/lime-circle.png";
import limeSpring from "@/public/lime-spring.png";
import shapeLimeCylinder from "@/public/shape-lime-cylinder.png";
import whiteCircle from "@/public/white-circle.png";
import whitePyramid from "@/public/white-pyramid.png";
import whiteSpring from "@/public/white-spring.png";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

type SearchFormInputs = {
    query: string;
};

const Hero = () => {
    const { register, handleSubmit } = useForm<SearchFormInputs>();

    const onSubmit = (data: SearchFormInputs) => {
        if (data.query) {
            window.location.href = `/courses?search=${encodeURIComponent(data.query)}`;
        }
    };

    return (
        <section id="hero" className="w-full overflow-hidden min-h-170 sm:min-h-200 md:min-h-240 lg:min-h-256 relative pt-36 sm:pt-44 md:pt-48 lg:pt-52">
            {/* bg blue frame */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={bgBlueFrame}
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            {/* bottom circle */}
            <div className="absolute size-170 sm:size-220 md:size-260 lg:size-290 bottom-[-50%] sm:bottom-[-65%] lg:bottom-[-75%] left-1/2 -translate-x-1/2 overflow-hidden pointer-events-none">
                <Image
                    src={limeCircle}
                    alt="lime-circle"
                    width={1160}
                    height={1160}
                    className="object-cover"
                />
            </div>
            {/* character image */}
            <div className="absolute z-10 w-85 h-70 sm:w-105 sm:h-100 md:w-120 md:h-115 lg:w-137.5 lg:h-130 bottom-0 left-1/2 -translate-x-1/2 overflow-hidden pointer-events-none">
                <Image
                    src={heroCharacter}
                    alt="hero-character"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                />
            </div>
            {/* floating card 1: UI/UX Design (Left of Character) */}
            <div className="absolute z-20 bg-white rounded-xl p-3.5 sm:p-4 lg:p-5 shadow-2xl border border-white/80 top-[58%] lg:top-[60%] left-[10%] lg:left-[16%] xl:left-[22%] 2xl:left-[27%] hidden lg:block">
                <p className="font-bold text-[#040819] text-xs sm:text-sm font-satoshi">UI/UX Design</p>
                <p className="text-[11px] sm:text-xs text-gray-500 font-medium mt-1">200 Courses • 1000+ Students</p>
            </div>
            {/* floating card 2: Learning Progress 55% (Right of Character) */}
            <div className="absolute z-20 bg-white rounded-xl p-4 sm:p-5 lg:p-6 shadow-2xl border border-white/80 top-[62%] lg:top-[64%] right-[10%] lg:right-[16%] xl:right-[22%] 2xl:right-[27%] min-w-44 sm:min-w-52.5 hidden lg:block">
                <p className="text-[11px] sm:text-xs text-gray-500 font-medium">Learning Progress</p>
                <p className="text-3xl lg:text-4xl font-bold text-[#040819] font-satoshi mt-1 mb-2.5">55%</p>
                <div className="w-full bg-gray-100 h-2 sm:h-2.5 rounded-full overflow-hidden">
                    <div className="bg-[#D4FB20] h-full w-[55%] rounded-full" />
                </div>
            </div>
            {/* floating card 3: Happy Students (Bottom Left of Character) */}
            <div className="absolute z-20 bg-white rounded-xl p-3.5 sm:p-4 lg:p-5 shadow-2xl border border-white/80 bottom-8 lg:bottom-10 left-[12%] lg:left-[18%] xl:left-[24%] 2xl:left-[29%] min-w-48 sm:min-w-57.5 hidden lg:block">
                <div className="flex items-center justify-between gap-3 mb-2">
                    <p className="font-bold text-[#040819] text-xs sm:text-sm font-satoshi">Happy Students</p>
                    <div className="flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-amber-500">
                        <span>4.5</span>
                        <span className="text-gray-400 font-normal">(240)</span>
                        <FaStar className="text-amber-400 text-[10px] sm:text-xs" />
                    </div>
                </div>
                <div className="flex items-center justify-between gap-2">
                    <div className="flex -space-x-2 overflow-hidden">
                        <div className="inline-block size-6 sm:size-7 rounded-full ring-2 ring-white bg-blue-400 bg-[url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80')] bg-cover" />
                        <div className="inline-block size-6 sm:size-7 rounded-full ring-2 ring-white bg-emerald-400 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80')] bg-cover" />
                        <div className="inline-block size-6 sm:size-7 rounded-full ring-2 ring-white bg-purple-400 bg-[url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80')] bg-cover" />
                        <div className="inline-block size-6 sm:size-7 rounded-full ring-2 ring-white bg-amber-400 bg-[url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80')] bg-cover" />
                    </div>
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-[#D4FB20] text-[#040819] text-[11px] sm:text-xs font-bold rounded-full">
                        2K+
                    </span>
                </div>
            </div>
            {/* green spring */}
            <motion.div
                animate={{ y: [0, -14, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute size-20 sm:size-32 md:size-44 lg:size-96 overflow-hidden -left-8 sm:-left-12 md:-left-16 lg:-left-28 top-32 sm:top-40 md:top-44 lg:top-52 pointer-events-none"
            >
                <Image
                    src={limeSpring}
                    alt="lime-spring"
                    width={375}
                    height={380}
                    className="w-full h-full object-contain"
                />
            </motion.div>
            {/* left white spring */}
            <motion.div
                animate={{ y: [0, 12, 0], rotate: [0, -4, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="absolute size-12 sm:size-18 md:size-28 lg:size-44 overflow-hidden top-68 sm:top-84 md:top-104 lg:top-132 left-2 sm:left-6 md:left-14 lg:left-60 pointer-events-none"
            >
                <Image
                    src={whiteSpring}
                    alt="lime-spring"
                    width={167}
                    height={167}
                    className="w-full h-full object-contain"
                />
            </motion.div>
            {/* white round */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute size-20 sm:size-32 md:size-44 lg:size-96 overflow-hidden -bottom-6 sm:-bottom-8 md:-bottom-10 lg:-bottom-14 -left-6 sm:left-1 md:left-4 lg:left-8 pointer-events-none"
            >
                <Image
                    src={whiteCircle}
                    alt="lime-spring"
                    width={375}
                    height={375}
                    className="w-full h-full object-contain"
                />
            </motion.div>
            {/* right shape-lime-cylinder */}
            <motion.div
                animate={{ y: [0, -14, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="absolute size-20 sm:size-32 md:size-44 lg:size-96 overflow-hidden -right-8 sm:-right-12 md:-right-16 lg:-right-28 top-32 sm:top-40 md:top-44 lg:top-52 pointer-events-none"
            >
                <Image
                    src={shapeLimeCylinder}
                    alt="lime-spring"
                    width={375}
                    height={375}
                    className="w-full h-full object-contain"
                />
            </motion.div>
            {/* white pyramid */}
            <motion.div
                animate={{ y: [0, 14, 0], rotate: [0, 4, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                className="absolute size-12 sm:size-18 md:size-28 lg:size-44 overflow-hidden top-68 sm:top-84 md:top-104 lg:top-132 right-2 sm:right-6 md:right-14 lg:right-60 pointer-events-none"
            >
                <Image
                    src={whitePyramid}
                    alt="lime-spring"
                    width={167}
                    height={167}
                    className="w-full h-full object-contain"
                />
            </motion.div>
            {/* right white spring */}
            <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="absolute size-20 sm:size-32 md:size-44 lg:size-96 overflow-hidden -bottom-6 sm:-bottom-8 md:-bottom-10 lg:-bottom-14 -right-6 sm:right-1 md:right-4 lg:right-8 pointer-events-none"
            >
                <Image
                    src={whiteSpring}
                    alt="lime-spring"
                    width={375}
                    height={375}
                    className="w-full h-full object-contain"
                />
            </motion.div>
            {/*  content */}
            <div className="flex flex-col relative z-50 mx-auto px-6 sm:px-8 py-2 items-center max-w-5xl">
                <h1 className="text-white font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-7xl pb-3 sm:pb-5 md:pb-6 lg:pb-10 tracking-tight text-center leading-tight sm:leading-tight lg:leading-[1.1] max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
                    Get Access to Hundreds Courses Available
                </h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#E5E6E8] pb-6 sm:pb-8 md:pb-10 lg:pb-16 text-center max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl">
                    Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
                </p>
                
                {/* Search Form with React Hook Form - Separate Pills with Gap */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl flex items-center justify-center gap-2.5 sm:gap-3.5"
                >
                    <div className="flex-1 flex items-center bg-white rounded-full px-4 py-3 sm:px-5 sm:py-3.5 lg:px-6 lg:py-4 shadow-xl border border-white/60 focus-within:ring-2 focus-within:ring-[#D4FB20] transition-all">
                        <FiSearch className="text-gray-400 text-base sm:text-lg mr-2 sm:mr-3 shrink-0" />
                        <input
                            type="text"
                            {...register("query")}
                            placeholder="Course, topic, creator"
                            className="w-full bg-transparent text-gray-800 text-xs sm:text-sm outline-none placeholder:text-gray-400 font-medium"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-[#D4FB20] hover:bg-[#c6ec1c] text-[#040819] font-bold text-xs sm:text-sm px-5 py-3 sm:px-7 sm:py-3.5 lg:px-9 lg:py-4 rounded-full transition-all shrink-0 cursor-pointer shadow-lg active:scale-95"
                    >
                        Search
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Hero;