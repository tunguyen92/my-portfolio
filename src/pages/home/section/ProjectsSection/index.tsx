import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import {
  animateFade,
  animateZoom,
  initialFadeDown,
  initialFadeUp,
  initialZoomIn,
  transitionInView,
} from "@/utils/animate";

import "./styles.scss";
import HoverBlendedCursor from "@/components/BlendedCursor/HoverBlendedCursor";
import { Link } from "react-router-dom";
import { project1 } from "@/assets/images";
import { arrowRight } from "@/assets/svgs";

const ProjectsSection = () => {
  const refs = {
    discover: useRef(null),
    project: useRef(null),
    content: useRef(null),
  };

  const isInView = {
    discover: useInView(refs.discover),
    project: useInView(refs.project),
    content: useInView(refs.content),
  };

  return (
    <section className="projects-section">
      <div className="container">
        <motion.p
          className="discover-our-cases"
          ref={refs.discover}
          animate={isInView.discover ? animateFade : initialFadeUp}
          transition={transitionInView}
        >
          DISCOVER OUR CASES
        </motion.p>

        <motion.h2
          className="projects"
          ref={refs.project}
          animate={isInView.project ? animateFade : initialFadeDown}
          transition={transitionInView}
        >
          Projects.
        </motion.h2>

        <motion.div
          className="content"
          ref={refs.content}
          animate={isInView.content ? animateZoom : initialZoomIn}
          transition={transitionInView}
        >
          <div className="imgs-main">
            <div className="grid-imgs">
              <HoverBlendedCursor>
                <Link to="about" className="effect-milo">
                  <img src={project1} alt="project1" />
                  <p className="content-text">CONTENT</p>
                  <h2 className="product-design">Unique Product Design</h2>
                </Link>
              </HoverBlendedCursor>

              <HoverBlendedCursor>
                <Link to="about" className="effect-milo">
                  <img src={project1} alt="project2" />
                  <p className="content-text">HTML VIDEO</p>
                  <h2 className="product-design">Ecommerce Website UI</h2>
                </Link>
              </HoverBlendedCursor>

              <HoverBlendedCursor>
                <button className="explore-btn">
                  <span>
                    SEE MORE WORKS
                    <img src={arrowRight} alt="arrow-right" />
                  </span>
                </button>
              </HoverBlendedCursor>
            </div>

            <div className="grid-imgs">
              <HoverBlendedCursor>
                <Link to="about" className="effect-milo">
                  <img src={project1} alt="project1" />
                  <p className="tab-content-text">GALLERY</p>
                  <h2 className="tab-product-design">
                    Mobile App for Car Rental
                  </h2>
                </Link>
              </HoverBlendedCursor>

              <HoverBlendedCursor>
                <Link to="about" className="effect-milo">
                  <img src={project1} alt="project2" />
                  <p className="tab-content-text">YT VIDEO</p>
                  <h2 className="tab-product-design">Product Development</h2>
                </Link>
              </HoverBlendedCursor>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
