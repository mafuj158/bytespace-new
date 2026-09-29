"use client";

import Logo from "@/components/ui/logo";
import Navigation from "./navigation";
import MobileNav from "./mobile-nav";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiShoppingBag, FiMenu } from "react-icons/fi";

const Header = () => {
    // states
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // effects
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 w-full z-90 transition-all duration-300 ease-in-out",
                    isScrolled
                        ? "bg-[#003BE2]/90 backdrop-blur-md border-b border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.12)] py-2.5 sm:py-3.5"
                        : "bg-transparent border-b border-transparent py-4 sm:py-5 lg:py-7"
                )}
            >
                <div className="container flex justify-between items-center">
                    {/* Left: Brand Logo */}
                    <div className="shrink-0 flex items-center">
                        <Logo
                            textClassName="text-white text-[15px] 2xs:text-base xs:text-lg sm:text-xl md:text-2xl font-bold tracking-tight"
                            logoWrapperClass="size-5.5 2xs:size-6 xs:size-7 sm:size-8"
                            wrapperClassName="gap-1.5 2xs:gap-2 xs:gap-2.5 sm:gap-3"
                        />
                    </div>

                    {/* Center: Desktop Navigation Links (>= 1024px) */}
                    <div className="hidden lg:flex flex-1 justify-center px-6">
                        <Navigation />
                    </div>

                    {/* Right: Auth & Cart Actions */}
                    <div className="shrink-0 flex items-center justify-end gap-4 lg:gap-6">
                        <Link
                            href="/login"
                            className="hidden lg:inline-flex text-white/90 hover:text-white text-base font-medium transition-colors duration-200 cursor-pointer"
                        >
                            Sign In
                        </Link>

                        <Link
                            href="/register"
                            className="hidden lg:inline-flex text-white/90 hover:text-white text-base font-medium transition-colors duration-200 cursor-pointer"
                        >
                            Join Us
                        </Link>

                        <Link
                            href="/courses"
                            aria-label="Shopping Cart"
                            className="size-10 rounded-full hover:bg-white/15 text-white hover:text-lime flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
                        >
                            <FiShoppingBag className="text-xl" />
                        </Link>

                        {/* Mobile/Tablet Menu Button (< 1024px) */}
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            aria-label="Open navigation menu"
                            className="lg:hidden size-10 rounded-full hover:bg-white/15 text-white hover:text-lime flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
                        >
                            <FiMenu className="text-xl" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation Component */}
            <MobileNav
                isOpen={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
            />
        </>
    );
};

export default Header;