import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

import { girl2, trophy, years } from "@/assets/images";
import HoverBlendedCursor from "@/components/BlendedCursor/HoverBlendedCursor";
import {
  animateFade,
  animateZoom,
  initialFadeLeft,
  initialFadeRight,
  initialFadeUp,
  initialZoomIn,
  transitionInView,
} from "@/utils/animate";

import "./styles.scss";

const ProfileSection = () => {
  const refs = {
    leftSide: useRef(null),
    girlImage: useRef(null),
    award: useRef(null),
    selfTaught: useRef(null),
    odio: useRef(null),
    explore: useRef(null),
  };

  const isInView = {
    leftSide: useInView(refs.leftSide),
    girlImage: useInView(refs.girlImage),
    award: useInView(refs.award),
    selfTaught: useInView(refs.selfTaught),
    odio: useInView(refs.odio),
    explore: useInView(refs.explore),
  };

  return (
    <section className="section-two pt-17.5 2xl:pt-25 bg-black-2 border-b-gray-3 border-b border-solid overflow-hidden">
      <div className="sl:container">
        <div className="flex flex-col-reverse lg:flex-row">
          <motion.div
            ref={refs.leftSide}
            className="relative lg:w-1/2 px-3 pt-3 xs:pt-4 sm:pt-5 md:pt-12.5 lg:pt-0 flex items-center justify-center lg:block"
            animate={isInView.leftSide ? animateFade : initialFadeUp}
            transition={transitionInView}
          >
            <motion.img
              ref={refs.girlImage}
              className="girl-img2"
              src={girl2}
              alt="girl-img2"
              animate={isInView.girlImage ? animateFade : initialFadeLeft}
              transition={transitionInView}
            />
            <div className="hwlo animate-bounce-slow">
              <img
                className="years-img absolute -bottom-60 lg:bottom-15 right-14 md:-right-35 lg:right-12.5 2xl:right-27.5 max-w-56 sm:max-w-60 lg:max-w-full"
                src={years}
                alt="years-img"
              />
              <div className="digit absolute -bottom-40 sm:-bottom-44 lg:bottom-40 xl:bottom-35 right-35 md:-right-14 lg:right-35 text-black-2 text-[100px] sm:text-[140px] font-bold 2xl:right-50">
                3
              </div>
              <div className="circle-text absolute -bottom-51 sm:-bottom-50 lg:bottom-25 right-25 sm:right-27 md:-right-22 lg:right-27 2xl:right-42 text-[15px] text-center w-max">
                YEARS OF
                <br /> WORKING EXPERIENCE
              </div>
            </div>
          </motion.div>

          <div className="lg:w-1/2 px-3">
            <motion.div
              ref={refs.award}
              className="award-circle-main flex items-center gap-5 border border-gray-3 w-full max-w-95 p-2 xs:p-3 sl:p-4 rounded-[45px] border-solid mx-auto"
              animate={isInView.award ? animateZoom : initialZoomIn}
              transition={transitionInView}
            >
              <div className="award-circle w-15 h-15 bg-gray-3 flex items-center justify-center rounded-full">
                <img src={trophy} alt="trophy" />
              </div>
              <div>
                <h3 className="independent text-lg xs:text-xl font-medium">
                  Independent Of The Year
                </h3>
                <p className="annual text-base font-medium text-gray-2">
                  Annual Awards 2025
                </p>
              </div>
            </motion.div>

            <motion.h3
              className="self-taught pt-4 sl:pt-5 pb-2.5 md:pb-5 xl:pb-7.5 text-gray-2 text-lg md:text-[21px] lg:text-2xl xl:text-[32px] text-center xl:text-left font-normal leading-7 sl:leading-8 md:leading-10 xl:leading-12"
              ref={refs.selfTaught}
              animate={isInView.selfTaught ? animateFade : initialFadeUp}
              transition={transitionInView}
            >
              Hello! I’m <span className="text-white">Tu</span> a self-taught
              &amp; award-winning
              <span className="text-white"> Front-end Developer</span> with over{" "}
              <span className="text-white">three years of work experience</span>
              . Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
              harum <span className="text-white">consectetur consectetur</span>{" "}
              Cumque.
            </motion.h3>

            <motion.p
              className="odio text-base sl:text-lg font-light text-center lg:text-left"
              ref={refs.odio}
              animate={isInView.odio ? animateFade : initialFadeUp}
              transition={transitionInView}
            >
              Urna neque sollicitudin odio tempus eleifend est. Vestibulum
              dictum turpis diam arcu rutrum interdum aliquet iaculis.
            </motion.p>

            <HoverBlendedCursor>
              <motion.p
                className="explore-me pt-5 flex justify-center lg:block lg:pt-10 text-center lg:text-left"
                ref={refs.explore}
                animate={isInView.explore ? animateFade : initialFadeRight}
                transition={transitionInView}
              >
                <Link
                  to="/about"
                  className="flex items-center w-fit text-yellow-1 text-lg sl:text-xl font-medium tracking-[2px] hover:text-orange-1 gap-2"
                >
                  EXPLORE ME
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <g>
                      <path
                        d="M6.66669 16H25.3334"
                        stroke="#FFDB59"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 21.3333L25.3333 16"
                        stroke="#FFDB59"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 10.6666L25.3333 16"
                        stroke="#FFDB59"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </Link>
              </motion.p>
            </HoverBlendedCursor>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
