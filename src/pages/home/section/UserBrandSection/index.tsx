import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import { useLayoutEffect } from "react";

import "./styles.scss";

const UserBrandSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      playOnInit: true,
      stopOnInteraction: false,
      stopOnFocusIn: false,
      // speed: 1,
    }),
  ]);

  useLayoutEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;
  }, [emblaApi]);

  return (
    <div className="header_full_sec">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            <div className="ticker__item ">User Interface</div>

            <div className="ticker__item ticker__item_dark">
              User Experience
            </div>

            <div className="ticker__item">Branding</div>

            <div className="ticker__item ticker__item_dark">Marketing</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBrandSection;
