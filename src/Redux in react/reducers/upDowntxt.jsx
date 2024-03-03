let initialState01 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",

changeTheCharacters = (state = initialState01, action) => {
  let currIndex = 0;
  switch (action.type) {
    case "INCCHAR": 
        if (currIndex <= initialState01.length){
          initialState01 = initialState01.charAt(currIndex);
          currIndex++;
          let a = document.querySelector(".output")
          void a.offsetWidth;
          a.style.opacity = 1
          return initialState01
        } else {
          currIndex = 0;
          return initialState01 = "";
        }
      default:
        return state
  }
}
export default changeTheCharacters;

