import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import { useLayoutEffect } from "react";

import "./styles.scss";
import HoverBlendedCursor from "@/components/BlendedCursor/HoverBlendedCursor";
import {
  clientBounceImg1,
  clientBounceImg2,
  clientBounceImg3,
  clientBounceImg4,
} from "@/assets/images";

const ContactTicker = () => {
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
    <div className="contact-ticker">
      <div className="relative">
        <img
          className="client-bounce-img client-bounce-img1"
          src={clientBounceImg1}
          alt="client-bounce-img1"
        />
        <img
          className="client-bounce-img client-bounce-img2"
          src={clientBounceImg2}
          alt="client-bounce-img2"
        />
        <img
          className="client-bounce-img client-bounce-img3"
          src={clientBounceImg3}
          alt="client-bounce-img3"
        />
        <img
          className="client-bounce-img client-bounce-img4"
          src={clientBounceImg4}
          alt="client-bounce-img4"
        />

        <div className="embla">
          <HoverBlendedCursor>
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                <div className="ticker__item ">thanhtu.kantee@gmail.com</div>

                <div className="ticker__item ticker__item_dark">
                  (+84) 979 456 501
                </div>
                <div className="ticker__item ">thanhtu.kantee@gmail.com</div>

                <div className="ticker__item ticker__item_dark">
                  (+84) 979 456 501
                </div>
              </div>
            </div>
          </HoverBlendedCursor>
        </div>
      </div>
    </div>
  );
};

export default ContactTicker;
