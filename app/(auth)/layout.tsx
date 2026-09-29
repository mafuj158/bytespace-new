import React from "react";
import bgBlueFrame from "@/public/hero_frame.png"
import Image from "next/image";
import Logo from "@/components/ui/logo";
import auth_left_banner from "@/public/auth-left-banner.png";
import AuthHeader from "./_components/auth-header";



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
      <div className="relative z-10 container py-4 sm:py-6 lg:py-10 flex-1 flex flex-col justify-between gap-4 sm:gap-6">
        <div className="w-full flex items-center justify-start">
          <Logo textClassName="hidden" />
        </div>

        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-6 lg:gap-14 xl:gap-20 my-auto py-2 sm:py-4">
          {/* left column */}
          <div className="w-full lg:max-w-120 xl:max-w-125 flex flex-col items-center lg:items-start text-center lg:text-left">
            <AuthHeader />
            <div className="hidden lg:block w-full max-w-118.75 mt-6">
              <Image
                src={auth_left_banner}
                alt="Auth Left Banner"
                width={475}
                height={634}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* right column */}
          <div className="w-full max-w-105 sm:max-w-120 lg:max-w-145 2xl:max-w-165 bg-white rounded-2xl sm:rounded-3xl 2xl:rounded-[36px] p-5 sm:p-8 lg:p-10 2xl:p-12 shadow-2xl">
            {children}
          </div>
        </div>

        <div className="w-full text-center text-xs text-blue-100/70 pt-1 sm:pt-2">
          © {new Date().getFullYear()} ByteSpace. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

