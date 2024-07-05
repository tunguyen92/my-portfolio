import { motion, useScroll, useSpring } from "framer-motion";

import "./styles.scss";

const ScrollTop = () => {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  console.log(scrollYProgress);

  return (
    <figure className="progress">
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        <motion.circle
          cx="50"
          cy="50"
          r="48"
          className="indicator"
          initial={{ strokeDasharray: "0px 1px" }}
          style={{ pathLength }}
        />
      </svg>
    </figure>
  );
};

export default ScrollTop;
