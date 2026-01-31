"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import EpisodeCount from "./EpisodeCount"
export default function SeasonsSection() {
  const seasons = [
    {
      title: "Season 1",
      subtitle: "Fall of Humanity",
      episodes: 25,
      image: "/aot/seasons/s1_HD.jpg",
      content: `Walls stood tall, but fear stood taller inside.
Humanity learned how small it really was.
Titans devoured hope along with people.
A boy swore revenge against the world itself.`,
    },
    {
      title: "Season 2",
      subtitle: "The Truth Revealed",
      episodes: 12,
      image: "/aot/seasons/s2_Hd.webp",
      content: `Allies became enemies.
Monsters wore human faces.
The walls whispered secrets no one was ready to hear.`,
    },
    {
      title: "Season 3",
      subtitle: "Return to Shiganshina",
      episodes: 22,
      image: "/aot/seasons/s3_HD.jpg",
      content: `The past was uncovered layer by layer.
Truth demanded sacrifice.
Freedom came at a terrifying cost.`,
    },
    {
      title: "Final Season",
      subtitle: "The Rumbling",
      episodes: 28,
      image: "/aot/seasons/_s4_HD.png",
      content: `The world chose fear.
One man chose freedom.
And the earth itself began to tremble.`,
    },
  ];

  return (
    <section className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-40 space-y-44">

        {/* TITLE */}
        <div className="text-center">
<motion.h2
  initial={{
    opacity: 0,
    x: -94,
    skewX: 7,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
    skewX: 0,
  }}
  transition={{
    duration: 1.4,                 // slower, calmer
    ease: [0.22, 1, 0.36, 1],       // soft cinematic ease
  }}
  viewport={{ once: false, amount: 0.6 }}
  className="
    font-display
    text-5xl md:text-6xl
    tracking-[0.35em]
    uppercase
    will-change-transform
  "
>
  SEASONS
</motion.h2>
          <div className="mx-auto mt-8 w-24 h-[1px] bg-red-700/60" />
        </div>

        {seasons.map((season, i) => (
          <div key={season.title} className="space-y-16">
{/* IMAGE */}
<div className="relative h-[480px] overflow-hidden">
  {/* IMAGE ITSELF */}
  <motion.div
    initial={{ opacity: 0, scale: 1.06, y: 30 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    transition={{
      duration: 2.4,
      ease: [0.22, 1, 0.36, 1],
    }}
    viewport={{ once: false, amount: 0.5 }}
    className="absolute inset-0"
  >
    <Image
      src={season.image}
      alt={season.title}
      fill
      className="object-cover opacity-85"
    />
  </motion.div>

  {/* OVERLAY */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.8, delay: 0.4, ease: "easeOut" }}
    viewport={{ once: false }}
    className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black"
  />
</div>


{/* TEXT */}
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.5 }}
  className="max-w-3xl mx-auto text-center space-y-8"
>
  {/* TITLE */}
  <motion.h3
    variants={{
      hidden: {
        opacity: 0,
        filter: "blur(8px)",
      },
      visible: {
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          duration: 1,
          ease: "easeOut",
        },
      },
    }}
    className="font-display text-4xl md:text-5xl tracking-[0.2em]"
  >
    {season.title}
  </motion.h3>

  {/* SUBTITLE */}
  <motion.p
    variants={{
      hidden: {
        opacity: 0,
        letterSpacing: "0.7em",
      },
      visible: {
        opacity: 1,
        letterSpacing: "0.45em",
        transition: {
          duration: 1.6,
          delay: 0.15,
          ease: "easeOut",
        },
      },
    }}
    className="text-red-600 tracking-[0.45em] text-xs uppercase font-body"
  >
    {season.subtitle}
  </motion.p>

  {/* DIVIDER */}
  <motion.div
    variants={{
      hidden: { width: 0, opacity: 0 },
      visible: {
        width: "4rem",
        opacity: 1,
        transition: {
          duration: 1.2,
          delay: 0.3,
          ease: "easeOut",
        },
      },
    }}
    className="mx-auto h-[1px] bg-red-700/60"
  />

  {/* CONTENT */}
  <motion.p
    variants={{
      hidden: {
        opacity: 0,
        y: 12,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1.6,
          delay: 0.45,
          ease: "easeOut",
        },
      },
    }}
    className="whitespace-pre-line text-gray-300 font-body text-[15px] leading-8 tracking-wide"
  >
    {season.content}
  </motion.p>

  {/* EPISODES */}
<motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1.2, delay: 0.6 }}
  viewport={{ once: false }}
  className="pt-6 text-red-600 tracking-wide font-body"
>
  Episodes <EpisodeCount value={season.episodes} />
</motion.p>

</motion.div>



          </div>
        ))}
      </div>
    </section>
  );
}