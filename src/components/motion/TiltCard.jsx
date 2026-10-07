import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Pointer-tracked 3D tilt: the card leans toward the cursor
 * with spring physics, like a rig sitting on flexing suspension.
 */
export default function TiltCard({ children, className = "", max = 5 }) {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), {
    stiffness: 160,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), {
    stiffness: 160,
    damping: 18,
  });

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };

  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.div>
  );
}