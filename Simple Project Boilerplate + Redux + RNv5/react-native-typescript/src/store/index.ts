import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import {AppState} from './types';
import homeReducer from './reducers/homeReducer';

const rootReducer = combineReducers<AppState>({
  home: homeReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
