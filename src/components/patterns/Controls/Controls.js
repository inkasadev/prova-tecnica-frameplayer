import React, { useEffect, useState } from "react";
import { PauseButton } from "../../atoms/PauseButton";
import { PlayButton } from "../../atoms/PlayButton";
import { Slider } from "../../atoms/Slider";
import { Timer } from "../../atoms/Timer";
import { formatTime } from "../../../utils/formatTime";
import "./Controls.css";

export const Controls = ({
  totalFrames,
  currentFrame,
  currentTime,
  framerate,
  setFrame,
  setIsPaused,
}) => {
  const totalTime = formatTime((1000 / framerate) * totalFrames);
  const [timer, setTimer] = useState({
    current: 0,
    total: `${totalTime.minute}:${totalTime.second}`,
  });

  useEffect(() => {
    const currentTimeFormated = formatTime(currentTime);
    setTimer((value) => {
      return {
        ...value,
        current: `${currentTimeFormated.minute}:${currentTimeFormated.second}`,
      };
    });
  }, [currentTime]);

  return (
    <div className="frameplayer-controls">
      <div className="frameplayer-controls__buttons">
        <PlayButton onClick={() => setIsPaused(false)} />
        <PauseButton onClick={() => setIsPaused(true)} />
      </div>
      <Slider
        min="0"
        max={totalFrames - 1}
        frame={currentFrame}
        setFrame={setFrame}
      />
      <Timer current={timer.current} total={timer.total} />
    </div>
  );
};
