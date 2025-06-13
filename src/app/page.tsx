import Hero from "@/components/hero";
import FAQ from "@/components/sections/FAQ";
import OurPromise from "@/components/sections/OurPromise";
import OurResults from "@/components/sections/OurResults";
import OurServices from "@/components/sections/OurServices";
import SolutionsSection from "@/components/sections/SolutionSection";
import StepsSection from "@/components/sections/StepsSection";
import WhyChoose from "@/components/sections/WhyChoose";

export default function Home() {
  return (
    <main>
      <Hero />
      <SolutionsSection/>
      <OurPromise/>
      <StepsSection/>
      <WhyChoose/>
      <OurServices/>
      <OurResults/>
      <FAQ/>
    </main>
  );
}
