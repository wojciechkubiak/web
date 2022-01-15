import { createContext } from "react";

const TransformContext = createContext({
  transform: 0,
  setTransform: (value: number) => {},
});

export default TransformContext;
