import React from "react";
import { FramePlayer } from "../../patterns/FramePlayer";
import { data } from "../../../data";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <h1>FramePlayer Component</h1>
      <FramePlayer frames={data} fps={24} />
    </div>
  );
};
