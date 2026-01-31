"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = ["HOME", "CHARACTERS", "SEASONS", "GALLERY", "QUOTES"];

export default function Navbar() {
  return (
<nav className="fixed top-0 left-0 w-full z-50">
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="bg-black/70 backdrop-blur-xl border-b border-red-900/30"
  >
    <div className="max-w-7xl mx-auto px-6 py-5 flex justify-center">
      <ul className="flex items-center gap-16 text-[13px] tracking-[0.32em] uppercase">
        {navItems.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, ease: "easeOut" }}
            className="relative group"
          >
            <Link
              href="#"
              className="
                relative z-10
                px-4 py-2
                text-gray-400
                transition-colors duration-300
                group-hover:text-white
              "
            >
              {item}
            </Link>

            {/* magnetic highlight */}
            <span
              className="
                absolute inset-0
                rounded-sm
                bg-red-700/20
                scale-95
                opacity-0
                transition-all duration-300 ease-out
                group-hover:opacity-100
                group-hover:scale-100
              "
            />
          </motion.li>
        ))}
      </ul>
    </div>
  </motion.div>
</nav>
  );
}
