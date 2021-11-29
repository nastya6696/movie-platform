import {createContext, useContext, useState} from "react";

import {MovieAction} from "../../atoms/MovieActions";
import {MovieFormContent} from "../../modal/molecules";
import {ConfirmationModalContent, DeleteModalContent, HeaderModal, MovieForm} from "../../modal/atoms";
import {Modal} from "../../modal";
import {ModalTypes} from "../../modal/types";
import {MovieCardContext} from "../../../App";

import styles from './styles.module.scss';
import {formatGenres, formatReleaseDate} from "../../../helpers";
import {deleteMovieRequest} from "../../../redux/actions";
import {useDispatch} from "react-redux";

export const DeleteModalContext = createContext({
  handleDeleteClick: () => {}
});

export const MovieCard = ({movie}) => {
  const {title, genres, poster_path, release_date} = movie;
  const { handleCardClick } = useContext(MovieCardContext);

  const [isActionsOpen, setIsActionsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const dispatch = useDispatch();

  const handleMoreBtnClick = (e) => {
    e.stopPropagation();
    setIsActionsOpen(true);
  }

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

  const handleSubmitForm = () => {
    setModalType(CONFIRMATION);
  }

  const handleDeleteMovie = () => {
    dispatch(deleteMovieRequest(movie));
    setModalType(CONFIRMATION);
  }

  return (
    <>
      <div className={styles.movieCard}>
        <div className={styles.imageContainer} data-title={title} onClick={handleCardClick}>
          <img alt={title} src={poster_path} />
          <button className={styles.movieActions} onClick={handleMoreBtnClick}>...</button>
          <MovieAction
            isOpen={isActionsOpen}
            handleClose={handleCloseActions}
            handleActionClick={handleMovieActionClick}
          />
        </div>
        <div className={styles.info}>
          <p>{title}</p>
          <p className={styles.year}>{formatReleaseDate(release_date)}</p>
        </div>
        <p className={styles.type}>{formatGenres(genres)}</p>
      </div>
      <Modal isOpen={isModalOpen} handleCLose={handleModalCLose} type={modalType}>
        <DeleteModalContext.Provider value={{handleDeleteClick: handleDeleteMovie}}>
          <MovieFormContent>
            {modalType === CONFIRMATION ? <ConfirmationModalContent />
              : <>
                <HeaderModal title={`${modalType.toUpperCase()} MOVIE`} />
                {
                  modalType === DELETE ? <DeleteModalContent /> :
                    <MovieForm
                      selectedMovie={movie}
                      handleSubmitForm={handleSubmitForm}
                      handleReset={handleModalCLose}
                      actionType='EDIT_MOVIE'
                    />
                }
              </>
            }
          </MovieFormContent>
        </DeleteModalContext.Provider>
      </Modal>
    </>
  )
}
