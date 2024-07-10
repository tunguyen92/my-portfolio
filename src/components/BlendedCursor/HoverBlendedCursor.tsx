const HoverBlendedCursor = ({
  children,
  isFitWidth,
}: {
  children: JSX.Element;
  isFitWidth?: boolean;
}) => {
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
      className={`blended-cursor ${isFitWidth && "w-fit"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default HoverBlendedCursor;
