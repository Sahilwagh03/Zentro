import Hero from "@/components/hero";
import OurPromise from "@/components/sections/OurPromise";
import SolutionsSection from "@/components/sections/SolutionSection";
import StepsSection from "@/components/sections/StepsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <SolutionsSection/>
      <OurPromise/>
      <StepsSection/>
    </main>
  );
}
