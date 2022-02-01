import React, { useEffect, useState } from "react";
import { Loading } from "../../atoms/Loading";
import { Screen } from "../../atoms/Screen";
import { loadFrames } from "../../../utils/loadFrames";
import { Controls } from "../Controls/Controls";
import "./FramePlayer.css";

export const FramePlayer = ({ frames, fps }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(true);
  const [loaded, setLoaded] = useState(0);
  const [data, setData] = useState(null);
  const [frame, setFrame] = useState(0);
  const [currentTime, setCurrentTime] = useState(1000 / fps);

  useEffect(() => {
    loadFrames(frames, setLoaded).then((res) => {
      setData(res);
      setIsLoading(false);
    });
  }, [frames]);

  if (isLoading) {
    return (
      <div className="frameplayer">
        <Loading loaded={loaded} total={frames.length} />
      </div>
    );
  }
  return (
    <div className="frameplayer">
      <Screen
        frames={data}
        isPaused={isPaused}
        framerate={fps}
        setCurrentTime={setCurrentTime}
        frame={frame}
        setFrame={setFrame}
      />
      <Controls
        totalFrames={frames.length}
        framerate={fps}
        currentFrame={frame}
        currentTime={currentTime}
        setFrame={setFrame}
        setIsPaused={setIsPaused}
      />
    </div>
  );
};
