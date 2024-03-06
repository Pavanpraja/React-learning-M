const text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export const incNumber = () => {
  return {
    type: "INCREMENT",
  };
};
export const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};
export const setChars = () => {
  return { type: "SET_TEXT", payload: text }
};
export const incCharacter = () => {
  return {
    type: "INCCHAR",
  };
};
export const decCharacter = () => {
  return {
    type: "DECCHAR",
  };
};
