import React from "react";
import "./Loading.css";

export const Loading = ({ loaded, total }) => {
  return (
    <div className="loading">
      <div className="spinner spinner--dot-spin"></div>
      <span>
        Carregando frame {loaded} de {total}
      </span>
    </div>
  );
};
