import { useState, useEffect } from "react";

export const useGradient = () => {
  const [mouseXpercentage, setMouseXpercentage] = useState(0);
  const [mouseYpercentage, setMouseYpercentage] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const newMouseXpercentage = Math.round((event.pageX / windowWidth) * 100);
      const newMouseYpercentage = Math.round(
        (event.pageY / windowHeight) * 100
      );

      setMouseXpercentage(newMouseXpercentage);
      setMouseYpercentage(newMouseYpercentage);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return [mouseXpercentage, mouseYpercentage];
};
