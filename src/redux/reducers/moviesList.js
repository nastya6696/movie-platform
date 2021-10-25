import {GET_MOVIES} from "../actions/actionTypes";

export const moviesList = (state = [], action) => {
  console.log('ACTION', action);
  switch (action?.type) {
    case GET_MOVIES:
      return {...state, ...action.payload};
    default:
      return state;
  }
}
