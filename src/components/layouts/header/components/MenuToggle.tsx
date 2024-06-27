import { motion, SVGMotionProps } from "framer-motion";

interface PathProps extends SVGMotionProps<SVGPathElement> {
  d?: string;
}

const Path = (props: PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

interface MenuToggleProps {
  toggle: () => void;
}

const MenuToggle = ({ toggle }: MenuToggleProps) => (
  <svg
    className="cursor-pointer"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    onClick={toggle}
  >
    <Path
      variants={{
        closed: { d: "M 3 7 L 27 7" },
        open: { d: "M 7 23 L 23 7" },
      }}
    />
    <Path
      d="M 3 15 L 27 15"
      variants={{
        closed: { opacity: 1 },
        open: { opacity: 0 },
      }}
      transition={{ duration: 0.1 }}
    />
    <Path
      variants={{
        closed: { d: "M 3 23 L 27 23" },
        open: { d: "M 7 7 L 23 23" },
      }}
    />
  </svg>
);

export default MenuToggle;
