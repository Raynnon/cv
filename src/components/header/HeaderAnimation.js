// @flow
import * as React from "react";
import "./Animation.css";

export const HeaderAnimation = () => {
  return (
    <div id="wave" className="waveWrapper waveAnimation">
      <div className="waveWrapperInner bgTop">
        <div className="wave waveTop"></div>
      </div>
      <div className="waveWrapperInner bgMiddle">
        <div className="wave waveMiddle"></div>
      </div>
      <div className="waveWrapperInner bgBottom">
        <div className="wave waveBottom"></div>
      </div>
    </div>
  );
};
