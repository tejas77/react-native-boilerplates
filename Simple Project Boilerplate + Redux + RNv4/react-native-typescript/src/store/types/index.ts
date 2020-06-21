import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';

// Home Reducer State
export type HomeState = {
  projectType: string;
  loveReactNative: number;
};
// Complete App State (All the Reducers)
export type AppState = {
  home: HomeState;
};

export enum HOME_ACTION_TYPES {
  INCREMENT_LOVE_REACT_NATIVE = 'INCREMENT_LOVE_REACT_NATIVE',
}

// Generic Redux Thunk Type for all redux-thunk using actions
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export type IncrementLoveReactNativeAction = {
  type: string;
  payload: object;
};

// Combine Home Actions with Union Type
export type HomeActions = IncrementLoveReactNativeAction;
