import React from "react";
import "./PlayButton.css";

export const PlayButton = (props) => {
  return (
    <button {...props}>
      <i className="fas fa-play"></i>
    </button>
  );
};
