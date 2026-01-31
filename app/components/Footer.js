"use client"
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-32 space-y-24">

        {/* DIVIDER */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          viewport={{ once: false }}
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-red-700/70 to-transparent origin-center"
        />

        {/* MAIN CONTENT */}
        <div className="text-center space-y-10">

          {/* JAPANESE TITLE */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            viewport={{ once: false }}
            className="font-display text-2xl md:text-3xl tracking-[0.4em] text-gray-200"
          >
            進撃の巨人
          </motion.p>

          {/* PHILOSOPHICAL LINE */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: false }}
            className="max-w-2xl mx-auto font-display text-3xl md:text-4xl leading-relaxed tracking-wide text-gray-100"
          >
            “If freedom is taken away,<br />
            we will take it back.”
          </motion.p>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.7em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.45em" }}
            transition={{
              duration: 1.6,
              delay: 0.35,
              ease: "easeOut",
            }}
            viewport={{ once: false }}
            className="text-xs tracking-[0.45em] uppercase text-red-600 font-body"
          >
            Shinzou wo Sasageyo
          </motion.p>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-16">

          {/* LEFT */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            viewport={{ once: false }}
            className="text-xs tracking-widest text-gray-500 font-body"
          >
            A tribute to Attack on Titan
          </motion.p>

          {/* CENTER */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: false }}
            className="text-xs tracking-[0.35em] uppercase text-gray-400 font-body"
          >
            Tatakae.
          </motion.p>

          {/* RIGHT */}
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            viewport={{ once: false }}
            className="text-xs tracking-widest text-gray-500 font-body"
          >
            Built with obsession by{" "}
            <span className="text-gray-300">Dhinesh</span>
          </motion.p>
        </div>
      </div>
    </footer>
  );
}