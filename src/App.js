import {Banner, Movies, Footer, MovieDetails} from "./components/molecules";
import {MoviesData} from "./components/molecules/MoviesList/mocks";

import styles from './styles.module.scss';
import {createContext} from "react";
import {usePageStateHandler} from "./hooks/usePageStateHandler";

export const MovieCardContext = createContext({
  handleCardClick: () => {}
});

export const App = () => {
  const {isBannerOpened, selectedMovie, handleMovieDetailsOpen, handleSearchBtnClick} = usePageStateHandler();

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
