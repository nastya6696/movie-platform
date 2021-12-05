import {ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE, FILTER_MOVIES, GET_MOVIES, SORT_MOVIES} from "../actions/actionTypes";

export const moviesList = (state = [], action) => {
  console.log('ACTION', action);
  switch (action?.type) {
    case GET_MOVIES:
      return [...action.payload];
    case EDIT_MOVIE:
      const newState = [...Object.values(state)];
      const index = newState.findIndex(movie => movie.id === action.payload.id);
      newState[index] = action.payload;
      return newState;
    case DELETE_MOVIE:
      return [...Object.values(state).filter(movie => movie.id !== action.payload)];
    case ADD_MOVIE:
      return [...state, action.payload];
    case SORT_MOVIES:
      return [...action.payload];
    case FILTER_MOVIES:
      return [...action.payload];
    default:
      return state;
  }
}
