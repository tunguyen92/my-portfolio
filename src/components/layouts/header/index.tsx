import { motion, useCycle } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

import { myCV } from "@/assets/pdfs";
import { download, logo } from "@/assets/svgs";
import MenuToggle from "./components/MenuToggle";
import SideMenu from "./components/SideMenu";

import "./style.scss";

const navbar = [
  { item: "Home", to: "/" },
  { item: "About", to: "/about" },
  { item: "Contact", to: "/contact" },
];

const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <header className="top-navbar bg-black-1 border-b border-b-[#ffffff38]">
      <div className="container">
        <div className="top-navbar_full flex items-center justify-between py-3">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <div className="hell flex items-center gap-6 relative">
            <div className="top-navbar-title flex items-center gap-10 lg:gap-6">
              {navbar.map((nav) => (
                <NavLink
                  key={nav.item}
                  to={nav.to}
                  className={({ isActive }) =>
                    `text-lg font-medium leading-6 hover:text-orange-1 ${
                      isActive ? "text-orange-1" : ""
                    }`
                  }
                >
                  {nav.item}
                </NavLink>
              ))}
            </div>

            <Link
              to={myCV}
              target="_blank"
              className="cv-btn w-12 h-12 flex items-center justify-center rounded-lg bg-yellow-1"
            >
              <img src={download} alt="download" />
            </Link>

            <motion.nav
              className="z-10"
              initial={false}
              animate={isOpen ? "open" : "closed"}
            >
              <MenuToggle toggle={() => toggleOpen()} />
              <SideMenu isOpen={isOpen} />
            </motion.nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
