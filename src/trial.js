import { useState } from "react";

const AnimatedDiv = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleClick}>Open Div</button>
      <div
        className={`fixed top-0 left-0 w-full h-0 bg-black z-50 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "h-screen" : ""
        }`}
      >
        {/* Content inside the div */}
      </div>
    </div>
  );
};

export default AnimatedDiv;
