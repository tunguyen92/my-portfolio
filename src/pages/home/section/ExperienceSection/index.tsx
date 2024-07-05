import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const ScrollComponent: React.FC = () => {
  const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  // });

  // const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "720deg"]);

  const isInView = useInView(ref);

  return (
    <div
      style={{
        position: "relative",
        height: "2000px",
      }}
    >
      <div
        style={{
          width: 800,
          height: 800,
          backgroundColor: "red",
        }}
      >
        1
      </div>

      <motion.div
        ref={ref}
        style={{
          position: "absolute",
          top: 500,
          width: 300,
          height: 300,
          backgroundColor: "orange",
          transition: "opacity 1s ease-in-out",
          opacity: isInView ? 1 : 0,
        }}
      >
        3 Scroll show
      </motion.div>

      <div
        style={{
          width: 800,
          height: 800,
          backgroundColor: "blue",
        }}
      >
        2
      </div>
    </div>
  );
};

export default ScrollComponent;
