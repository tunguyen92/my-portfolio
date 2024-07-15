import { motion, useInView } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useLayoutEffect, useRef } from "react";

import {
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
} from "@/assets/images";
import {
  animateFade,
  initialFadeDown,
  transitionInView,
} from "@/utils/animate";

import "./styles.scss";

const slides = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

const BrandSection = () => {
  const titleRef = useRef(null);
  const isInViewTitle = useInView(titleRef);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      playOnInit: true,
      stopOnInteraction: false,
      stopOnFocusIn: false,
      speed: 1,
    }),
  ]);

  useLayoutEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;
  }, [emblaApi]);

  return (
    <div className="marquee-main py-5 sl:py-7.5 md:py-12.5 xl:py-15 bg-black-2">
      <motion.h3
        className="text-center text-[22px] md:text-2xl font-light"
        ref={titleRef}
        animate={isInViewTitle ? animateFade : initialFadeDown}
        transition={transitionInView}
      >
        Trusted by World Leading Brands
      </motion.h3>

      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((logo, index) => (
              <div
                className="embla__slide h-16 lg:h-20 w-46 sl:w-50 lg:w-[220px] px-7.5 lg:px-[52px] mx-2.5 sl:mx-5 md:mx-7.5 py-0 my-0"
                key={`logo${index + 1}`}
              >
                <img
                  className="brand-logos"
                  src={logo}
                  alt={`logo${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
