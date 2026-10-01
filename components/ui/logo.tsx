import { cn } from "@/lib/utils";
import logo from "@/public/logo.png"
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
    wrapperClassName?: string;
    logoWrapperClass?: string;
    logoClassName?: string;
    textClassName?: string;
}
const Logo = ({ wrapperClassName, logoClassName, logoWrapperClass, textClassName }: LogoProps) => {
    return (
        <Link href="/" className={cn("flex items-center justify-start gap-2 xs:gap-2.5 sm:gap-3", wrapperClassName)}>
            <div className={cn("size-6 xs:size-7 sm:size-8 shrink-0 flex items-center justify-center", logoWrapperClass)}>
                <Image
                    width={32}
                    height={32}
                    src={logo}
                    alt="Logo"
                    priority
                    className={cn("w-full h-full object-contain", logoClassName)}
                />
            </div>
            <p className={cn("font-bold text-base xs:text-lg sm:text-xl md:text-2xl tracking-tight", textClassName)}>
                ByteSpace
            </p>
        </Link>
    )
}

export default Logo