import * as types from "../types";

export const incrementLoveExpo = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: types.INCREMENT_LOVE_EXPO, payload: {} });
    }, 2000);
  };
};
