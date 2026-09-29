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
        <Link href="/" className={cn("flex items-center justify-start gap-3", wrapperClassName)}>
            <div className={cn("size-8 flex items-center justify-center", logoWrapperClass)}>
                <Image width={32} height={32} src={logo} alt="Logo" className={cn("object-contain", logoClassName)} />
            </div>
            <p className={cn("font-bold text-2xl", textClassName)}>ByteSpace</p>
        </Link>
    )
}

export default Logo