import React, { useState } from "react";
import { Controls } from "./Controls";

export default {
  title: "patterns/Controls",
};

export const Standard = () => {
  const [isPaused, setIsPaused] = useState(true);
  const [frame, setFrame] = useState(0);
  const [currentTime, setCurrentTime] = useState(1000 / 24);
  return (
    <Controls
      totalFrames={200}
      framerate={24}
      currentFrame={frame}
      currentTime={currentTime}
      setFrame={setFrame}
      setIsPaused={setIsPaused}
    />
  );
};
