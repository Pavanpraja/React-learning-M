import React from 'react'

const ChangeNumCon = ({dispatch, decNumber, incNumber, myState}) => {
  return (
    <div
        className="app-con"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "1rem 0rem",
          gap: "1rem",
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
          <input
            type="text"
            name="number"
            id="number"
            value={myState}
            style={{ textAlign: "center" }}
            readOnly
          />
          <button onClick={() => dispatch(incNumber())}>+</button>
        </div>
      </div>
  )
}

export default ChangeNumCon
