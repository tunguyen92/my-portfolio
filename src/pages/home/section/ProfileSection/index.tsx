import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { girl2, trophy, years } from "@/assets/images";
import {
  animateFade,
  animateZoom,
  initialFadeLeft,
  initialFadeRight,
  initialFadeUp,
  initialZoomIn,
  transition,
} from "@/utils/animate";

import "./styles.scss";
import HoverBlendedCursor from "@/components/BlendedCursor/HoverBlendedCursor";

const ProfileSection = () => {
  return (
    <section className="section-two pt-17.5 2xl:pt-25 bg-black-2 border-b-gray-3 border-b border-solid">
      <div className="container">
        <div className="flex">
          <motion.div
            className="relative w-1/2 px-3 section-two-col-one"
            initial={initialFadeUp}
            animate={animateFade}
            transition={transition}
          >
            <motion.img
              className="girl-img2"
              src={girl2}
              alt="girl-img2"
              initial={initialFadeLeft}
              animate={animateFade}
              transition={transition}
            />
            <div className="hwlo animate-bounce-slow">
              <img
                className="years-img absolute bottom-15 right-12.5 2xl:right-27.5"
                src={years}
                alt="years-img"
              />
              <div className="digit absolute bottom-35 right-35 text-black-2 text-[140px] font-bold 2xl:right-50">
                3
              </div>
              <div className="circle-text absolute bottom-25 right-27 text-[15px] text-center">
                YEARS OF
                <br /> WORKING EXPERICE
              </div>
            </div>
          </motion.div>

          <div className="w-1/2 px-3">
            <motion.div
              className="award-circle-main flex items-center gap-5 border border-gray-3 w-full max-w-95 p-4 rounded-[45px] border-solid"
              initial={initialZoomIn}
              animate={animateZoom}
              transition={transition}
            >
              <div className="award-circle w-15 h-15 bg-gray-3 flex items-center justify-center rounded-full">
                <img src={trophy} alt="trophy" />
              </div>
              <div>
                <h3 className="independent text-xl font-medium">
                  Independent Of The Year
                </h3>
                <p className="annual text-base font-medium text-gray-2">
                  Annual Awards 2025
                </p>
              </div>
            </motion.div>

            <motion.h3
              className="self-taught pt-5 pb-7.5 text-gray-2 text-[32px] font-normal"
              initial={initialFadeUp}
              animate={animateFade}
              transition={transition}
            >
              Hello! I’m <span className="text-white">Jessica</span> a
              self-taught &amp; award-winning
              <span className="text-white">
                {" "}
                Web Designer &amp; Developer
              </span>{" "}
              with over{" "}
              <span className="text-white">
                fifteen years of work experience
              </span>
              . I started in my children’s room and got pro at renowned{" "}
              <span className="text-white">Ren Tech</span> Agencies.
            </motion.h3>

            <motion.p
              className="odio text-lg font-light"
              initial={initialFadeUp}
              animate={animateFade}
              transition={transition}
            >
              Urna neque sollicitudin odio tempus eleifend est. Vestibulum
              dictum turpis diam arcu rutrum interdum aliquet iaculis.
            </motion.p>

            <motion.p
              className="explore-me pt-10"
              initial={initialFadeRight}
              animate={animateFade}
              transition={transition}
            >
              <HoverBlendedCursor isFitWidth>
                <Link
                  to="/about"
                  className="flex items-center w-fit text-yellow-1 text-xl font-medium tracking-[2px] hover:text-orange-1 gap-2"
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
              </HoverBlendedCursor>
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
