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
        <section id="hero" className="w-full min-h-screen relative pt-38">
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

        </section>
    )
}

export default Hero