import {ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE, FILTER_MOVIES, GET_MOVIES, SORT_MOVIES} from "./actionTypes";

const getMovies = (data) => {
  return {type: GET_MOVIES, payload: data};
};

const editMovie = (data) => {
  return {type: EDIT_MOVIE, payload: data};
}

const deleteMovie = (data) => {
  return {type: DELETE_MOVIE, payload: data};
}

const addMovie = (data) => {
  return {type: ADD_MOVIE, payload: data};
}

const sortMovies = (data) => {
  return {type: SORT_MOVIES, payload: data};
}

export const getMoviesRequest = () => async (dispatch) => {
  const response = await fetch('http://localhost:4000/movies', {method: 'GET'});

  if(response.ok) {
    const data = await response.json();
    dispatch(getMovies(data.data));
  }
}

export const editMovieRequest = (updatedMovie) => async (dispatch) => {
  const response = await fetch('http://localhost:4000/movies', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedMovie)
  });

  if(response.ok) {
    const data = await response.json();
    dispatch(editMovie(data));
  }
}

export const deleteMovieRequest = (movie) => async (dispatch) => {
  const response = await fetch(`http://localhost:4000/movies/${movie.id}`, {
    method: 'DELETE'
  });

  if(response.ok) {
    dispatch(deleteMovie(movie.id));
  }
}

export const addMovieRequest = (movie) => async (dispatch) => {
  const response = await fetch('http://localhost:4000/movies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
  });

  if(response.ok) {
    const data = await response.json();
    dispatch(addMovie(data));
  }
}

export const sortMoviesRequest = (searchParam, sortOrder = 'desc') => async (dispatch) => {
  const response = await fetch(`http://localhost:4000/movies?sortBy=${searchParam}&sortOrder=${sortOrder}`, {
    method: 'GET'
  });

  if(response.ok) {
    const data = await response.json();
    dispatch(sortMovies(data.data));
  }
}

export const filterMovies = (filterOption) => async (dispatch) => {
  filterOption === 'All' ? dispatch(getMoviesRequest()) : dispatch({type: FILTER_MOVIES, payload: filterOption});
}

