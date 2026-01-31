"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
    const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND VIDEO */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 overflow-hidden"
      >
        <iframe
          className="absolute top-1/2 left-1/2 w-full h-full
                     -translate-x-1/2 -translate-y-1/2 scale-125 pointer-events-none"
          src="https://www.youtube.com/embed/2S4qGKmzBJE?autoplay=1&mute=1&controls=0&loop=1&playlist=2S4qGKmzBJE&start=80&end=45&playsinline=1&modestbranding=1&rel=0"
          allow="autoplay; encrypted-media"
        />
      </motion.div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />

      {/* HERO CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">

          {/* STAGGER CONTAINER */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.25,
                },
              },
            }}
            className="max-w-md"
          >
         {/* LOGO */}
<motion.div
  variants={{
    hidden: { opacity: 0, x: -80 },
    show: { opacity: 1, x: 0 },
  }}
  transition={{ duration: 1.1, ease: "easeOut" }}
  className="flex items-center gap-4 group cursor-pointer"
>
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
</motion.div>

            {/* DESCRIPTION */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="mt-6 text-gray-300 text-sm tracking-widest leading-7 ml-7"
            >
              In a world where humanity shelters behind towering walls from
              man-eating Titans, a determined teen joins the elite Survey Corps
              to fight the giants and uncover the secrets of their origin.
            </motion.p>

            {/* BUTTON */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 25 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="mt-14 flex justify-center"
            >
<button
  className="
    group relative overflow-hidden
    px-32 py-4
    bg-[#8b1e1e]
    text-white
    text-[14px]
    font-medium
    tracking-[0.12em]
    uppercase

    shadow-[0_6px_20px_rgba(0,0,0,0.35)]
    transition-all duration-200 ease-out

    hover:shadow-[0_12px_30px_rgba(0,0,0,0.45)]
    hover:bg-[#7a1818]
    active:translate-y-[1px]
  "
>
  {/* subtle sheen */}
  <span
    className="
      pointer-events-none
      absolute inset-0
      bg-gradient-to-r from-transparent via-white/15 to-transparent
      translate-x-[-120%]
      group-hover:translate-x-[120%]
      transition-transform duration-[900ms] ease-out
    "
  />

  {/* content */}
  <span
    className="
      relative z-10
      transition-transform duration-200
      group-hover:translate-x-[1px]
    "
  >
    WATCH&nbsp;NOW
  </span>
</button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}