import {Banner, Movies, Footer, MovieDetails} from "./components/molecules";

import styles from './styles.module.scss';
import {createContext} from "react";
import {usePageStateHandler} from "./hooks/usePageStateHandler";
import {Route, Switch, Redirect} from "react-router-dom";
import {NoMatchPage} from "./components/atoms";

export const MovieCardContext = createContext({
  handleCardClick: () => {}
});

export const App = () => {
  const { selectedMovie, movies, handleMovieDetailsOpen, handleSearchBtnClick} = usePageStateHandler();

  return (
    <MovieCardContext.Provider value={{handleCardClick: handleMovieDetailsOpen}} >
        <div className={styles.mainPage}>
          <Switch>
            <Route path='/search' component={Banner} />
            <Route path='/movie/:movieId'>
              <MovieDetails details={selectedMovie} handleSearchBtnClick={handleSearchBtnClick} />
            </Route>
            <Route exact path='/'>
              <Redirect to='/search' />
            </Route>
            <Route component={NoMatchPage} />
          </Switch>
          {/*{isBannerOpened ? <Banner /> : <MovieDetails details={selectedMovie} handleSearchBtnClick={handleSearchBtnClick} />}*/}
          <Movies movies={movies} />
          <Footer />
        </div>
    </MovieCardContext.Provider>
  )
};

