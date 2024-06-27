import { motion } from "framer-motion";

const navbarVariants = {
  closed: {
    opacity: 0,
    scale: 0.5,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  open: {
    opacity: 1,
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const SideMenu: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <motion.div
      className="navbar"
      variants={navbarVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        // background: "#fff",
        padding: "1rem",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
      transition={{ duration: 0.1 }}
    >
      <h1>Navbar</h1>
      {/* Add your navbar items here */}

      <div className="container">
        <div className="row sidemenu-main">
          <div className="col-lg-2">
            <div className="menu-text">
              <div className="side-menu-text">
                <p>MENU</p>
              </div>
            </div>
          </div>
          <div className="col-lg-7 side-menu-scroll">
            <div className="heading2">
              <a href="index.html">Home</a>
            </div>
            <div className="heading2">
              <a href="about.html">About</a>
            </div>

            <div className="heading2">
              <a href="contact.html">Contact</a>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="cont-info">
              <div className="item">
                <p className="sub-title-address">Address</p>
                <p className="geek-alto">
                  121 Parkview St.
                  <br />
                  California, USA
                </p>
              </div>
              <div className="item">
                <p className="sub-title-address">Contact Us</p>
                <p>
                  <a href="mailto:biogi@mail.com">biogi@mail.com</a>
                </p>
                <p className="underline">
                  <a href="tel:+1451356888">+1 451 356 888</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SideMenu;
