import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef } from "react";

export default function EpisodeCount({ value }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, v => Math.round(v));
  const hasAnimated = useRef(false);

  return (
    <motion.span
      className="text-white font-semibold"
      viewport={{ once: false }}
      onViewportEnter={() => {
        // prevent instant render issues
        hasAnimated.current = false;
        count.set(0);

        animate(count, value, {
          duration: 1.6,
          ease: "easeOut",
        });
      }}
    >
      {rounded}
    </motion.span>
  );
}