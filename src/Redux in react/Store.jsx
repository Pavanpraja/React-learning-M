import { useDispatch, useSelector } from "react-redux";
import { decNumber, incCharacter, incNumber } from "./actions";
import { useEffect } from "react";

const Store = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const myStateji = useSelector((state) => state.changeTheCharacters);
  console.log(myStateji)
  const dispatch = useDispatch();

  useEffect(()=>{
    incCharacter();
  }, [myStateji])

  return (
    <>
      <div
        className="app-con"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "1rem 0rem",
          gap:"1rem"
        }}
      >
        <h1>Increment and Decrement Counter</h1>
        <h2>Created with the help of React Redux</h2>
        <div
          className="content"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button onClick={() => dispatch(decNumber())}>-</button>
          <input type="text" name="number" id="number" value={myState} style={{textAlign: "center"}} readOnly/>
          <button onClick={() => dispatch(incNumber())}>+</button>
        </div>
      </div>
      <div className="changeText">
        <div className="output">{myStateji}</div>
        <button onClick={()=>dispatch(incCharacter())}>click</button>
      </div>
    </>
  );
};

export default Store;
