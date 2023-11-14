"use client";
import { useRef } from "react";
import { useScroll, motion } from "framer-motion";

export default function SixthLighter() {
  //transition seventhSection
  const seventh = useRef(null);
  const { scrollYProgress } = useScroll({
    target: seventh,
    offset: ["0.1 0", "0.8 1"],
  });

  return (
    <motion.div
      className="sixthSectionLighter"
      ref={seventh}
      style={{ opacity: scrollYProgress }}
    ></motion.div>
  );
}
