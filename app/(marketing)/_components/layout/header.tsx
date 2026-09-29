"use client";
import Logo from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const Header = () => {

    // states
    const [isScrolled, setIsScrolled] = useState(false);

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
        <header className={cn("fixed top-0 left-0 right-0 w-full z-999 transition-all duration-300 ease-in-out",
            isScrolled
                ? "bg-white backdrop-blur-md border-b border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.12)] py-6"
                : "bg-transparent border-b border-transparent py-10")}
        >
            <div className="container gap-6 flex justify-between items-center">
                <Logo textClassName="text-white" />
            </div>
        </header>
    )
}

export default Header