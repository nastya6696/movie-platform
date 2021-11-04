import {Header} from "../../atoms";

import styles from './styles.module.scss';
import {formatGenres, formatReleaseDate} from "../../../helpers";

export const MovieDetails = ({details, handleSearchBtnClick}) => {
  const {title, release_date, genres, poster_path, overview, runtime, vote_average} = details;

  return (
    <div className={styles.movieDetails}>
      <Header btnClickHandler={handleSearchBtnClick} btnInfo={{ type: 'search' }} />
      <div className={styles.container}>
        <img className={styles.img} alt={title} src={poster_path} />
        <div className={styles.details}>
          <h1 className={styles.title}>{title.toUpperCase()}</h1>
          <span className={styles.rating}>{vote_average}</span>
          <p className={styles.genres}>{formatGenres(genres)}</p>
          <div className={styles.releaseInfo}>
            <span>{formatReleaseDate(release_date)}</span>
            <span>{runtime}</span>
          </div>
          <p className={styles.overview}>{overview}</p>
        </div>
      </div>
    </div>
  )
}
