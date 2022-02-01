import React, { useState } from "react";
import { Slider } from "./Slider";

export default {
  title: "atoms/Slider",
};

export const Standard = () => {
  const [frame, setFrame] = useState(0);
  return <Slider min={0} max={100} frame={frame} setFrame={setFrame} />;
};
