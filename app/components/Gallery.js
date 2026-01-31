"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  "/aot/gallery/g1.jpg",
  "/aot/gallery/g2.jpg",
  "/aot/gallery/g3.jpg",
  "/aot/gallery/g4.jpg",
  "/aot/gallery/g5__.jpg",
  "/aot/gallery/g6.jpg",
  "/aot/gallery/g7.jpg",
  "/aot/gallery/g8.jpg",
    "/aot/gallery/g9.jpg",
];

export default function GallerySection() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-40">

        {/* TITLE */}
        <div className="text-center mb-24">


<motion.h2
  initial={{
    opacity: 0,
    x: 40,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
  }}
  transition={{
    duration: 2.9,
    ease: [0.22, 1, 0.36, 1],
  }}
  viewport={{ once: false, amount: 0.6 }}
  className="font-display text-5xl md:text-6xl tracking-[0.35em]"
>
  GALLERY
</motion.h2>
          <div className="mx-auto mt-8 w-24 h-[1px] bg-red-700/60" />
        </div>


{/* MASONRY GRID */}
<div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
  {galleryImages.map((src, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.4,
        delay: i * 0.08, // subtle stagger
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: false, amount: 0.2 }}
      className="
        relative overflow-hidden
        break-inside-avoid
        group
      "
    >
      <Image
        src={src}
        alt={`AOT Gallery ${i + 1}`}
        width={600}
        height={800}
        className="
          w-full
          object-cover
          opacity-90
          transition-all duration-700
          group-hover:scale-105
          group-hover:opacity-100
        "
      />

      {/* dark overlay */}
      <div
        className="
          absolute inset-0
          bg-black/30
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-500
        "
      />

      {/* subtle red edge */}
      <div
        className="
          absolute inset-0
          border border-red-700/0
          group-hover:border-red-700/40
          transition-all duration-500
        "
      />
    </motion.div>
  ))}
</div>


      </div>
    </section>
  );
}