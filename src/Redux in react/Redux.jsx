import React from "react";
import Store from "./Store";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => store.getState());

const Redux = ({Texttitle}) => {
  return (
    <>
      <Provider store={store}>
        <Store Texttitle={Texttitle}/>
      </Provider>
    </>
  );
};

export default Redux;
