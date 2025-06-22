'use client'
import React, { useState } from "react";
import Hero from "@/components/hero";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import OurPromise from "@/components/sections/OurPromise";
import OurResults from "@/components/sections/OurResults";
import OurServices from "@/components/sections/OurServices";
import SolutionsSection from "@/components/sections/SolutionSection";
import StepsSection from "@/components/sections/StepsSection";
import WhyChoose from "@/components/sections/WhyChoose";
import IntroAnimation from "@/components/introAnimation";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  return (
    <main>
      {!introDone && <IntroAnimation onComplete={() => setIntroDone(true)} />}
      <div className={introDone ? '' : 'pointer-events-none select-none'}>
        <Hero />
        <SolutionsSection/>
        <OurPromise/>
        <StepsSection/>
        <WhyChoose/>
        <OurServices/>
        <OurResults/>
        <FAQ/>
        <Footer/>
      </div>
    </main>
  );
}
