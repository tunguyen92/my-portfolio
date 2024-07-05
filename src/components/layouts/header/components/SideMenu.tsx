import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import HoverBlendedCursor from "@/components/BlendedCursor/HoverBlendedCursor";

interface SideMenuProps {
  isOpen: boolean;
  toggle: () => void;
}

const navbarVariants = {
  closed: {
    opacity: 0,
    scale: 0.5,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
  open: {
    opacity: 1,
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const navbar = [
  { item: "Home", to: "/" },
  { item: "About", to: "/about" },
  { item: "Contact", to: "/contact" },
];

const SideMenu = ({ isOpen, toggle }: SideMenuProps) => {
  return (
    <motion.div
      className={`menu ${isOpen ? "block" : "hidden"}`}
      variants={navbarVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "var(--black-1)",
      }}
      transition={{ duration: 0.1 }}
    >
      <div className="container">
        <div className="sidemenu-main">
          <p className="side-menu-text">MENU</p>

          <div className="side-menu-scroll">
            {navbar.map((nav) => (
              <div key={nav.item} className="heading" onClick={toggle}>
                <NavLink
                  to={nav.to}
                  className={({ isActive }) =>
                    `hover:text-orange-1 ${isActive ? "text-orange-1" : ""}`
                  }
                >
                  <HoverBlendedCursor>{nav.item}</HoverBlendedCursor>
                </NavLink>
              </div>
            ))}
          </div>

          <div className="cont-info">
            <div className="item">
              <p className="sub-title-address">Address</p>
              <p className="geek-alto">
                Thu Duc,
                <br />
                Ho Chi Minh City
              </p>
            </div>
            <div className="item">
              <p className="sub-title-address">Contact Us</p>
              <p>
                <a href="mailto:thanhtu.kantee@mail.com">
                  thanhtu.kantee@mail.com
                </a>
              </p>
              <p>
                <a href="tel:+0979456501">0979 456 501</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SideMenu;
