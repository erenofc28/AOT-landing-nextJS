"use client"
import {motion} from "framer-motion"

export default function QuotesPage() {
  const quotes = [
    { text: "If you don’t fight, you can’t win.", author: "Eren Yeager" },
    {
      text: "The world is cruel, but it’s also very beautiful.",
      author: "Mikasa Ackerman",
    },
    {
      text: "Someone who can’t sacrifice anything can’t change anything.",
      author: "Armin Arlert",
    },
    {
      text: "The only thing we’re allowed to do is believe that we won’t regret the choice we made.",
      author: "Levi Ackerman",
    },
    {
      text: "My soldiers, rage! My soldiers, scream! My soldiers, fight!",
      author: "Erwin Smith",
    },
    {
      text: "Anyone can become a god or a devil. All it takes is for people to believe it.",
      author: "Hange Zoë",
    },
  ];

  return (
    <section className="bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-40 space-y-32">

        {/* TITLE */}
        <div className="text-center">

<motion.h1
  initial={{
    opacity: 0,
    y: -18,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 1.6,
    delay: 0.25,          // gives a “pause” feeling
    ease: [0.22, 1, 0.36, 1],
  }}
  viewport={{ once: false, amount: 0.6 }}
  className="font-display text-5xl md:text-6xl tracking-[0.35em]"
>
  QUOTES
</motion.h1>
          <div className="mx-auto mt-8 w-24 h-[1px] bg-red-700/60" />
        </div>




{/* QUOTES */}
<div className="space-y-28">
  {quotes.map((quote, i) => {
    const isLeft = i % 2 === 0;

    return (
      <motion.div
        key={i}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        className={`max-w-3xl ${
          isLeft ? "mr-auto text-left" : "ml-auto text-right"
        }`}
      >
        {/* QUOTE */}
        <motion.p
          variants={{
            hidden: {
              opacity: 0,
              x: isLeft ? -40 : 40,
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 1.8,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className="font-display text-3xl md:text-4xl leading-relaxed tracking-wide text-gray-100"
        >
          “{quote.text}”
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
          className={`mt-6 h-[1px] bg-red-700/60 ${
            isLeft ? "" : "ml-auto"
          }`}
        />

        {/* AUTHOR */}
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
                duration: 1.4,
                delay: 0.45,
                ease: "easeOut",
              },
            },
          }}
          className="mt-4 text-xs tracking-[0.45em] uppercase text-red-600 font-body"
        >
          {quote.author}
        </motion.p>
      </motion.div>
    );
  })}
</div>


      </div>
    </section>
  );
}