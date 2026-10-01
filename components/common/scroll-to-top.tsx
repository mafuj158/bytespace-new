"use client";

import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { cn } from "@/lib/utils";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility, { passive: true });
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={cn(
                "fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 size-11 sm:size-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300",
                "bg-[#040819] hover:bg-[#003BE2] text-white hover:text-white border border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_10px_35px_rgba(0,59,226,0.4)] active:scale-90",
                isVisible
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-5 pointer-events-none"
            )}
        >
            <FiArrowUp className="size-5 sm:size-5.5 transition-transform group-hover:-translate-y-0.5" />
        </button>
    );
};

export default ScrollToTop;
