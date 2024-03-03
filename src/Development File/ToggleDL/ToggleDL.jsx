import React, { useState } from "react";

const ToggleDL = ({ title }) => {
  const [toggle, setToggle] = useState("left");
  const [linkg, setLinkg]  = useState('https://img.icons8.com/carbon-copy/100/partly-cloudy-night.png')

  const handleToggle = () => {
    if (toggle === "left") {
      setToggle("right");
      document.body.classList = "activeblack";
      setLinkg('https://img.icons8.com/3d-fluency/94/sun.png')
    } else {
      setToggle("left");
      document.body.classList = "activewhite";
      setLinkg('https://img.icons8.com/carbon-copy/100/partly-cloudy-night.png');
    }
  };

  return (
    <div className="ToggleDL-con">
      <h1>{title}</h1>
      <div className="outer-con">
        <div className="ToggleDL-btn-con" onClick={handleToggle}>
          <div
            className="TDL-btn"
            style={{ float: toggle }}
            onClick={handleToggle}
          ><img width="94" height="94" src={linkg} alt="sun" /></div>
        </div>
      </div>
    </div>
  );
};

export default ToggleDL;
