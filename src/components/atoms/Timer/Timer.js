import React from "react";
import "./Timer.css";

export const Timer = ({ current, total }) => {
  return (
    <span className="frameplayer__timer">
      {current} / {total}
    </span>
  );
};
