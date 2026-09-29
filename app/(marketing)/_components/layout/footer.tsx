
"use client";

import Logo from "@/components/ui/logo";
import Link from "next/link";
import React, { useState } from "react";

const FOOTER_COLUMNS = [
    {
        links: [
            { label: "Featured Courses", href: "/courses" },
            { label: "Featured Categories", href: "/courses" },
            { label: "Business", href: "/courses" },
            { label: "IT", href: "/courses" },
            { label: "Design", href: "/courses" },
        ],
    },
    {
        links: [
            { label: "Development", href: "/courses" },
            { label: "Marketing", href: "/courses" },
            { label: "Photography", href: "/courses" },
            { label: "Finance", href: "/courses" },
            { label: "Sport", href: "/courses" },
        ],
    },
    {
        links: [
            { label: "Become a Creator", href: "/creators" },
            { label: "Affiliate Program", href: "/courses" },
            { label: "Contact", href: "/" },
            { label: "Help", href: "/" },
            { label: "About", href: "/" },
        ],
    },
];

const LEGAL_LINKS = [
    { label: "Privacy Policy", href: "/" },
    { label: "Terms of Service", href: "/" },
    { label: "Cookies Settings", href: "/" },
];

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            setEmail("");
        }
    };

    return (
        <footer className="w-full bg-white text-[#040819] border-t border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-8 sm:pb-12">
                
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
                    
                    {/* Left Column: Brand & Newsletter */}
                    <div className="lg:col-span-6 flex flex-col items-start max-w-lg">
                        <Logo />
                        <p className="mt-6 text-sm text-gray-700 leading-relaxed">
                            Stay Up to date with our latest features and releases by joining our newsletter.
                        </p>

                        {/* Newsletter Subscribe Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="mt-6 w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
                        >
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="w-full sm:max-w-xs px-6 py-3.5 text-sm text-gray-800 placeholder:text-gray-400 bg-white rounded-full border border-gray-300 focus:outline-none focus:border-gray-600 transition-colors"
                            />
                            <button
                                type="submit"
                                className="bg-[#D4FB20] hover:bg-[#c6ec1c] text-[#040819] font-bold text-sm px-8 py-3.5 rounded-full transition-all cursor-pointer shadow-sm active:scale-95 shrink-0 text-center"
                            >
                                Search
                            </button>
                        </form>

                        <p className="mt-4 text-[11px] sm:text-xs text-gray-500 leading-normal">
                            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                        </p>
                    </div>

                    {/* Right Columns: Links */}
                    <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 pt-2 lg:pt-0">
                        {FOOTER_COLUMNS.map((col, idx) => (
                            <div key={idx} className="flex flex-col gap-3.5">
                                {col.links.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="text-xs sm:text-sm text-gray-700 hover:text-black transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Divider & Legal Section */}
                <div className="border-t border-gray-200 mt-14 sm:mt-18 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                    <p className="text-center sm:text-left">
                        &copy; 2023 ByteSpace. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6 flex-wrap justify-center sm:justify-end">
                        {LEGAL_LINKS.map((legal) => (
                            <Link
                                key={legal.label}
                                href={legal.href}
                                className="hover:text-black transition-colors"
                            >
                                {legal.label}
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;