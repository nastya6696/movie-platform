import {Header} from "../../atoms";

import PulpFiction from '../../../assets/images/pulpFiction.png';
import BohemianRhapsody from '../../../assets/images/bohemianRhapsody.png';
import Avengers from '../../../assets/images/avengers.png';
import KillBill from '../../../assets/images/killBill.png';
import Inception from '../../../assets/images/inception.png';
import DogsReservoir from '../../../assets/images/dogsReservoir.png';

import styles from './styles.module.scss';

const ImgSrc = {
  PulpFiction,
  BohemianRhapsody,
  Avengers,
  KillBill,
  Inception,
  DogsReservoir
}

export const MovieDetails = ({details, handleSearchBtnClick}) => {
  const {title, year, type, imgName, overview, duration, rating} = details;

  return (
    <div className={styles.movieDetails}>
      <Header btnClickHandler={handleSearchBtnClick} btnInfo={{ type: 'search' }} />
      <div className={styles.container}>
        <img alt={title} src={ImgSrc[imgName]} />
        <div className={styles.details}>
          <h1 className={styles.title}>{title.toUpperCase()}</h1>
          <span className={styles.rating}>{rating}</span>
          <p className={styles.genres}>{type}</p>
          <div className={styles.releaseInfo}>
            <span>{year}</span>
            <span>{duration}</span>
          </div>
          <p className={styles.overview}>{overview}</p>
        </div>
      </div>
    </div>
  )
}
