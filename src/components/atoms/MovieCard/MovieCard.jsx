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

export const MovieCard = ({movie}) => {
  const {title, year, type, imgName} = movie;

  return (
    <div className={styles.movieCard}>
      <img alt={title} src={ImgSrc[imgName]} />
      <div className={styles.info}>
        <p>{title}</p>
        <p className={styles.year}>{year}</p>
      </div>
      <p className={styles.type}>{type}</p>
    </div>
  )
}
