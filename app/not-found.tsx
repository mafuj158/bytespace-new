import { Button } from "@/components/ui/button";
import Footer from "./(marketing)/_components/layout/footer";
import Header from "./(marketing)/_components/layout/header";
import bgBlueFrame from "@/public/hero_frame.png";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "404 - Page Not Found | ByteSpace",
  description: "The page you are looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#003BE2]">
      {/* Header */}
      <Header />

      {/* Main 404 Hero Section */}
      <main className="relative flex-1 flex flex-col items-center justify-center pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 overflow-hidden min-h-[55vh] sm:min-h-[65vh] md:min-h-[70vh]">
        {/* Blue Grid Backdrop */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
          <Image
            src={bgBlueFrame}
            alt="Background Grid"
            fill
            className="object-cover opacity-90"
            priority
          />
        </div>

        {/* 404 Content Container */}
        <div className="relative z-10 container mx-auto flex flex-col items-center justify-center text-center">
          
          {/* Big 404 Numbers */}
          <div className="relative select-none pointer-events-none">
            <h1 className="text-[96px] 2xs:text-[116px] xs:text-[140px] sm:text-[180px] md:text-[230px] lg:text-[280px] font-black tracking-tighter leading-none bg-gradient-to-b from-[#D4FB20] via-[#D4FB20]/90 to-[#D4FB20]/20 bg-clip-text text-transparent opacity-95">
              404
            </h1>
          </div>

          {/* Heading overlapping the bottom of 404 */}
          <h2 className="text-xl 2xs:text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold text-white tracking-tight leading-tight -mt-4 2xs:-mt-5 xs:-mt-7 sm:-mt-10 md:-mt-14 lg:-mt-18 max-w-xs 2xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
            The page you are looking for doesn’t exist
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-blue-100/85 font-satoshi mt-2.5 sm:mt-3.5 max-w-xs sm:max-w-md">
            Try to use a correct url or go back to homepage to start again
          </p>

          {/* Back to Home CTA Button */}
          <Button
            isLink
            href="/"
            variant="secondary"
            className="mt-5 sm:mt-6 md:mt-8 px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full bg-lime text-black font-bold text-xs sm:text-sm md:text-base hover:bg-lime/90 cursor-pointer shadow-lg shadow-black/15 transition-all duration-300 active:scale-95"
          >
            Back To Home
          </Button>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
