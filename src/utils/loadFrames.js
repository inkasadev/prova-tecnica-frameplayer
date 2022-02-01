export const loadFrames = (frames, setLoaded) => {
  const total = frames.length;
  const data = [];
  let loaded = 0;

  return new Promise((resolve) => {
    frames.forEach((frame, index) => {
      const img = new Image();
      img.onload = () => {
        // console.log(`loaded ${loaded} of ${total}`);
        setLoaded(loaded);
        data[index] = img;
        if (++loaded >= total) resolve(data);
      };
      img.src = frame;
    });
  });
};
