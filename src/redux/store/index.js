import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {mainReducer} from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

export const store = createStore(
  mainReducer,
  enhancer
);
