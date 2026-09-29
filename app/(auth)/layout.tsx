import type { Metadata } from "next";
import React from "react";
import bgBlueFrame from "@/public/hero_frame.png"
import Image from "next/image";
import Logo from "@/components/ui/logo";
import auth_left_banner from "@/public/auth-left-banner.png";
import AuthHeader from "./_components/auth-header";

export const metadata: Metadata = {
  title: {
    template: "%s | ByteSpace",
    default: "Authentication | ByteSpace",
  },
  description: "Securely log in or create an account with ByteSpace to manage and access your online courses.",
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-primary relative overflow-hidden flex flex-col justify-between">
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image
          src={bgBlueFrame}
          alt="Grid Background"
          fill
          className="object-cover opacity-90"
          priority
        />
      </div>
      <div className="relative z-10 container px-6 py-8 sm:py-12 flex-1 flex flex-col gap-2 justify-between">
        <Logo textClassName="hidden" />
        <div className="w-full flex justify-between gap-24">
          {/* left */}
          <div className="w-full max-w-125 flex flex-col">
            <AuthHeader />
            <div className="w-full h-132 mt-6">
              <Image
                src={auth_left_banner}
                alt="Auth Left Banner"
                width={475}
                height={634}
                priority
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          {/* right */}
          <div className="w-full max-w-170 bg-white rounded-4xl sm:rounded-[36px] p-8 sm:p-12 shadow-2xl">
            {children}
          </div>
        </div>
        <div className="w-full text-center text-xs text-blue-200/80 pt-4">
          © {new Date().getFullYear()} ByteSpace. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

