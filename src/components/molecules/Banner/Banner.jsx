import {useState} from "react";

import {Search} from "../Search";
import {Modal} from "../../modal";
import {Header} from "../../atoms";
import {MovieFormContent} from "../../modal/molecules";
import {ConfirmationModalContent, HeaderModal, MovieForm} from "../../modal/atoms";
import {ModalTypes} from "../../modal/types";

import styles from './styles.module.scss';

export const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const {ADD, CONFIRMATION} = ModalTypes;

  const handleAddClick = () => {
    setModalType(ADD);
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalType(CONFIRMATION);
  }

  const handleCLose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.banner}>
        <Header btnClickHandler={handleAddClick} btnInfo={{name: '+ ADD MOVIE', type: 'addMovie'}} />
        <div className={styles.searchArea}>
          <h1 className={styles.title}>FIND YOUR MOVIE</h1>
          <Search />
        </div>
      </div>
      <Modal isOpen={isModalOpen} handleCLose={handleCLose} type={modalType}>
        <MovieFormContent>
          {modalType === CONFIRMATION ? <ConfirmationModalContent />
            : <>
              <HeaderModal title={`ADD MOVIE`} />
              <MovieForm handleSubmit={handleSubmit} handleReset={handleCLose}/>
            </>
          }
        </MovieFormContent>
      </Modal>
    </>
  )
}
