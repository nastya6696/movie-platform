import PulpFiction from '../../../assets/images/pulpFiction.png';
import BohemianRhapsody from '../../../assets/images/bohemianRhapsody.png';
import Avengers from '../../../assets/images/avengers.png';
import KillBill from '../../../assets/images/killBill.png';
import Inception from '../../../assets/images/inception.png';
import DogsReservoir from '../../../assets/images/dogsReservoir.png';

import styles from './styles.module.scss';
import {useContext, useState} from "react";
import {MovieAction} from "../MovieActions";
import {MovieActionContext} from "../../../App";

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
  const {handlerMovieAction} = useContext(MovieActionContext)

  const [isActionsOpen, setIsActionsOpen] = useState(false);
  const handleClick = () => {setIsActionsOpen(true)}
  const handleCloseActions = (e) => {
    e.stopPropagation();
    setIsActionsOpen(false);
  }

  const handleMovieAction = (e) => {
    setIsActionsOpen(false);
    handlerMovieAction(e);
  }

  return (
      <div className={styles.movieCard}>
        <div className={styles.imageContainer} onClick={handleClick}>
          <img alt={title} src={ImgSrc[imgName]} />
          <MovieAction title={title} isOpen={isActionsOpen} handleClose={handleCloseActions} handleActionClick={handleMovieAction}/>
        </div>
        <div className={styles.info}>
          <p>{title}</p>
          <p className={styles.year}>{year}</p>
        </div>
        <p className={styles.type}>{type}</p>
      </div>
  )
}
