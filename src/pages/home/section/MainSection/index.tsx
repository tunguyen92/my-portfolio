import { useRef } from "react";
import {
  motion,
  MotionValue,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";

import {
  arrowMain,
  clientsImg1,
  clientsImg2,
  clientsImg3,
  clientsImg4,
  flower,
  girl,
} from "@/assets/images";
import {
  envelope,
  facebook,
  githubLogo,
  mediaLineBottom,
  mediaLineTop,
  mouseArrowDown,
  polygonArrow,
  youtube,
} from "@/assets/svgs";
import HoverBlendedCursor from "@/components/BlendedCursor/HoverBlendedCursor";
import useMediaQuery from "@/hooks/useMediaQuery";
import {
  animateFade,
  initialFadeDown,
  initialFadeLeft,
  initialFadeRight,
  initialFadeUp,
  transition,
  transitionInView,
} from "@/utils/animate";

import "./styles.scss";

const links = [
  {
    href: "mailto:thanhtu.kantee@mail.com",
    srcImg: envelope,
    alt: "envelope",
  },
  {
    href: "https://github.com/tunguyen92",
    srcImg: githubLogo,
    alt: "github",
  },
  {
    href: "https://www.facebook.com/titkantee",
    srcImg: facebook,
    alt: "facebook",
  },
  {
    href: "https://www.youtube.com/@kantee2929",
    srcImg: youtube,
    alt: "youtube",
  },
];

const WorkedBox = ({
  translateX,
  translateY,
}: {
  translateX: MotionValue<number>;
  translateY: MotionValue<number>;
}) => {
  // Handle scroll in view
  const workedBoxRef = useRef(null);
  const isInView = useInView(workedBoxRef);

  return (
    <motion.div
      className="worked-box"
      ref={workedBoxRef}
      initial={initialFadeRight}
      animate={isInView ? animateFade : initialFadeRight}
      transition={transitionInView}
      style={{ x: translateX, y: translateY }}
    >
      <p className="worked-more">Worked with a diverse range of individuals</p>
      <div className="client-img-main">
        <img
          className="rounded-full hover:z-10 relative"
          src={clientsImg1}
          alt="clients-img1"
        />
        <img
          className="rounded-full hover:z-10 absolute left-7.5"
          src={clientsImg2}
          alt="clients-img2"
        />
        <img
          className="rounded-full hover:z-10 absolute left-15"
          src={clientsImg3}
          alt="clients-img3"
        />
        <img
          className="rounded-full hover:z-10 absolute left-22.5"
          src={clientsImg4}
          alt="clients-img4"
        />
        <p className="worked-more worked-more2"> 10+ Clients</p>
      </div>
    </motion.div>
  );
};

const MainSection = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  // Create motion values to track the mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Create transformations based on the mouse position
  const translateX = useTransform(mouseX, [0, window.innerWidth], [20, -20]);
  const translateY = useTransform(mouseY, [0, window.innerHeight], [20, -20]);

  // Handle mouse move event
  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    mouseX.set(event.clientX);
    mouseY.set(event.clientY);
  };

  return (
    <section className="section-main" onMouseMove={handleMouseMove}>
      <div className="section-main-sub">
        <div className="media-main">
          <img src={mediaLineTop} alt="media-line-top" />

          {links.map((link) => (
            <HoverBlendedCursor key={link.href}>
              <a className="link" href={link.href}>
                <img src={link.srcImg} alt={link.alt} />
              </a>
            </HoverBlendedCursor>
          ))}

          <img src={mediaLineBottom} alt="media-line-bottom" />
        </div>

        <div className="container2">
          <motion.p
            className="main-text"
            initial={initialFadeDown}
            animate={animateFade}
            transition={transition}
          >
            Hello, I am <span>👋</span>
          </motion.p>
          <h1>
            <mark>Web</mark> Developer.
          </h1>
          <div className="home-girl-img-main">
            <div className="relative">
              <motion.div
                className="max-w-50 mx-auto pt-3 sm:pt-0 static sm:absolute sm:top-10 lg:top-25 right-0"
                initial={initialFadeDown}
                animate={animateFade}
                transition={transition}
              >
                <motion.div
                  className="relative"
                  style={{
                    translateX: isMobile ? 0 : translateX,
                    translateY: isMobile ? 0 : translateY,
                  }}
                >
                  <img
                    className="hidden sm:block absolute -top-5 -left-5"
                    src={polygonArrow}
                    alt="polygon-arrow"
                  />
                  <p className="my-name">Tu Nguyen</p>
                </motion.div>
              </motion.div>

              <motion.img
                src={girl}
                alt="girl"
                initial={initialFadeUp}
                animate={animateFade}
                transition={transition}
              />

              <motion.img
                className="absolute right-37.5 bottom-12.5 hidden md:block"
                id="arrow"
                src={arrowMain}
                alt="arrow-main"
                style={{ translateX, translateY }}
              />

              <WorkedBox translateX={translateX} translateY={translateY} />
            </div>
          </div>
        </div>

        <div className="section-main-right-contain">
          <motion.div
            className="section-main-right-contain-sub"
            initial={initialFadeLeft}
            animate={animateFade}
            transition={transition}
          >
            <h2 className="total-project">10+</h2>
            <p className="project-complted">PROJECT COMPLETED</p>
          </motion.div>

          <motion.div
            className="flower-box"
            initial={initialFadeLeft}
            animate={animateFade}
            transition={transition}
          >
            <img
              className="flower animate-spin duration-9000"
              src={flower}
              alt="flower"
            />
            <h2 className="freelance">
              A <span>Front-end Developer based in Vietnam.</span> I strives to
              build immersive and beautiful web applications through carefully
              crafted used-centric design.
            </h2>
          </motion.div>

          <HoverBlendedCursor>
            <a href="#section-two" className="mouse-main">
              <div className="mouse">
                <img
                  className="animate-bounce duration-1600 mt-5"
                  src={mouseArrowDown}
                  alt="mouse-arrow-down"
                />
              </div>
              <h2 className="scroll-down">SCROLL DOWN</h2>
            </a>
          </HoverBlendedCursor>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
