"use client";
import Logo from "@/components/ui/logo";
import Navigation from "./navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiShoppingBag, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
    // states
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // effects
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out",
                isScrolled
                    ? "bg-[#003BE2]/90 backdrop-blur-md border-b border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.12)] py-3.5 sm:py-4"
                    : "bg-transparent border-b border-transparent py-6 sm:py-8"
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
                {/* Left: Brand Logo */}
                <div className="flex-1 flex justify-start">
                    <Logo textClassName="text-white" />
                </div>

                {/* Center: Desktop Navigation Links */}
                <div className="hidden md:flex flex-1 justify-center">
                    <Navigation />
                </div>

                {/* Right: Auth & Cart Actions */}
                <div className="flex-1 flex items-center justify-end gap-5 sm:gap-6">
                    <Link
                        href="/login"
                        className="text-white/90 hover:text-white transition-colors duration-200"
                    >
                        Sign In
                    </Link>

                    <Link
                        href="/register"
                        className="text-white/90 hover:text-white transition-colors duration-200"
                    >
                        Join Us
                    </Link>

                    <Link
                        href="/courses"
                        aria-label="Shopping Cart"
                        className="text-white hover:text-[#D4FB20] transition-colors duration-200 p-1 relative flex items-center justify-center"
                    >
                        <FiShoppingBag className="text-xl" />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                        className="md:hidden text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        {mobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-[#003BE2]/95 backdrop-blur-xl border-b border-white/15 px-6 py-6 transition-all animate-in fade-in slide-in-from-top-4">
                    <div className="flex flex-col gap-4">
                        <Link
                            href="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-white font-medium text-base py-2 hover:text-[#D4FB20] transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/courses"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-white font-medium text-base py-2 hover:text-[#D4FB20] transition-colors"
                        >
                            Courses
                        </Link>
                        <Link
                            href="/creators"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-white font-medium text-base py-2 hover:text-[#D4FB20] transition-colors"
                        >
                            Creators
                        </Link>
                        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                            <Link
                                href="/login"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-white text-sm font-medium hover:text-[#D4FB20]"
                            >
                                Sign In
                            </Link>
                            <Link
                                href="/register"
                                onClick={() => setMobileMenuOpen(false)}
                                className="bg-[#D4FB20] text-[#040819] font-bold text-xs px-5 py-2 rounded-full"
                            >
                                Join Us
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;