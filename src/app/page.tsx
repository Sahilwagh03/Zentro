import Hero from "@/components/hero";
import OurPromise from "@/components/sections/OurPromise";
import SolutionsSection from "@/components/sections/solutions_section";

export default function Home() {
  return (
    <main>
      <Hero />
      <SolutionsSection/>
      <OurPromise/>
    </main>
  );
}
