import {Banner, Movies, Footer} from "./components/molecules";
import {Modal} from "./components/modal";

import styles from './styles.module.scss';
import {createContext, useState} from "react";
import {MovieForm, Header, DeleteModalContent, ConfirmationModalContent} from "./components/modal/atoms";
import {MovieFormContent} from "./components/modal/molecules";
import {MoviesData} from "./components/molecules/MoviesList/mocks";
import {ModalTypes} from "./components/modal/types";

export const MovieActionContext = createContext({handlerMovieAction: () => {}});

export const initialFormDataState = {
  title: '',
  url: '',
  releaseDate: '',
  rating: '',
  genre: [],
  runtime: '',
  overview: ''
};

export const App = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedMovie, setSelectedMovie] = useState({});

  const {ADD, EDIT, CONFIRMATION, DELETE} = ModalTypes;

  const handleAddClick = () => {
    setModalType(ADD);
    setIsOpen(true);
  };

  const handleMovieActionClick = (e) => {
    e.stopPropagation();
    setModalType(e.target.innerHTML.toLowerCase());
    setIsOpen(true);
    if(modalType === EDIT) {
      const movie = MoviesData.find(movie => movie.title === e.target.parentElement.dataset.title);
      setSelectedMovie({
        ...initialFormDataState,
        title: movie.title,
        overview: `${movie.type} ${movie.year}`
      })
    }
  }

  const handleCLose = () => {
    setIsOpen(false);
    setSelectedMovie(initialFormDataState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalType(CONFIRMATION);
    setSelectedMovie(initialFormDataState);
  }

  return (
    <>
      <MovieActionContext.Provider value={{handlerMovieAction: handleMovieActionClick}}>
        <div className={styles.mainPage}>
          <Banner handleClick={handleAddClick}/>
          <Movies movies={MoviesData} />
          <Footer />
        </div>
      </MovieActionContext.Provider>
      <Modal isOpen={isOpen} handleCLose={handleCLose} type={modalType}>
        <MovieFormContent>
          {modalType === CONFIRMATION ? <ConfirmationModalContent />
            : <>
              <Header title={`${modalType.toUpperCase()} MOVIE`} />
              {
                modalType === DELETE ? <DeleteModalContent /> :
                  <MovieForm selectedMovie={selectedMovie} handleSubmit={handleSubmit}/>
              }
            </>
          }
        </MovieFormContent>
      </Modal>
    </>
  )
}
