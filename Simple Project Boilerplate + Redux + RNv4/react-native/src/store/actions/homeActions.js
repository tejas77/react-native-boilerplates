import * as types from '../types';

export const incrementLoveReactNative = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({type: types.INCREMENT_LOVE_REACT_NATIVE, payload: {}});
    }, 500);
  };
};
