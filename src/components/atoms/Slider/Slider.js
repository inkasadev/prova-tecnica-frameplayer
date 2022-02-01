import React from "react";
import "./Slider.css";

export const Slider = ({ min, max, frame, setFrame }) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={frame}
      onChange={({ target }) => setFrame(Number(target.value))}
      className="frameplayer__slider"
    />
  );
};
