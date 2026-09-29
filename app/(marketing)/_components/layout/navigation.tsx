

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Creators", href: "/creators" },
];

const Navigation = ({ className }: { className?: string }) => {
    const pathname = usePathname();

    return (
        <nav className={cn("flex items-center gap-8", className)}>
            {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                            "text-base transition-colors duration-200",
                            isActive
                                ? "text-white font-semibold"
                                : "text-white/70 hover:text-white"
                        )}
                    >
                        {link.label}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Navigation;