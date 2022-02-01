import React, { useEffect, useState } from "react";
import { Screen } from "./Screen";
import { loadFrames } from "../../../utils/loadFrames";
import { data as frames } from "../../../data";

export default {
  title: "atoms/Screen",
  parameters: {
    docs: {
      description: {
        component: "Teste de *documentação* pra ver se funfa!",
      },
    },
  },
  argTypes: {
    isPaused: {
      description: "Lorem Ipsum",
    },
  },
};

const ComponentWrapper = ({ isPaused }) => {
  const [data, setData] = useState(null);
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    loadFrames(frames, () => {}).then((res) => {
      setData(res);
    });
  }, []);

  if (!!!data) return null;
  return (
    <Screen
      frames={data}
      framerate={24}
      isPaused={isPaused}
      frame={frame}
      setFrame={setFrame}
    />
  );
};

const Template = ({ isPaused }) => <ComponentWrapper isPaused={isPaused} />;

export const Standard = Template.bind({});
Standard.args = {
  isPaused: true,
};

/* export const Standard = () => {
  const [data, setData] = useState(null);
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    loadFrames(frames, () => {}).then((res) => {
      setData(res);
    });
  }, []);

  if (!!!data) return null;
  return (
    <Screen
      frames={data}
      framerate={24}
      isPaused={false}
      frame={frame}
      setFrame={setFrame}
    />
  );
}; */
