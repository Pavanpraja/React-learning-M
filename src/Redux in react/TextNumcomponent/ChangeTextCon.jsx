import React, { useState } from "react";

const ChangeTextCon = ({
  dispatch,
  text,
  currentIndex,
  incCharacter,
  decCharacter,
  Texttitle,
}) => {
  let updShadow = "drop-shadow(2px 4px 6px black)";
  const [shadow, setShadow] = useState(0);

  const onMousedown = () => {
    setShadow(shadow);
  };
  const onMouseup = () => {
    setShadow(updShadow);
  };
  return (
    <>
      <h1 style={{textAlign: "center", marginTop: "5rem"}}>{Texttitle}</h1>
      <div className="changeText">
        <button onClick={() => dispatch(decCharacter())}>
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/nolan/64/minus.png"
            alt="plus"
            style={{ boxShadow: shadow }}
            onMouseDown={onMousedown}
            onMouseUp={onMouseup}
          />
        </button>
        <div className="output">{text.charAt(currentIndex)}</div>
        <button onClick={() => dispatch(incCharacter())}>
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/nolan/64/plus.png"
            alt="minus"
          />
        </button>
      </div>
    </>
  );
};

export default ChangeTextCon;
