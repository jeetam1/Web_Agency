import { useEffect, useState } from "react";

function Cursor() {

  const [position, setPosition] =
    useState({
      x: 0,
      y: 0,
    });

  const [isHovering, setIsHovering] =
    useState(false);

  useEffect(() => {

    const moveCursor = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    const handleMouseOver = (e) => {

      if (
        e.target.tagName === "BUTTON" ||
        e.target.tagName === "A"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }

    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    window.addEventListener(
      "mouseover",
      handleMouseOver
    );

    return () => {

      window.removeEventListener(
        "mousemove",
        moveCursor
      );

      window.removeEventListener(
        "mouseover",
        handleMouseOver
      );

    };

  }, []);

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[30] rounded-full transition-all duration-150 ${
        isHovering
  ? "w-10 h-10 bg-blue-500/5 scale-110"
  : "w-4 h-4 bg-blue-500/10"
      }`}
     style={{
  transform: `translate(${position.x - (isHovering ? 20 : 8)}px, ${position.y - (isHovering ? 20 : 8)}px)`,

  backdropFilter: "blur(10px)",

  border: "1px solid rgba(255,255,255,0.08)",

  boxShadow: isHovering
    ? "0 0 30px rgba(59,130,246,0.18)"
    : "0 0 15px rgba(59,130,246,0.10)",

  mixBlendMode: "screen",

  transition:
    "width 0.2s ease, height 0.2s ease, background 0.2s ease, transform 0.08s linear",
}}
    />
  );
}

export default Cursor;