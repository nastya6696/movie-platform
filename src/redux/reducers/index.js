import { combineReducers } from 'redux';

import {moviesList} from "./moviesList";

export const mainReducer = combineReducers({
  moviesList
});
