import {
  envelope,
  facebook,
  github,
  mediaLineBottom,
  mediaLineTop,
  youtube,
} from "@/assets/svgs";

import "./styles.scss";
import HoverBlendedCursor from "@/components/BlendedCursor/HoverBlendedCursor";
import { motion } from "framer-motion";

const links = [
  {
    href: "mailto:thanhtu.kantee@mail.com",
    srcImg: envelope,
    alt: "envelope",
  },
  {
    href: "https://github.com/tunguyen92",
    srcImg: github,
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

const MainSection = () => {
  return (
    <section className="section-main">
      <div className="section-main-sub">
        <div className="media-main">
          <img src={mediaLineTop} alt="media-line-top" />

          {links.map((link) => (
            <HoverBlendedCursor>
              <a className="link" href={link.href}>
                <img src={link.srcImg} alt={link.alt} />
              </a>
            </HoverBlendedCursor>
          ))}

          <img src={mediaLineBottom} alt="media-line-bottom" />
        </div>

        <div className="container2 position-relative">
          <p className="main-text aos-init aos-animate" data-aos="fade-down">
            Hello, I am <span>👋</span>
          </p>
          <h1>
            <mark>Web</mark> Designer.
          </h1>
          <div className="home-girl-img-main">
            <div className="position-relative">
              <div
                className="JessicaBiogi-main aos-init aos-animate"
                data-aos="fade-down"
              >
                <div
                  className="position-relative"
                  id="JessicaBiogi_main"
                  style={{ transform: "translate3d(-15.1px, -1.45556px, 0px)" }}
                >
                  <img
                    className="JessicaBiogi-svg"
                    src="assets/images/Polygon-arrow.svg"
                    alt="Polygon-arrow"
                  />
                  <p className="jessica-biogi">Jessica Biogi</p>
                </div>
              </div>
              <img
                className="home-girl-img aos-init aos-animate"
                src="assets/images/girl.png"
                alt="girl"
                data-aos="fade-up"
              />
              <img
                className="arrow-main"
                id="arrow"
                src="assets/images/arrow-main.png"
                alt="arrow-main"
                style={{ transform: "translate3d(-15.1px, -1.45556px, 0px)" }}
              />
              <div
                id="worked_box"
                style={{
                  transform: "translate3d(-20.1333px, -2.18333px, 0px)",
                }}
              >
                <div className="worked-box aos-init" data-aos="fade-right">
                  <p className="worked-more">
                    Worked with more than 100 people
                  </p>
                  <div className="client-img-main position-relative">
                    <img
                      className="client-img client-img1"
                      src="assets/images/clients-img1.jpg"
                      alt="clients-img1"
                    />
                    <img
                      className="client-img client-img2"
                      src="assets/images/clients-img2.jpg"
                      alt="clients-img2"
                    />
                    <img
                      className="client-img client-img3"
                      src="assets/images/clients-img3.jpg"
                      alt="clients-img3"
                    />
                    <img
                      className="client-img client-img4"
                      src="assets/images/clients-img4.jpg"
                      alt="clients-img4"
                    />
                    <p className="worked-more worked-more2"> 100+ Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-main-right-contain">
          <motion.div
            className="section-main-right-contain-sub"
            initial={{ opacity: 0, transform: "translate3d(100px, 0, 0)" }}
            animate={{ opacity: 1, transform: "translateZ(0)" }}
            transition={{
              ease: "easeInOut",
              duration: 1.6,
            }}
          >
            <h2 className="total-project">700+</h2>
            <p className="project-complted">PROJECT COMPLETED</p>
          </motion.div>
          <div className="flower-box aos-init aos-animate" data-aos="fade-left">
            <img
              className="flower"
              src="assets/images/flower.png"
              alt="flower"
            />
            <h2 className="Freelance">
              A <span>Freelance Designer and Developer based in USA.</span> I
              strives to build immersive and beautiful web applications through
              carefully crafted used-centric design.
            </h2>
          </div>
          <div className="mouse-scroll-box">
            <a href="#section-two" className="mouse-main">
              <div className="mouse">
                <svg
                  className="mouse-arrow-down"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={40}
                  viewBox="0 0 24 40"
                  fill="none"
                >
                  <g clipPath="url(#clip0_37_162)">
                    <path
                      d="M12 5L12 35"
                      stroke="#FFDB59"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 31L12 35"
                      stroke="#FFDB59"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 31L12 35"
                      stroke="#FFDB59"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_37_162">
                      <rect width={24} height={40} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h2 className="scroll-down">SCROLL DOWN</h2>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
