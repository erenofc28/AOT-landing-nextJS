"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
<>
<div className="relative min-h-screen overflow-hidden">

  {/* BACKGROUND VIDEO */}
  <div className="absolute inset-0 overflow-hidden">
    <iframe
      className="absolute top-1/2 left-1/2 w-[120vw] h-[120vh]
                 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      src="https://www.youtube.com/embed/2S4qGKmzBJE?autoplay=1&mute=1&controls=0&loop=1&playlist=2S4qGKmzBJE&start=30&end=45&playsinline=1&modestbranding=1&rel=0"
      allow="autoplay; encrypted-media"
    />
  </div>

  {/* DARK OVERLAY (IMPORTANT) */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

  {/* HERO CONTENT */}
  <div className="relative z-10 min-h-screen flex items-center">
    <div className="max-w-7xl mx-auto px-6 w-full">

      <div className="max-w-md">
        {/* TITLE / OPTIONAL */}
        <div className="flex items-center gap-4 group cursor-pointer">
          <Image
            src="/aot/aotLogo.png"
            alt="Attack on Titan Logo"
            width={642}
            height={122}
            priority
            className="
              opacity-90
              transition-all duration-500
              group-hover:opacity-100
              group-hover:drop-shadow-[0_0_12px_rgba(220,38,38,0.6)]
            "
          />
        </div>

        <p className="mt-4 text-gray-300 text-sm tracking-widest leading-7 ml-7">
         In a world where humanity shelters behind towering walls from man-eating Titans, a determined teen joins the elite Survey Corps to fight the giants and uncover the secrets of their origin.
        </p>

<div className="mt-12 flex justify-center">
  <button
    className="
      group relative overflow-hidden
      px-16 py-4
      bg-gradient-to-b from-red-600 via-red-700 to-red-800
      border border-red-900
      text-[16px]
      font-black
      tracking-[0.5em]
      uppercase
      text-black
      transition-all duration-700
      hover:shadow-[0_0_45px_rgba(185,28,28,0.7)]
    "
  >
    {/* dark sweep */}
    <span
      className="
        absolute inset-0
        bg-gradient-to-r from-transparent via-black/25 to-transparent
        translate-x-[-120%]
        group-hover:translate-x-[120%]
        transition-transform duration-[1200ms]
      "
    />

    {/* inner depth */}
    <span
      className="
        absolute inset-[2px]
        bg-gradient-to-b from-red-500 via-red-600 to-red-700
        opacity-90
      "
    />

    {/* content */}
    <span className="relative z-10 flex items-center gap-4 watch-now">
      <span className="text-black text-base font-black">▶</span>
      WATCH&nbsp;NOW
    </span>
  </button>
</div>




      </div>

    </div>
  </div>

</div>


</>
  );
}
