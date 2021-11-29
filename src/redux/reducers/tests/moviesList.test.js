import {moviesList} from "../moviesList";
import {ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE, GET_MOVIES} from "../../actions/actionTypes";

describe('should create tests for movieList reducer', () => {
  it('should return the initial state', () => {
    expect(moviesList(undefined, {type: 'NOT_EXISTING_TYPE'})).toEqual([])
  });

  it('should return movies list from GET_MOVIES action', () => {
    const payload = [
      {
        id: 1,
        title: 'Movie1'
      },
      {
        id: 2,
        title: 'Movie2'
      },
      {
        id: 3,
        title: 'Movie3'
      },
    ];

    expect(moviesList([], {type: GET_MOVIES, payload: payload})).toEqual(payload);
  });

  it('should return updated movies list after EDIT_MOVIE action', () => {
    const initialState = [
      {
        id: 1,
        title: 'Movie1'
      },
      {
        id: 2,
        title: 'Movie2'
      },
      {
        id: 3,
        title: 'Movie3'
      },
    ];

    const updatedMovie = {
      id: 2,
      title: "Updated Movie2"
    };

    const updatedMovieList = [...initialState];
    const index = initialState.findIndex(movie => movie.id === updatedMovie.id);
    updatedMovieList[index] = updatedMovie;

    expect(moviesList(initialState, {type: EDIT_MOVIE, payload: updatedMovie})).toEqual(updatedMovieList);
  });

  it('should return updated movies list after DELETE_MOVIE action', () => {
    const initialState = [
      {
        id: 1,
        title: 'Movie1'
      },
      {
        id: 2,
        title: 'Movie2'
      },
      {
        id: 3,
        title: 'Movie3'
      },
    ];

    expect(moviesList(initialState, {type: DELETE_MOVIE, payload: 2})).toEqual([...initialState.filter(
      movie => movie.id !== 2
    )]);
  });

  it('should return updated movies list after ADD_MOVIE action', () => {
    const initialState = [
      {
        id: 1,
        title: 'Movie1'
      },
      {
        id: 2,
        title: 'Movie2'
      },
      {
        id: 3,
        title: 'Movie3'
      },
    ];

    const newMovie = {
      id: 4,
      title: 'Movie4'
    }

    expect(moviesList(initialState, {type: ADD_MOVIE, payload: newMovie})).toEqual([...initialState, newMovie]);
  })

})
