import {HomeState, HomeActions, HOME_ACTION_TYPES} from '../types';

const initialState: HomeState = {
  projectType: 'React-Native Typescript',
  loveReactNative: 1,
};

export default (state: HomeState = initialState, action: HomeActions) => {
  switch (action.type) {
    case HOME_ACTION_TYPES.INCREMENT_LOVE_REACT_NATIVE:
      return {
        ...state,
        loveReactNative: state.loveReactNative + 1,
      };
    default:
      return state;
  }
};
