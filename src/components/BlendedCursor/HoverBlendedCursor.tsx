import { ReactNode } from "react";

const HoverBlendedCursor = ({ children }: { children: ReactNode }) => {
  const handleMouseEnter = () => {
    const cursorElements = document.querySelectorAll(".cursor");
    cursorElements.forEach((element) => {
      element.classList.add("cursor-grow");
    });
  };

  const handleMouseLeave = () => {
    const cursorElements = document.querySelectorAll(".cursor");
    cursorElements.forEach((element) => {
      element.classList.remove("cursor-grow");
    });
  };

  return (
    <div
      className="blended-cursor"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default HoverBlendedCursor;
