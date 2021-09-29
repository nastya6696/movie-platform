import {ErrorBoundary, MovieCard} from "../../atoms";
import {Movies} from "./mocks";

import styles from './styles.module.scss';

export const MoviesList = () => (
  <div className={styles.moviesContainer}>
    {
      Movies.map(movie =>
        <ErrorBoundary title={movie.title} key={movie.title}>
          <MovieCard movie={movie}/>
        </ErrorBoundary>)
    }
  </div>
)
