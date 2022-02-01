import React from "react";
import { FramePlayer } from "./FramePlayer";
import { data } from "../../../data";

export default {
  title: "patterns/FramePlayer",
};

export const Standard = () => <FramePlayer frames={data} fps={24} />;
