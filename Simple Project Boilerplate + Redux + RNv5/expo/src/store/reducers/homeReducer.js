import * as types from "../types";

const initialState = {
  projectType: "Expo",
  loveExpo: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT_LOVE_EXPO:
      return {
        ...state,
        loveExpo: state.loveExpo + 1,
      };
    default:
      return state;
  }
};
