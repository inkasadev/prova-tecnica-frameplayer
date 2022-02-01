import React from "react";
import { Timer } from "./Timer";

export default {
  title: "atoms/Timer",
};

export const Standard = () => <Timer current={"00:00:00"} total={"00:00:00"} />;
