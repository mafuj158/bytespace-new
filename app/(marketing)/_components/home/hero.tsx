import Image from "next/image";
import bgBlueFrame from "@/public/hero_frame.png";
import heroCharacter from "@/public/hero-character.png";
import limeCircle from "@/public/lime-circle.png";
import limeSpring from "@/public/lime-spring.png";
import shapeLimeCylinder from "@/public/shape-lime-cylinder.png";
import whiteCircle from "@/public/white-circle.png";
import whitePyramid from "@/public/white-pyramid.png";
import whiteSpring from "@/public/white-spring.png";

const Hero = () => {
    return (
        <section id="hero" className="w-full overflow-hidden min-h-256 relative pt-44">
            {/* bg blue frame */}
            <div className="absolute inset-0 w-full h-full ">
                <Image
                    src={bgBlueFrame}
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            {/* bottom circle */}
            <div className="absolute size-290 bottom-[-75%] left-1/2 -translate-x-1/2 overflow-hidden ">
                <Image
                    src={limeCircle}
                    alt="lime-circle"
                    width={1160}
                    height={1160}
                    className="object-cover"
                />
            </div>
            {/* character image */}
            <div className="absolute z-10 w-137.5 h-130 bottom-0 left-1/2 -translate-x-1/2 overflow-hidden ">
                <Image
                    src={heroCharacter}
                    alt="hero-character"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* green spring */}
            <div className="absolute size-96 overflow-hidden -left-28 top-56 ">
                <Image
                    src={limeSpring}
                    alt="lime-spring"
                    width={375}
                    height={380}
                    className="object-cover"
                />
            </div>
            {/* left white spring */}
            <div className="absolute size-44 overflow-hidden top-120 left-64 ">
                <Image
                    src={whiteSpring}
                    alt="lime-spring"
                    width={167}
                    height={167}
                    className="object-cover"
                />
            </div>
            {/* white round */}
            <div className="absolute size-96 overflow-hidden -bottom-5 left-10 ">
                <Image
                    src={whiteCircle}
                    alt="lime-spring"
                    width={375}
                    height={375}
                    className=" w-full h-full object-contain"
                />
            </div>

            {/* right shape-lime-cylinder */}
            <div className="absolute size-96 overflow-hidden -right-28 top-56 ">
                <Image
                    src={shapeLimeCylinder}
                    alt="lime-spring"
                    width={375}
                    height={375}
                    className=" w-full h-full object-contain"
                />
            </div>
            {/* white pyramid */}
            <div className="absolute size-44 overflow-hidden top-120 right-64 ">
                <Image
                    src={whitePyramid}
                    alt="lime-spring"
                    width={167}
                    height={167}
                    className="object-cover"
                />
            </div>
            {/* right white spring */}
            <div className="absolute size-96 overflow-hidden -bottom-5 right-10 ">
                <Image
                    src={whiteSpring}
                    alt="lime-spring"
                    width={375}
                    height={375}
                    className=" w-full h-full object-contain"
                />
            </div>
            {/*  content */}
            <div className="flex flex-col relative z-50 mx-auto p-2  items-center max-w-5xl">
                <p className="text-white font-semibold text-7xl pb-10 tracking-[-0.72px] text-center">Get Access to Hundreds Courses Available</p>
                <p className="text-lg text-[#E5E6E8] pb-16 text-center">Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>
                <form></form>
            </div>

        </section>
    )
}

export default Hero