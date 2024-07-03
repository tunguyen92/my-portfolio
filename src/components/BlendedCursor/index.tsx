import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

import "./styles.scss";

const BlendedCursor: React.FC = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { stiffness: 500, mass: 0.1 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="cursor"
      style={{
        position: "fixed",
        left: x,
        top: y,
      }}
    />
  );
};

export default BlendedCursor;
