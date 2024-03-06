import { useDispatch, useSelector } from "react-redux";
import { decCharacter, decNumber, incCharacter, incNumber } from "./actions";
import ChangeTextCon from "./TextNumcomponent/ChangeTextCon";
import ChangeNumCon from "./TextNumcomponent/ChangeNumCon";

const Store = ({Texttitle}) => {
  const myState = useSelector((state) => state.changeTheNumber);
  const { text, currentIndex } = useSelector(
    (state) => state.ChangeTheCharacters
  );
  const dispatch = useDispatch();

  return (
    <>
      <ChangeNumCon
        dispatch={dispatch}
        decNumber={decNumber}
        incNumber={incNumber}
        myState={myState}
      />
      <ChangeTextCon
        dispatch={dispatch}
        text={text}
        currentIndex={currentIndex}
        incCharacter={incCharacter}
        decCharacter={decCharacter}
        Texttitle={Texttitle}
      />
    </>
  );
};

export default Store;
