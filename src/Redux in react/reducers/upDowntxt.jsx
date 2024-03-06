        let initialState01 = { text: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", currentIndex: 0};

const changeTheCharacters = (state = initialState01, action) => {
  switch (action.type) {
    case "SET_TEXT":
      // if (currIndex <= initialState01.length) {
      //   initialState01 = initialState01.charAt(currIndex);
      //   currIndex++;
      //   let a = document.querySelector(".output");
      //   void a.offsetWidth;
      //   a.style.opacity = 1;
      //   return initialState01;
      return {
        ...state,
        text: action.payload,
        currentIndex: 0,
      };
    case "INCCHAR":
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
      };
    case "DECCHAR":
      return {
        ...state,
        currentIndex: state.currentIndex - 1,
      };
    default:
      return state;
  }
};
export default changeTheCharacters;
