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
      <main className="relative flex-1 flex flex-col items-center justify-center pt-32 pb-24 px-4 overflow-hidden min-h-[75vh]">
        {/* Blue Grid Backdrop */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
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
            <h1 className="text-[140px] sm:text-[200px] md:text-[260px] lg:text-[300px] font-black tracking-tighter leading-none bg-gradient-to-b from-[#D4FB20] via-[#D4FB20]/90 to-[#D4FB20]/20 bg-clip-text text-transparent opacity-95">
              404
            </h1>
          </div>

          {/* Heading overlapping the bottom of 404 */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-tight -mt-8 sm:-mt-14 md:-mt-20 max-w-3xl">
            The page you are looking for doesn’t exist
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-blue-100/85 font-satoshi mt-4 max-w-md">
            Try to use a correct url or go back to homepage to start again
          </p>

          {/* Back to Home CTA Button */}
          <Button
            isLink
            href="/"
            variant="secondary"
            className="mt-8 px-8 py-3.5 rounded-full bg-lime text-black font-semibold text-base hover:bg-lime/90 cursor-pointer shadow-lg transition-all duration-300 active:scale-95"
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
