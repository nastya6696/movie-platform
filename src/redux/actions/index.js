import {GET_MOVIES} from "./actionTypes";
import {MoviesData} from "../../components/molecules/MoviesList/mocks";

export const getMovies = () => ({type: GET_MOVIES, payload: MoviesData});

