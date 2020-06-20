import * as types from '../types';

const initialState = {
  projectType: 'React-Native',
  loveReactNative: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT_LOVE_REACT_NATIVE:
      return {
        ...state,
        loveReactNative: state.loveReactNative + 1,
      };
    default:
      return state;
  }
};
