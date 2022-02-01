import React from "react";
import "./PauseButton.css";

export const PauseButton = (props) => {
  return (
    <button {...props}>
      <i className="fas fa-pause"></i>
    </button>
  );
};
