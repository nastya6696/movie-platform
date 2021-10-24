import {useState} from "react";
import {MoviesData} from "../components/molecules/MoviesList/mocks";

export const usePageStateHandler = () => {
  const [isBannerOpened, setIsBannerOpened] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState({});

  const handleMovieDetailsOpen = (e) => {
    setIsBannerOpened(false);
    const movie = MoviesData.find(movie => movie.title === e.currentTarget.dataset.title);
    setSelectedMovie(movie);
  };

  const handleSearchBtnClick = () => {
    setSelectedMovie({});
    setIsBannerOpened(true);
  }

  return {isBannerOpened, selectedMovie, handleSearchBtnClick, handleMovieDetailsOpen};
}
