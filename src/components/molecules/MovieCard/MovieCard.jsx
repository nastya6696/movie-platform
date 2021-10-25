import {useContext, useState} from "react";

import {MovieAction} from "../../atoms/MovieActions";
import {MovieFormContent} from "../../modal/molecules";
import {ConfirmationModalContent, DeleteModalContent, HeaderModal, MovieForm} from "../../modal/atoms";
import {Modal} from "../../modal";
import {ModalTypes} from "../../modal/types";
import {MovieCardContext} from "../../../App";

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
  const { handleCardClick } = useContext(MovieCardContext);

  const [isActionsOpen, setIsActionsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const handleMoreBtnClick = () => {setIsActionsOpen(true)}

  const handleMovieActionClick = (e) => {
    e.stopPropagation();
    setModalType(e.target.innerHTML.toLowerCase());
    setIsModalOpen(true);
    setIsActionsOpen(false);
  }

  const handleCloseActions = (e) => {
    e.stopPropagation();
    setIsActionsOpen(false);
  }

  const { CONFIRMATION, DELETE } = ModalTypes;

  const handleModalCLose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalType(CONFIRMATION);
  }

  return (
    <>
      <div className={styles.movieCard}>
        <div className={styles.imageContainer} data-title={title} onClick={handleCardClick}>
          <img alt={title} src={ImgSrc[imgName]} />
          <button className={styles.movieActions} onClick={handleMoreBtnClick}>...</button>
          <MovieAction
            title={title}
            isOpen={isActionsOpen}
            handleClose={handleCloseActions}
            handleActionClick={handleMovieActionClick}
          />
        </div>
        <div className={styles.info}>
          <p>{title}</p>
          <p className={styles.year}>{year}</p>
        </div>
        <p className={styles.type}>{type}</p>
      </div>
      <Modal isOpen={isModalOpen} handleCLose={handleModalCLose} type={modalType}>
        <MovieFormContent>
          {modalType === CONFIRMATION ? <ConfirmationModalContent />
            : <>
              <HeaderModal title={`${modalType.toUpperCase()} MOVIE`} />
              {
                modalType === DELETE ? <DeleteModalContent /> :
                  <MovieForm selectedMovie={movie} handleSubmit={handleSubmit} handleReset={handleModalCLose}/>
              }
            </>
          }
        </MovieFormContent>
      </Modal>
    </>
  )
}
