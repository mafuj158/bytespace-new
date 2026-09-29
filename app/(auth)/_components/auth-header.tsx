"use client"

import { usePathname } from "next/navigation"

const AUTH_CONTENT: Record<string, { title: string; subtitle: string }> = {
    "/register": {
        title: "Sign up and come in",
        subtitle: "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost",
    },
    "/login": {
        title: "Sign in with ease",
        subtitle: "Find mentors and learn in a supportive platform that helps you build practical skills and knowledge.",
    },
}

const AuthHeader = () => {
    const pathname = usePathname()
    const isRegister = pathname?.includes("register")
    const content = isRegister ? AUTH_CONTENT["/register"] : AUTH_CONTENT["/login"]

    return (
        <div className="flex flex-col gap-2 text-white">
            <h1 className="text-xl font-semibold text-white">
                {content.title}
            </h1>
            <p className="text-lg text-[#F5F5F6] font-satoshi leading-relaxed">
                {content.subtitle}
            </p>
        </div>
    )
}

export default AuthHeader
