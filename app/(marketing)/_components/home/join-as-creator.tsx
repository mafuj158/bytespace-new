"use client";
import Image from 'next/image'
import bgBlueFrame from "@/public/hero_frame.png";
import Link from 'next/link';
import limeCircle2 from "@/public/lime-circle-2.png";
import limeSpring from "@/public/lime-spring.png";
import shapeWhiteCylinder from "@/public/white-cylinder.png";
import limeSpring2 from "@/public/lime-spring-2.png";
import whitePyramid from "@/public/white-pyramid.png";
import whiteSpring from "@/public/white-spring.png";
import lime_pyramid from "@/public/lime-pyramid.png";
import { motion } from "motion/react";
const JoinAsCreator = () => {
    return (
        <section id="join-as-creator" className='py-14 sm:py-20 md:py-24 lg:py-28 min-h-95 sm:min-h-112 relative overflow-hidden flex items-center justify-center'>
            {/* bg blue frame */}
            <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
                <Image
                    src={bgBlueFrame}
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* content */}
            <div className='container relative z-10 flex flex-col gap-4 sm:gap-6 md:gap-8 justify-center items-center text-white text-center px-4 sm:px-6'>
                <h2 className='text-2xl 2xs:text-3xl sm:text-4xl lg:text-[44px] font-bold sm:font-semibold leading-tight sm:leading-snug lg:leading-14 sm:max-w-2xl lg:max-w-4xl tracking-tight'>
                    Unlock Your Potential as a Creator with ByteSpace
                </h2>
                <p className='text-xs sm:text-sm md:text-base lg:text-lg font-satoshi leading-relaxed sm:leading-7 lg:leading-8 max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl text-white/90'>
                    Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
                </p>
                <Link
                    href={'/register'}
                    className="px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full bg-lime hover:bg-[#cbf018] text-foreground font-bold text-sm sm:text-base lg:text-lg transition-all duration-200 active:scale-95 shadow-md shadow-black/15 cursor-pointer inline-flex items-center justify-center"
                >
                    Join as Creator
                </Link>
            </div>

            {/* Left side floating shapes */}
            {/* 1. Lime spring (top-left) */}
            <motion.div
                animate={{ y: [0, -14, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute size-28 xs:size-36 sm:size-52 md:size-72 lg:size-96 overflow-hidden -left-10 xs:-left-12 sm:-left-20 lg:-left-28 -top-12 xs:-top-16 sm:-top-24 lg:-top-36 pointer-events-none opacity-40 sm:opacity-90 select-none"
            >
                <Image
                    src={limeSpring}
                    alt="lime-spring"
                    width={375}
                    height={380}
                    className="w-full h-full object-contain"
                />
            </motion.div>

            {/* 2. Left lime circle (bottom-left) */}
            <motion.div
                animate={{ y: [0, 12, 0], rotate: [0, -4, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="absolute size-36 xs:size-44 sm:size-60 md:size-76 lg:size-96 overflow-hidden bottom-[-20%] sm:bottom-[-30%] lg:bottom-[-40%] -left-10 sm:left-4 lg:left-10 pointer-events-none opacity-35 sm:opacity-90 select-none"
            >
                <Image
                    src={limeCircle2}
                    alt="lime-circle"
                    width={375}
                    height={375}
                    className="w-full h-full object-contain"
                />
            </motion.div>

            {/* 3. White spring (mid top-left, hidden on small screens to avoid blocking text) */}
            <motion.div
                animate={{ y: [0, 12, 0], rotate: [0, -4, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="hidden md:block absolute md:size-28 lg:size-44 overflow-hidden top-6 lg:top-10 md:left-20 lg:left-50 pointer-events-none opacity-70 lg:opacity-100 select-none"
            >
                <Image
                    src={whiteSpring}
                    alt="white-spring"
                    width={167}
                    height={167}
                    className="w-full h-full object-contain"
                />
            </motion.div>

            {/* 4. White pyramid (bottom-left) */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute size-14 xs:size-20 sm:size-28 lg:size-40 overflow-hidden bottom-4 sm:bottom-10 lg:bottom-20 left-2 sm:left-4 lg:left-2 pointer-events-none opacity-45 sm:opacity-90 select-none"
            >
                <Image
                    src={whitePyramid}
                    alt="white-pyramid"
                    width={375}
                    height={375}
                    className="w-full h-full object-contain"
                />
            </motion.div>

            {/* Right side floating shapes */}
            {/* 5. Shape white cylinder (top-right) */}
            <motion.div
                animate={{ y: [0, -14, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="absolute size-28 xs:size-36 sm:size-52 md:size-68 lg:size-90 overflow-hidden -right-10 xs:-right-12 sm:-right-8 lg:right-[-8%] top-4 sm:top-8 lg:top-10 pointer-events-none opacity-40 sm:opacity-90 select-none"
            >
                <Image
                    src={shapeWhiteCylinder}
                    alt="white-cylinder"
                    width={375}
                    height={375}
                    className="w-full h-full object-contain"
                />
            </motion.div>

            {/* 6. Lime pyramid (mid top-right, hidden on small screens to avoid blocking text) */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="hidden md:block absolute md:size-24 lg:size-40 overflow-hidden top-4 lg:top-5 md:right-20 lg:right-50 pointer-events-none opacity-70 lg:opacity-100 select-none"
            >
                <Image
                    src={lime_pyramid}
                    alt="lime-pyramid"
                    width={177}
                    height={177}
                    className="w-full h-full object-contain"
                />
            </motion.div>

            {/* 7. Lime spring 2 (bottom-right) */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute size-32 xs:size-40 sm:size-56 md:size-72 lg:size-90 overflow-hidden bottom-[-15%] sm:bottom-[-18%] lg:bottom-[-20%] -right-8 sm:right-6 lg:right-20 pointer-events-none opacity-40 sm:opacity-90 select-none"
            >
                <Image
                    src={limeSpring2}
                    alt="lime-spring-2"
                    width={177}
                    height={177}
                    className="w-full h-full object-contain"
                />
            </motion.div>

        </section>
    )
}

export default JoinAsCreator