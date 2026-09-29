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
        <section id="hero" className="w-full overflow-hidden min-h-256 relative pt-44">
            {/* bg blue frame */}
            <div className="absolute inset-0 w-full h-full ">
                <Image
                    src={bgBlueFrame}
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            {/* bottom circle */}
            <div className="absolute size-290 bottom-[-75%] left-1/2 -translate-x-1/2 overflow-hidden ">
                <Image
                    src={limeCircle}
                    alt="lime-circle"
                    width={1160}
                    height={1160}
                    className="object-cover"
                />
            </div>
            {/* character image */}
            <div className="absolute z-10 w-137.5 h-130 bottom-0 left-1/2 -translate-x-1/2 overflow-hidden ">
                <Image
                    src={heroCharacter}
                    alt="hero-character"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                />
            </div>
            {/* floating card 1: UI/UX Design (Left of Character) */}
            <div className="absolute z-20 bg-white rounded-xl p-4 sm:p-5 shadow-2xl border border-white/80 top-[60%] left-[27%] hidden lg:block">
                <p className="font-bold text-[#040819] text-sm font-satoshi">UI/UX Design</p>
                <p className="text-xs text-gray-500 font-medium mt-1">200 Courses • 1000+ Students</p>
            </div>
            {/* floating card 2: Learning Progress 55% (Right of Character) */}
            <div className="absolute z-20 bg-white rounded-xl p-5 sm:p-6 shadow-2xl border border-white/80 top-[64%] right-[27%] min-w-52.5 hidden lg:block">
                <p className="text-xs text-gray-500 font-medium">Learning Progress</p>
                <p className="text-4xl font-bold text-[#040819] font-satoshi mt-1.5 mb-3">55%</p>
                <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-[#D4FB20] h-full w-[55%] rounded-full" />
                </div>
            </div>
            {/* floating card 3: Happy Students (Bottom Left of Character) */}
            <div className="absolute z-20 bg-white rounded-xl p-4 sm:p-5 shadow-2xl border border-white/80 bottom-10 left-[29%] min-w-57.5 hidden lg:block">
                <div className="flex items-center justify-between gap-3 mb-2.5">
                    <p className="font-bold text-[#040819] text-sm font-satoshi">Happy Students</p>
                    <div className="flex items-center gap-1 text-xs font-semibold text-amber-500">
                        <span>4.5</span>
                        <span className="text-gray-400 font-normal">(240)</span>
                        <FaStar className="text-amber-400 text-xs" />
                    </div>
                </div>
                <div className="flex items-center justify-between gap-2">
                    <div className="flex -space-x-2 overflow-hidden">
                        <div className="inline-block size-7 rounded-full ring-2 ring-white bg-blue-400 bg-[url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80')] bg-cover" />
                        <div className="inline-block size-7 rounded-full ring-2 ring-white bg-emerald-400 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80')] bg-cover" />
                        <div className="inline-block size-7 rounded-full ring-2 ring-white bg-purple-400 bg-[url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80')] bg-cover" />
                        <div className="inline-block size-7 rounded-full ring-2 ring-white bg-amber-400 bg-[url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80')] bg-cover" />
                    </div>
                    <span className="px-2.5 py-1 bg-[#D4FB20] text-[#040819] text-xs font-bold rounded-full">
                        2K+
                    </span>
                </div>
            </div>
            {/* green spring */}
            <motion.div
                animate={{ y: [0, -14, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute size-96 overflow-hidden -left-28 top-36 pointer-events-none"
            >
                <Image
                    src={limeSpring}
                    alt="lime-spring"
                    width={375}
                    height={380}
                    className="object-cover"
                />
            </motion.div>
            {/* left white spring */}
            <motion.div
                animate={{ y: [0, 12, 0], rotate: [0, -4, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="absolute size-44 overflow-hidden top-132 left-60 pointer-events-none"
            >
                <Image
                    src={whiteSpring}
                    alt="lime-spring"
                    width={167}
                    height={167}
                    className="object-cover"
                />
            </motion.div>
            {/* white round */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute size-96 overflow-hidden -bottom-14 left-8 pointer-events-none"
            >
                <Image
                    src={whiteCircle}
                    alt="lime-spring"
                    width={375}
                    height={375}
                    className=" w-full h-full object-contain"
                />
            </motion.div>
            {/* right shape-lime-cylinder */}
            <motion.div
                animate={{ y: [0, -14, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="absolute size-96 overflow-hidden -right-28 top-36 pointer-events-none"
            >
                <Image
                    src={shapeLimeCylinder}
                    alt="lime-spring"
                    width={375}
                    height={375}
                    className=" w-full h-full object-contain"
                />
            </motion.div>
            {/* white pyramid */}
            <motion.div
                animate={{ y: [0, 14, 0], rotate: [0, 4, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                className="absolute size-44 overflow-hidden top-132 right-60 pointer-events-none"
            >
                <Image
                    src={whitePyramid}
                    alt="lime-spring"
                    width={167}
                    height={167}
                    className="object-cover"
                />
            </motion.div>
            {/* right white spring */}
            <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="absolute size-96 overflow-hidden -bottom-14 right-8 pointer-events-none"
            >
                <Image
                    src={whiteSpring}
                    alt="lime-spring"
                    width={375}
                    height={375}
                    className=" w-full h-full object-contain"
                />
            </motion.div>
            {/*  content */}
            <div className="flex flex-col relative z-50 mx-auto p-2 items-center max-w-5xl">
                <p className="text-white font-semibold text-7xl pb-10 tracking-[-0.72px] text-center">Get Access to Hundreds Courses Available</p>
                <p className="text-lg text-[#E5E6E8] pb-16 text-center">Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>
                
                {/* Search Form with React Hook Form - Separate Pills with Gap */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full max-w-2xl flex items-center justify-center gap-3.5"
                >
                    <div className="flex-1 flex items-center bg-white rounded-full px-6 py-4 shadow-xl border border-white/60 focus-within:ring-2 focus-within:ring-[#D4FB20] transition-all">
                        <FiSearch className="text-gray-400 text-lg mr-3 shrink-0" />
                        <input
                            type="text"
                            {...register("query")}
                            placeholder="Course, topic, creator"
                            className="w-full bg-transparent text-gray-800 text-sm outline-none placeholder:text-gray-400 font-medium"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-[#D4FB20] hover:bg-[#c6ec1c] text-[#040819] font-bold text-sm px-9 py-4 rounded-full transition-all shrink-0 cursor-pointer shadow-lg active:scale-95"
                    >
                        Search
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Hero;