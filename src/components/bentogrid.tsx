import Image from "next/image";
import { FaBolt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function BentoGridLayout() {
  return (
    <div className="font-oswald grid grid-cols-6 grid-rows-6 gap-4 bg-black text-white p-6 min-h-screen">
      {/* 1 - Left Hero */}
      <div className="border-[#424242] border-2 col-span-2 row-span-6 bg-[url('/hero-image.jpg')] bg-cover bg-center rounded-xl relative">
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
          <div className="absolute bottom-24 left-0 right-0 mx-10">
            <h2 className="text-center text-primary text-xl font-bold">Results That Speak for Themselves</h2>
            <p className="text-sm font-light text-center mt-2 text-white/80">
              Our strategies deliver measurable growth—whether it’s increasing search rankings, boosting conversions, or maximising ad performance.
            </p>
          </div>
        </div>
      </div>

      {/* 2 - 4k+ Reviews */}
      <div className="border-[#424242] border-2 col-span-2 row-span-3 col-start-3 bg-neutral-900 rounded-xl p-6 flex flex-col justify-between">
        <p className="text-sm text-white/70">Our customers love us!</p>
        <div className="flex items-end justify-between">
          <h2 className="text-primary text-5xl font-bold leading-none">4k+</h2>
          <p className="text-white/70 text-sm">Reviews</p>
        </div>
      </div>

      {/* 3 - Transparency */}
      <div className="col-span-2 row-span-3 col-start-3 row-start-4 bg-[url('/beach.jpg')] bg-cover bg-center relative rounded-xl overflow-hidden">
        <div className="w-full h-full bg-[#4242429e]"></div>
        <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-between rounded-xl">
          <div>
            <h2 className="text-white font-semibold">Complete Transparency</h2>
            <p className="text-sm text-white/80 mt-2">
              We provide detailed reports on your progress, including key metrics for SEO, web design, and Google Ads campaigns.
            </p>
          </div>
          <FaArrowRightLong className="text-primary text-xl mt-4" />
        </div>
      </div>

      {/* 4 - Neon Right Arrow */}
      <div className="col-span-2 row-span-2 col-start-5 row-start-1 bg-primary rounded-xl flex items-center justify-center text-black text-3xl">
        <FaArrowRightLong />
      </div>

      {/* 5 - Trust & Partnership */}
      <div className="border-[#424242] border-2 col-span-2 row-span-4 col-start-5 row-start-3 bg-neutral-900 rounded-xl p-6 flex flex-col justify-center gap-6 text-center items-center">
        <h2 className="text-lg font-semibold text-white">A Partnership That Prioritises Your Success</h2>
        <Image src='/images/Thender-primary.svg' alt="Thender" width={64} height={64} className="w-20 h-20" />
        <p className="text-sm text-white/80">
          With no long-term contracts or hidden fees, we focus on earning your trust through results, not obligations.
        </p>
      </div>
    </div>
  );
}
