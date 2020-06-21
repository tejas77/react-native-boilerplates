import {HOME_ACTION_TYPES, AppThunk} from '../types';

export const incrementLoveReactNative = (): AppThunk => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: HOME_ACTION_TYPES.INCREMENT_LOVE_REACT_NATIVE,
        payload: {},
      });
    }, 2000);
  };
};
