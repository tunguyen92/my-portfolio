import { motion, useInView } from "framer-motion";
import { EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

import "./styles.scss";
import { useRef } from "react";
import {
  animateFade,
  animateZoomAndFade,
  initialFadeDown,
  initialFadeUp,
  initialZoomInLeft,
  transitionInView,
} from "@/utils/animate";
import { quotes } from "@/assets/svgs";
import {
  testimonialClientImg1,
  testimonialClientImg2,
  testimonialClientImg3,
  testimonialClientImg4,
} from "@/assets/images";

const options: EmblaOptionsType = {
  align: "start",
  loop: true,
};

const slides = [
  {
    title: "Great Work!",
    content:
      "Ultrices sed sed ut posuere at. Risus urna augue orci  malesuada etiam diam enim. Parturient habitasse massa feugiat   posuere odio leo vitae feugiat. Scelerisque cras viverra nunc ipsum et duis dui proin",
    img: testimonialClientImg1,
    clientName: "Olivia Segio",
    studio: "Oria Studio",
  },
  {
    title: "Best Creative Agency!",
    content:
      "Lectus quis sit diam aenean. Neque sed blandit sed at.   Adipiscing eu aenean viverra nunc. Lacus ornare massa      scelerisque feugiat pretium diam massa purus. Ultrices  elementum mattis magna cras viverra nisl enim.",
    img: testimonialClientImg2,
    clientName: "Alex Regan",
    studio: "Square Agency",
  },
  {
    title: "Great Work!",
    content:
      "Ultrices sed sed ut posuere at. Risus urna augue orci  malesuada etiam diam enim. Parturient habitasse massa feugiat   posuere odio leo vitae feugiat. Scelerisque cras viverra nunc ipsum et duis dui proin",
    img: testimonialClientImg3,
    clientName: "Andrew Lewis",
    studio: "Oria Studio",
  },
  {
    title: "Best Creative Agency!",
    content:
      "Lectus quis sit diam aenean. Neque sed blandit sed at.   Adipiscing eu aenean viverra nunc. Lacus ornare massa      scelerisque feugiat pretium diam massa purus. Ultrices  elementum mattis magna cras viverra nisl enim.",
    img: testimonialClientImg4,
    clientName: "Mark Daly",
    studio: "Square Agency",
  },
];

const TestimonialsSection = () => {
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

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="testimonials">
      <div className="container">
        <motion.p
          className="our-services"
          ref={refs.discover}
          animate={isInView.discover ? animateFade : initialFadeUp}
          transition={transitionInView}
        >
          TESTIMONIALS
        </motion.p>

        <motion.h2
          className="our-solution"
          ref={refs.project}
          animate={isInView.project ? animateFade : initialFadeDown}
          transition={transitionInView}
        >
          What Our Clients Say.
        </motion.h2>

        <motion.section
          className="embla"
          ref={refs.content}
          animate={isInView.content ? animateZoomAndFade : initialZoomInLeft}
          transition={transitionInView}
        >
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((item, index) => (
                <div className="embla__slide" key={index}>
                  <div className="great-work-svg">
                    <img src={quotes} alt="quotes" />
                    <h3>{item.title}</h3>
                  </div>
                  <p className="posuere">{item.content}</p>
                  <svg
                    className="slider-line"
                    xmlns="http://www.w3.org/2000/svg"
                    height={33}
                    viewBox="0 0 630 33"
                    fill="none"
                  >
                    <path d="M630 1H100L70 31V1H0" stroke="#909090" />
                  </svg>
                  <div className="client_details">
                    <img
                      className="testimonial_client_img"
                      src={item.img}
                      alt={`testimonial_client_img${index + 1}`}
                    />
                    <div>
                      <h3 className="client-name">{item.clientName}</h3>
                      <p className="studio">{item.studio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="embla__controls">
            <div className="embla__buttons">
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default TestimonialsSection;
