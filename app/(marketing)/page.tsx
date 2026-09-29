import type { Metadata } from "next";
import Hero from "./_components/home/hero";
import Marquee from "./_components/home/marquee";
import CoursesShowcase from "./_components/home/courses-showcase";
import Explore from "./_components/home/explore";
import Features from "./_components/home/features";
import JoinAsCreator from "./_components/home/join-as-creator";
import Testimonials from "./_components/home/testimonials";

export const metadata: Metadata = {
  title: "Home | Bytespace",
  description: "Build, launch, and grow your online courses in minutes with Bytespace.",
};

const Home = () => {
  return (
    <>
      {/* hero */}
      <Hero />
      {/* marquee */}
      <Marquee />
      {/* courses showcase */}
      <CoursesShowcase />
      {/* explore */}
      <Explore />
      {/* features */}
      <Features />
      {/* join as creator */}
      <JoinAsCreator />
      {/* testimonials */}
      <Testimonials />
    </>
  )
};

export default Home;