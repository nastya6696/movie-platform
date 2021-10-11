import {ErrorBoundary, MovieCard} from "../../atoms";

import styles from './styles.module.scss';

export const MoviesList = ({movies}) => {
  return (
    <div className={styles.moviesContainer}>
      {
        movies.map(movie =>
          <ErrorBoundary title={movie.title} key={movie.title}>
            <MovieCard movie={movie} />
          </ErrorBoundary>)
      }
    </div>
  )
};
