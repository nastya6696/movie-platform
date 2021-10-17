import {Banner, Movies, Footer, MovieDetails} from "./components/molecules";
import {MoviesData} from "./components/molecules/MoviesList/mocks";

import styles from './styles.module.scss';
import {createContext, useCallback, useState} from "react";

export const initialFormDataState = {
  title: '',
  url: '',
  releaseDate: '',
  rating: '',
  genre: [],
  runtime: '',
  overview: ''
};

export const MovieCardContext = createContext({
  handleCardClick: () => {}
});

export const App = () => {
  const [isBannerOpened, setIsBannerOpened] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState({});

  const handleMovieDetailsOpen = useCallback((e) => {
    setIsBannerOpened(false);
    const movie = MoviesData.find(movie => movie.title === e.currentTarget.dataset.title);
    setSelectedMovie(movie);
  }, [selectedMovie.title]);

  const handleSearchBtnClick = () => {
    setSelectedMovie({});
    setIsBannerOpened(true);
  }

  return (
    <MovieCardContext.Provider value={{handleCardClick: handleMovieDetailsOpen}} >
      <div className={styles.mainPage}>
        {isBannerOpened ? <Banner /> : <MovieDetails details={selectedMovie} handleSearchBtnClick={handleSearchBtnClick} />}
        <Movies movies={MoviesData} />
        <Footer />
      </div>
    </MovieCardContext.Provider>
  )
};
