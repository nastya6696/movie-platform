import {useState} from "react";

import { LogoIcon} from "../../atoms";
import {Search} from "../Search";
import {Modal} from "../../modal";
import {MovieFormContent} from "../../modal/molecules";
import {ConfirmationModalContent, Header, MovieForm} from "../../modal/atoms";
import {ModalTypes} from "../../modal/types";

import styles from './styles.module.scss';

export const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const {ADD, CONFIRMATION} = ModalTypes;

  const handleAddClick = () => {
    setModalType(ADD);
    setIsOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalType(CONFIRMATION);
  }

  const handleCLose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={styles.banner}>
        <div className={styles.header}>
          <LogoIcon boldPart="netflix" thinPart="roulette"/>
          <button onClick={handleAddClick} className={styles.addMovieBtn}>+ ADD MOVIE</button>
        </div>
        <div className={styles.searchArea}>
          <h1 className={styles.title}>FIND YOUR MOVIE</h1>
          <Search />
        </div>
      </div>
      <Modal isOpen={isOpen} handleCLose={handleCLose} type={modalType}>
        <MovieFormContent>
          {modalType === CONFIRMATION ? <ConfirmationModalContent />
            : <>
              <Header title={`ADD MOVIE`} />
              <MovieForm handleSubmit={handleSubmit} handleReset={handleCLose}/>
            </>
          }
        </MovieFormContent>
      </Modal>
    </>
  )
}
