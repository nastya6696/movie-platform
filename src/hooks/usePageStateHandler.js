import {useEffect, useState} from "react";
import {getMoviesRequest} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {moviesList} from "../redux/reducers/moviesList";
import {useHistory} from "react-router-dom";

export const usePageStateHandler = () => {
  const [isBannerOpened, setIsBannerOpened] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState({});
  const dispatch = useDispatch();
  const movies = useSelector(moviesList).moviesList;
  const history = useHistory();

  useEffect(() => {
    dispatch(getMoviesRequest());
  }, [dispatch]);

  const handleMovieDetailsOpen = (e) => {
    setIsBannerOpened(false);
    const movie = movies.find(movie => movie.title === e.currentTarget.dataset.title);
    setSelectedMovie(movie);
    history.push(`/movie/${movie.id}`);
  };

  const handleSearchBtnClick = () => {
    setSelectedMovie({});
    setIsBannerOpened(true);
    history.push('/search');
  }

  return {isBannerOpened, selectedMovie, movies, handleSearchBtnClick, handleMovieDetailsOpen};
}
