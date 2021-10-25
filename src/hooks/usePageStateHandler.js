import {useEffect, useState} from "react";
import {getMovies} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {moviesList} from "../redux/reducers/moviesList";

export const usePageStateHandler = () => {
  const [isBannerOpened, setIsBannerOpened] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Before dispatch action');
    dispatch(getMovies());
  }, []);

  const movies = useSelector(moviesList);

  const handleMovieDetailsOpen = (e) => {
    setIsBannerOpened(false);
    const movie = movies.find(movie => movie.title === e.currentTarget.dataset.title);
    setSelectedMovie(movie);
  };

  const handleSearchBtnClick = () => {
    setSelectedMovie({});
    setIsBannerOpened(true);
  }

  return {isBannerOpened, selectedMovie, movies, handleSearchBtnClick, handleMovieDetailsOpen};
}
