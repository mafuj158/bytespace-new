"use client";

import Logo from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { FiX, FiArrowUpRight } from "react-icons/fi";
import { motion, AnimatePresence } from "motion/react";

// Floating Shape Assets from Hero
import bgBlueFrame from "@/public/hero_frame.png";
import limeSpring from "@/public/lime-spring.png";
import shapeLimeCylinder from "@/public/shape-lime-cylinder.png";
import whiteCircle from "@/public/white-circle.png";
import whitePyramid from "@/public/white-pyramid.png";
import whiteSpring from "@/public/white-spring.png";

export const NAV_LINKS = [
    { label: "Home", href: "/", number: "01" },
    { label: "Courses", href: "/courses", number: "02" },
    { label: "Creators", href: "/creators", number: "03" },
];

interface MobileNavProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
    const pathname = usePathname();

    // lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.22, ease: [0.32, 0.72, 0, 1] }}
                    className="fixed inset-0 z-100 bg-[#003BE2] text-white flex flex-col justify-between px-5 py-5 sm:px-8 sm:py-7 lg:hidden overflow-hidden"
                >
                    {/* Background Grid Frame */}
                    <div className="absolute inset-0 pointer-events-none opacity-30 select-none">
                        <Image
                            src={bgBlueFrame}
                            alt=""
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Floating Shapes from Hero */}
                    {/* 1. Lime Spring (Top Right) */}
                    <motion.div
                        animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }}
                        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-10 -right-10 size-44 sm:size-52 pointer-events-none opacity-45 select-none z-0"
                    >
                        <Image
                            src={limeSpring}
                            alt=""
                            width={200}
                            height={200}
                            className="w-full h-full object-contain"
                        />
                    </motion.div>

                    {/* 2. White Spring (Mid-Left) */}
                    <motion.div
                        animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="absolute top-[15%] -left-8 size-28 sm:size-36 pointer-events-none opacity-40 select-none z-0"
                    >
                        <Image
                            src={whiteSpring}
                            alt=""
                            width={150}
                            height={150}
                            className="w-full h-full object-contain"
                        />
                    </motion.div>

                    {/* 3. White Pyramid (Mid-Right) */}
                    <motion.div
                        animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                        className="absolute top-[48%] -right-6 size-24 sm:size-30 pointer-events-none opacity-45 select-none z-0"
                    >
                        <Image
                            src={whitePyramid}
                            alt=""
                            width={130}
                            height={130}
                            className="w-full h-full object-contain"
                        />
                    </motion.div>

                    {/* 4. White Circle (Bottom-Left) */}
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-20 -left-12 size-36 sm:size-44 pointer-events-none opacity-35 select-none z-0"
                    >
                        <Image
                            src={whiteCircle}
                            alt=""
                            width={180}
                            height={180}
                            className="w-full h-full object-contain"
                        />
                    </motion.div>

                    {/* 5. Lime Cylinder (Bottom-Right) */}
                    <motion.div
                        animate={{ y: [0, -8, 0], rotate: [0, -3, 0] }}
                        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                        className="absolute -bottom-8 -right-8 size-40 sm:size-48 pointer-events-none opacity-40 select-none z-0"
                    >
                        <Image
                            src={shapeLimeCylinder}
                            alt=""
                            width={190}
                            height={190}
                            className="w-full h-full object-contain"
                        />
                    </motion.div>

                    {/* Top Bar inside Overlay */}
                    <div className="relative z-10 flex items-center justify-between w-full">
                        <div onClick={onClose} className="cursor-pointer">
                            <Logo textClassName="text-white text-lg sm:text-xl font-bold tracking-tight" />
                        </div>

                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Close navigation menu"
                            className="size-9 sm:size-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer active:scale-90"
                        >
                            <FiX className="text-xl sm:text-2xl" />
                        </button>
                    </div>

                    {/* Staggered Navigation Links */}
                    <motion.nav
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.05, delayChildren: 0.05 },
                            },
                        }}
                        className="relative z-10 flex flex-col gap-3.5 sm:gap-5 my-auto py-4 sm:py-6"
                    >
                        {NAV_LINKS.map((link) => {
                            const isActive =
                                pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                            return (
                                <motion.div
                                    key={link.href}
                                    variants={{
                                        hidden: { opacity: 0, y: 10 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
                                        },
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={onClose}
                                        className="group flex items-baseline justify-between py-1.5 sm:py-2 cursor-pointer"
                                    >
                                        <div className="flex items-baseline gap-3">
                                            <span className="text-[11px] sm:text-xs font-mono text-lime/80 group-hover:text-lime transition-colors">
                                                {link.number}
                                            </span>
                                            <span
                                                className={cn(
                                                    "text-2xl sm:text-3xl font-bold font-poppins tracking-tight transition-all duration-200",
                                                    isActive
                                                        ? "text-lime translate-x-1"
                                                        : "text-white/90 group-hover:text-lime group-hover:translate-x-1"
                                                )}
                                            >
                                                {link.label}
                                            </span>
                                        </div>
                                        <FiArrowUpRight
                                            className={cn(
                                                "text-lg sm:text-xl transition-all duration-200 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                                                isActive ? "opacity-100 text-lime" : "text-white/70"
                                            )}
                                        />
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </motion.nav>

                    {/* Bottom Actions & Footer */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.25, ease: "easeOut" }}
                        className="relative z-10 w-full flex flex-col gap-4 pt-4 sm:pt-5 border-t border-white/15"
                    >
                        <div className="flex items-center justify-between gap-3">
                            <Link
                                href="/login"
                                onClick={onClose}
                                className="text-white/90 hover:text-white font-semibold text-sm sm:text-base py-2 px-3 cursor-pointer transition-colors"
                            >
                                Sign In
                            </Link>

                            <Link
                                href="/register"
                                onClick={onClose}
                                className="bg-lime text-black font-bold text-xs sm:text-sm px-6 py-2.5 sm:px-7 sm:py-3 rounded-full hover:bg-lime/90 transition-transform active:scale-95 cursor-pointer shadow-md text-center"
                            >
                                Join Us
                            </Link>
                        </div>

                        <p className="text-[11px] sm:text-xs text-blue-200/60 text-center">
                            © {new Date().getFullYear()} ByteSpace. Built for creators & learners.
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileNav;
