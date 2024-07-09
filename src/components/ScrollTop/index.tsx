import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { memo, useLayoutEffect, useState } from "react";

import "./styles.scss";
import HoverBlendedCursor from "../BlendedCursor/HoverBlendedCursor";

const ScrollTop = memo(() => {
  const [isFixedButton, setIsFixedButton] = useState(false);
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    setIsFixedButton(window.scrollY > 100);
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HoverBlendedCursor>
      <AnimatePresence>
        {isFixedButton && (
          <motion.figure
            className="progress"
            transition={{ duration: 0.4, ease: "linear" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
          >
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              <motion.circle
                cx="50"
                cy="50"
                r="48"
                className="indicator"
                initial={{ pathLength: 0 }}
                style={{ pathLength }}
              />
            </svg>
          </motion.figure>
        )}
      </AnimatePresence>
    </HoverBlendedCursor>
  );
});

export default ScrollTop;
