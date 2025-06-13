import Image from "next/image";
import { FaBolt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function BentoGridLayout() {
  return (
    <div className="font-oswald grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 grid-rows-none lg:grid-rows-6 gap-4 bg-black text-white min-h-screen">
      {/* 1 - Left Hero */}
      <div className="border-[#424242] border-2 col-span-1 md:col-span-2 lg:row-span-6 bg-[url('/hero-image.jpg')] bg-cover bg-center rounded-xl relative h-[300px] md:h-[400px] lg:h-auto">
        <div className="absolute inset-0 bg-black/60 rounded-xl p-6 flex flex-col justify-end">
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <Image
              src="/images/Thender.svg"
              alt="Thender"
              width={80}
              height={80}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary object-contain"
            />
          </div>
          <div className="absolute bottom-24 left-0 right-0 mx-4 md:mx-10">
            <h2 className="text-center text-primary text-lg md:text-xl font-bold">Results That Speak for Themselves</h2>
            <p className="text-xs md:text-sm font-light text-center mt-2 text-white/80">
              Our strategies deliver measurable growth—whether it’s increasing search rankings, boosting conversions, or maximising ad performance.
            </p>
          </div>
        </div>
      </div>

      {/* 2 - 4k+ Reviews */}
      <div className="border-[#424242] border-2 col-span-1 md:col-span-2 lg:col-start-3 lg:row-span-3 bg-neutral-900 rounded-xl p-4 md:p-6 flex flex-col justify-between h-[180px] md:h-auto">
        <p className="text-sm text-white/70">Our customers love us!</p>
        <div className="flex items-end justify-between">
          <h2 className="text-primary text-4xl md:text-5xl font-bold leading-none">4k+</h2>
          <p className="text-white/70 text-sm">Reviews</p>
        </div>
      </div>

      {/* 3 - Transparency */}
      <div className="col-span-1 md:col-span-2 lg:col-start-3 lg:row-start-4 lg:row-span-3 bg-[url('/beach.jpg')] bg-cover bg-center relative rounded-xl overflow-hidden h-[200px] md:h-[280px] lg:h-auto">
        <div className="w-full h-full bg-[#4242429e]"></div>
        <div className="absolute inset-0 bg-black/60 p-4 md:p-6 flex flex-col justify-between rounded-xl">
          <div>
            <h2 className="text-white font-semibold text-sm md:text-base">Complete Transparency</h2>
            <p className="text-xs md:text-sm text-white/80 mt-2">
              We provide detailed reports on your progress, including key metrics for SEO, web design, and Google Ads campaigns.
            </p>
          </div>
          <FaArrowRightLong className="text-primary text-lg md:text-xl mt-4" />
        </div>
      </div>

      {/* 4 - Neon Right Arrow */}
      <div className="col-span-1 md:col-span-2 lg:col-start-5 lg:row-start-1 lg:row-span-2 bg-primary rounded-xl flex items-center justify-center text-black text-2xl md:text-3xl h-[120px] md:h-auto">
        <FaArrowRightLong />
      </div>

      {/* 5 - Trust & Partnership */}
      <div className="border-[#424242] border-2 col-span-1 md:col-span-2 lg:col-start-5 lg:row-start-3 lg:row-span-4 bg-neutral-900 rounded-xl p-4 md:p-6 flex flex-col justify-center gap-4 text-center items-center h-[280px] md:h-auto">
        <h2 className="text-base md:text-lg font-semibold text-white">
          A Partnership That Prioritises Your Success
        </h2>
        <Image
          src="/images/Thender-primary.svg"
          alt="Thender"
          width={64}
          height={64}
          className="w-16 h-16 md:w-20 md:h-20"
        />
        <p className="text-xs md:text-sm text-white/80">
          With no long-term contracts or hidden fees, we focus on earning your trust through results, not obligations.
        </p>
      </div>
    </div>
  );
}
