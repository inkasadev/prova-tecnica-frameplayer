import React, { useCallback, useEffect, useRef } from "react";
import "./Screen.css";

export const Screen = ({
  frames,
  frame,
  setFrame,
  framerate = 24,
  isPaused = true,
  setCurrentTime = () => {},
}) => {
  const canvasRef = useRef();
  const ctxRef = useRef();
  const requestRef = React.useRef();
  const updateRef = React.useRef({
    then: Date.now(),
    lag: 0,
    interval: 1000 / framerate,
  });

  const drawFrame = useCallback(() => {
    const ctx = ctxRef.current;
    ctx.clearRect(0, 0, 1080, 1080);
    ctx.drawImage(frames[frame], 0, 0, 1080, 1080, 0, 0, 1080, 1080);
  }, [frame, frames]);

  const animate = useCallback(() => {
    if (!!!updateRef.current) return;
    const data = updateRef.current;

    const now = Date.now();
    const delta = now - data.then;

    data.lag += delta;
    data.then = now;

    while (data.lag >= data.interval) {
      data.lag -= data.interval;
      if (!isPaused) {
        setFrame((value) => {
          if (++value >= frames.length) value = 0;
          return value;
        });

        if (setCurrentTime)
          setCurrentTime((value) => {
            value += updateRef.current.interval;
            if (value > updateRef.current.interval * frames.length)
              value = updateRef.current.interval;
            return value;
          });
      }
    }

    requestRef.current = requestAnimationFrame(animate);
  }, [frames, isPaused, setFrame, setCurrentTime]);

  useEffect(() => {
    updateRef.current.then = Date.now();
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animate]);

  useEffect(() => {
    canvasRef.current.width = frames[0].width;
    canvasRef.current.height = frames[0].height;
    ctxRef.current = canvasRef.current.getContext("2d");
    drawFrame();
  }, []);

  useEffect(() => {
    const data = updateRef.current;
    data.lag = 0;
    data.then = Date.now();
    drawFrame();
    if (setCurrentTime) setCurrentTime(data.interval * (frame + 1));
  }, [frame, setCurrentTime]);

  return <canvas ref={canvasRef}></canvas>;
};
