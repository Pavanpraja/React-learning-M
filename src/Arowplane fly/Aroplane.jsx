import React, { useState } from "react";

const Aroplane = () => {
  const [count, setCount] = useState(1);
  const [start, setStart] = useState();
  const [hidden, setHidden] = useState();

    setInterval(() => {
      count < 3
        ? setCount(count + 1)
        : setStart({ animation: "ani 6s linear infinite" });
      count === 3 ? setHidden({ opacity: "0" }) : setHidden({ opacity: "1" });
    }, [1000]);
  return (
    <>
      <div className="background">
        <img src="cloud.png" alt="first" />
        <img src="cloud01.png" alt="first" />
        <img src="cloud.png" alt="first" />
      </div>
      <div className="arro-con">
        <img src="aro.png" alt="Aroplane" style={start} />
      </div>
      <div className="Timer-con" style={hidden}>
        {count}
      </div>
    </>
  );
};

export default Aroplane;
