import React from "react";
import { motion } from "framer-motion";

/**
 * Scroll-triggered 3D entrance: the element rises and rotates
 * from a tilted perspective into place as it enters the viewport.
 */
export default function Reveal3D({
  children,
  className = "",
  delay = 0,
  y = 48,
  rotateX = 8,
  once = true,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, rotateX, transformPerspective: 1000 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}