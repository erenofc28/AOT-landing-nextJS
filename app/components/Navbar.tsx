"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = ["HOME", "CHARACTERS", "SEASONS", "GALLERY", "QUOTES"];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* animated background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-black/70 backdrop-blur-xl border-b border-red-900/40"
      >
        {/* scanning red line */}
        <motion.div
          className="absolute top-0 left-0 h-[2px] w-1/3 bg-gradient-to-r from-transparent via-red-600 to-transparent"
          animate={{ x: ["-100%", "300%"] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center">
          <ul className="flex items-center gap-14 text-[14px] tracking-[0.45em] m-3">
            {navItems.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="relative group"
              >
                <Link
                  href="#"
                  className="relative text-gray-300 transition-colors duration-300 group-hover:text-red-500"
                >
                  {item}

                  {/* blade slash */}
                  <span
                    className="
                      absolute left-0 top-1/2
                      h-[1px] w-full
                      bg-red-600
                      scale-x-0
                      origin-left
                      transition-transform duration-300
                      group-hover:scale-x-100
                    "
                  />

                  {/* glow dot */}
                  <span
                    className="
                      absolute -bottom-3 left-1/2
                      w-1.5 h-1.5
                      bg-red-600 rounded-full
                      opacity-0
                      -translate-x-1/2
                      transition-all duration-300
                      group-hover:opacity-100
                      group-hover:shadow-[0_0_10px_rgba(220,38,38,0.9)]
                    "
                  />
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </nav>
  );
}
