import type { Metadata } from "next";
import React from "react";
import Hero from "./_components/home/hero";
import Marquee from "./_components/home/marquee";
import CoursesShowcase from "./_components/home/courses-showcase";

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
    </>

  )
};

export default Home;