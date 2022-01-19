import { createStore } from "redux";

const initialState = {
  likes: 0,
};

const reduser = (state = initialState, action) => {
  console.log("reduser>>> ", action);

  switch (action.type) {
    case "INCREMENT":
      return { ...state, likes: state.likes + 1 };
    default:
      return state;
  }
};

const store = createStore(reduser);

export default store;
