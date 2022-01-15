import { useState, useEffect } from "react";

export const useHeight = () => {
  const [height, setHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const handleHeight = () => setHeight(window.innerHeight);

    window.addEventListener("resize", handleHeight);

    return () => window.removeEventListener("resize", handleHeight);
  });

  return height;
};

export const useWidth = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleWidth = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleWidth);

    return () => window.removeEventListener("resize", handleWidth);
  });

  return width;
};
