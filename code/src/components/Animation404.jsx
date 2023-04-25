import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/images/404.json";

export default function Animation404() {
  const options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div className="-z-10 mx-8 h-80">
      <Lottie options={options} />
    </div>
  );
}
