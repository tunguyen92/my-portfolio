import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

import HoverBlendedCursor from "@/components/BlendedCursor/HoverBlendedCursor";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  animateFade,
  animateZoomAndFade,
  initialFadeUp,
  initialZoomInLeft,
  initialZoomInRight,
  transitionInView,
} from "@/utils/animate";

import "./styles.scss";

const ServiceSection = () => {
  const refs = {
    ourServices: useRef(null),
    ourSolution: useRef(null),
    odio: useRef(null),
    servicesCircle: useRef(null),
    accordion1: useRef(null),
    accordion2: useRef(null),
    accordion3: useRef(null),
    accordion4: useRef(null),
  };

  const isInView = {
    ourServices: useInView(refs.ourServices),
    ourSolution: useInView(refs.ourSolution),
    odio: useInView(refs.odio),
    servicesCircle: useInView(refs.servicesCircle),
    accordion1: useInView(refs.accordion1),
    accordion2: useInView(refs.accordion2),
    accordion3: useInView(refs.accordion3),
    accordion4: useInView(refs.accordion4),
  };

  return (
    <section className="service-section py-5 sl:py-7.5 md:py-12.5 lg:py-17.5 2xl:py-25 overflow-hidden">
      <div className="container">
        <div className="services-section flex flex-wrap justify-between">
          <div className="w-full lg:w-1/3">
            <motion.p
              className="our-services bg-custom-gradient bg-clip-text text-fill-transparent text-center lg:text-start text-lg sl:text-xl font-medium"
              ref={refs.ourServices}
              animate={isInView.ourServices ? animateFade : initialFadeUp}
              transition={transitionInView}
            >
              OUR SERVICES
            </motion.p>

            <motion.h2
              className="our-solution text-center lg:text-start text-3xl sl:text-35 md:text-40 lg:text-5xl leading-12.5 md:leading-[55px] lg:leading-16 pb-0 sl:pb-2.5 lg:pb-7.5 font-bold"
              ref={refs.ourSolution}
              animate={isInView.ourSolution ? animateFade : initialFadeUp}
              transition={transitionInView}
            >
              Solution We Provide.
            </motion.h2>

            <motion.p
              className="odio font-light text-base sl:text-lg text-center lg:text-start"
              ref={refs.odio}
              animate={isInView.odio ? animateFade : initialFadeUp}
              transition={transitionInView}
            >
              Urna neque sollicitudin odio tempus eleifend est. Vestibulum
              dictum turpis diam arcu rutrum interdum aliquet iaculis.
            </motion.p>

            <div
              className="services-circle-main relative flex items-center justify-center gap-7.5 md:gap-0 lg:block md:pt-7.5 pb-2.5 md:pb-4 pt-5 lg:pt-11 2xl:pt-20"
              ref={refs.servicesCircle}
            >
              <motion.div
                className="view-work-circle bg-yellow-1 before:bg-white ml-0 md:ml-25 lg:ml-0"
                animate={
                  isInView.servicesCircle
                    ? animateZoomAndFade
                    : initialZoomInRight
                }
                transition={transitionInView}
              >
                <Link to="/contact" className="text-black-1">
                  VIEW MY WORK
                </Link>
              </motion.div>

              <motion.div
                className="contact-circle md:absolute left-42.5 lg:left-37.5 top-7.5 lg:top-11 2xl:top-20"
                ref={refs.servicesCircle}
                animate={
                  isInView.servicesCircle
                    ? animateZoomAndFade
                    : initialZoomInLeft
                }
                transition={transitionInView}
              >
                <div className="view-work-circle bg-black-2 before:bg-yellow-1 hover:text-black-1">
                  <Link to="/contact">CONTACT ME</Link>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <div id="faq-sec">
              <HoverBlendedCursor>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  defaultValue="item-1"
                >
                  <motion.div
                    ref={refs.accordion1}
                    animate={isInView.accordion1 ? animateFade : initialFadeUp}
                    transition={transitionInView}
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-2xl md:text-3xl lg:text-36 lg:leading-12">
                        Visual Design
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-2 text-lg">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Illum corporis aspernatur cum in nemo magni qui
                        omnis ratione at nobis neque nisi quam, id libero vel
                        nam? Libero, eveniet possimus!
                        <ul className="accor-list pt-2.5 text-white list-disc list-inside">
                          <li>Ullam voluptas.</li>
                          <li>Deserunt assumenda.</li>
                          <li>Perferendis iusto maxime.</li>
                          <li>Numquam asperiores voluptatibus.</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                  <motion.div
                    ref={refs.accordion2}
                    animate={isInView.accordion2 ? animateFade : initialFadeUp}
                    transition={transitionInView}
                  >
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-2xl md:text-3xl lg:text-36 leading-12">
                        Design Systems
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-2 text-lg">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Nobis accusamus aliquam magnam amet eveniet
                        reprehenderit nemo qui esse fuga hic molestias
                        accusantium soluta, magni, quae omnis explicabo,
                        assumenda mollitia praesentium.
                        <ul className="accor-list pt-2.5 text-white list-disc list-inside">
                          <li>Vitae repudiandae.</li>
                          <li>Odit eos.</li>
                          <li>Nesciunt, adipisci.</li>
                          <li>Quaerti expedita.</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                  <motion.div
                    ref={refs.accordion3}
                    animate={isInView.accordion3 ? animateFade : initialFadeUp}
                    transition={transitionInView}
                  >
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-2xl md:text-3xl lg:text-36 leading-12">
                        Web Design &amp; Development
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-2 text-lg">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. At quas ipsa ipsam dolores vitae odio tempore,
                        aliquam natus, autem illo distinctio aut voluptas
                        consequuntur ex nisi itaque similique dolorum nemo!
                        <ul className="accor-list pt-2.5 text-white list-disc list-inside">
                          <li>Lempora exercitationem.</li>
                          <li>Veritatis dolores.</li>
                          <li>Similique porro.</li>
                          <li>Tempore reprehenderit earum.</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                  <motion.div
                    ref={refs.accordion4}
                    animate={isInView.accordion4 ? animateFade : initialFadeUp}
                    transition={transitionInView}
                  >
                    <AccordionItem value="item-4" className="border-none">
                      <AccordionTrigger className="text-2xl md:text-3xl lg:text-36 pb-0 leading-12">
                        Design Systems
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-2 text-lg">
                        Project systematization is something I place a lot of
                        emphasis on. My passion Design Systems.
                        <ul className="accor-list pt-2.5 text-white list-disc list-inside">
                          <li>Interface Design</li>
                          <li>lo</li>
                          <li>UI Kits</li>
                          <li>User Experience Development</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                </Accordion>
              </HoverBlendedCursor>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
