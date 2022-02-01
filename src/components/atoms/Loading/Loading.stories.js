import React from "react";
import { Loading } from "./Loading";

export default {
  title: "atoms/Loading",
};

export const Standard = () => <Loading loaded={0} total={200} />;
