import {Banner, Movies, Footer, MovieDetails} from "./components/molecules";

import styles from './styles.module.scss';
import {createContext} from "react";
import {usePageStateHandler} from "./hooks/usePageStateHandler";

export const MovieCardContext = createContext({
  handleCardClick: () => {}
});

export const App = () => {
  const {isBannerOpened, selectedMovie, movies, handleMovieDetailsOpen, handleSearchBtnClick} = usePageStateHandler();
  console.log('MOVIES', movies);
  return (
    <MovieCardContext.Provider value={{handleCardClick: handleMovieDetailsOpen}} >
      <div className={styles.mainPage}>
        {isBannerOpened ? <Banner /> : <MovieDetails details={selectedMovie} handleSearchBtnClick={handleSearchBtnClick} />}
        <Movies movies={[...Object.values(movies.moviesList)]} />
        <Footer />
      </div>
    </MovieCardContext.Provider>
  )
};
