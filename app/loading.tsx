import Image from "next/image";
import logo from "@/public/logo.png";
import bgBlueFrame from "@/public/hero_frame.png";


export default function RootLoading() {
  return (
    <div className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#003BE2] overflow-hidden select-none">
      {/* Background Blue Grid Pattern */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image
          src={bgBlueFrame}
          alt="Grid Background"
          fill
          className="object-cover opacity-90"
          priority
        />
      </div>

      {/* Ambient Pulsing Lime Glow */}
      <div className="absolute size-80 rounded-full bg-radial from-lime/25 via-lime/5 to-transparent blur-3xl animate-pulse pointer-events-none" />

      {/* Main Center Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Logo Container */}
        <div className="relative mb-5">
          {/* Subtle Outer Ping / Radar Ring */}
          <div className="absolute -inset-3 rounded-2xl bg-lime/30 blur-sm animate-ping [animation-duration:2.5s] pointer-events-none" />

          {/* Logo Card with glass border */}
          <div className="relative size-18 rounded-2xl p-[2px] bg-gradient-to-tr from-white/40 via-lime to-white/40 shadow-2xl shadow-black/20 flex items-center justify-center">
            <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center">
              <Image
                src={logo}
                alt="ByteSpace Logo"
                width={40}
                height={40}
                className="size-10 object-contain drop-shadow-xs transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>

        {/* Brand Name */}
        <div className="flex items-center gap-1.5 mb-3.5">
          <span className="text-2xl font-bold tracking-tight text-white font-satoshi">
            ByteSpace
          </span>
          <span className="size-2 rounded-full bg-lime border border-white/40 inline-block animate-pulse shadow-xs" />
        </div>

        {/* Loading Progress Bar */}
        <div className="w-48 h-1.5 bg-white/20 rounded-full overflow-hidden relative shadow-inner">
          <div className="absolute inset-y-0 h-full w-24 bg-gradient-to-r from-white via-lime to-[#D4FB20] rounded-full animate-loader" />
        </div>

        {/* Status Indicator */}
        <p className="text-[11px] font-medium tracking-widest text-blue-100/80 uppercase mt-3.5 font-satoshi">
          Loading ByteSpace...
        </p>
      </div>

      {/* Keyframe animation for sliding loader bar */}
      <style>{`
        @keyframes loaderSlide {
          0% {
            transform: translateX(-120%);
          }
          50% {
            transform: translateX(60%);
          }
          100% {
            transform: translateX(240%);
          }
        }
        .animate-loader {
          animation: loaderSlide 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}
