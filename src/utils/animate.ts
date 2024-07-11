const initialFadeUp = { opacity: 0, x: 0, y: 100, z: 0 };
const initialFadeDown = { opacity: 0, x: 0, y: -100, z: 0 };
const initialFadeLeft = { opacity: 0, x: 100, y: 0, z: 0 };
const initialFadeRight = { opacity: 0, x: -100, y: 0, z: 0 };
const initialZoomIn = { opacity: 0, scale: 0.6 };

const animateFade = { opacity: 1, x: 0, y: 0, z: 0 };
const animateZoom = { opacity: 1, scale: 1 };

const transition = {
  ease: "easeInOut",
  duration: 1.6,
};

const transitionInView = {
  ease: "linear",
  duration: 0.6,
};

export {
  animateFade,
  animateZoom,
  initialFadeDown,
  initialFadeLeft,
  initialFadeRight,
  initialFadeUp,
  initialZoomIn,
  transition,
  transitionInView,
};
