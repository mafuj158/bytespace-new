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
        <section id="join-as-creator" className='py-20 min-h-112 relative overflow-hidden'>
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
            {/* content */}
            <div className='container relative z-10 flex flex-col gap-8 justify-center items-center text-white'>
                <p className='text-[44px] font-semibold leading-14 max-w-4xl text-center'>Unlock Your Potential as a Creator with ByteSpace</p>
                <p className='text-lg font-satoshi leading-8 max-w-6xl text-center'>Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.</p>
                <Link href={'/register'} className="px-6 py-2 rounded-full bg-lime text-lg text-foreground">Join as Creator</Link>
            </div>
            {/* green spring */}
            <motion.div
                animate={{ y: [0, -14, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute size-96 overflow-hidden -left-28 -top-36 pointer-events-none"
            >
                <Image
                    src={limeSpring}
                    alt="lime-spring"
                    width={375}
                    height={380}
                    className="object-cover"
                />
            </motion.div>
            {/* left lime spring */}
            <motion.div
                animate={{ y: [0, 12, 0], rotate: [0, -4, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="absolute size-96 overflow-hidden bottom-[-40%] left-10 pointer-events-none"
            >
                <Image
                    src={limeCircle2}
                    alt="lime-spring"
                    width={375}
                    height={375}
                    className="object-cover"
                />
            </motion.div>
            {/* white spring */}
            <motion.div
                animate={{ y: [0, 12, 0], rotate: [0, -4, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="absolute size-44 overflow-hidden top-10 left-50 pointer-events-none"
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
                className="absolute size-40 overflow-hidden bottom-20 left-2 pointer-events-none"
            >
                <Image
                    src={whitePyramid}
                    alt="lime-spring"
                    width={375}
                    height={375}
                    className=" w-full h-full object-contain"
                />
            </motion.div>
            {/* Right side floating shapes */}

            {/* shape-white-cylinder */}
            <motion.div
                animate={{ y: [0, -14, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="absolute size-90 overflow-hidden right-[-8%] top-10 pointer-events-none"
            >
                <Image
                    src={shapeWhiteCylinder}
                    alt="lime-spring"
                    width={375}
                    height={375}
                    className=" w-full h-full object-contain"
                />
            </motion.div>

            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute size-40 overflow-hidden top-5 right-50 pointer-events-none"
            >
                <Image
                    src={lime_pyramid}
                    alt="lime-spring"
                    width={177}
                    height={177}
                    className=" w-full h-full object-contain"
                />
            </motion.div>

            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute size-90 overflow-hidden bottom-[-20%] right-20 pointer-events-none"
            >
                <Image
                    src={limeSpring2}
                    alt="lime-spring"
                    width={177}
                    height={177}
                    className=" w-full h-full object-contain"
                />
            </motion.div>

        </section>
    )
}

export default JoinAsCreator