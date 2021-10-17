import {Banner, Movies, Footer} from "./components/molecules";
import {MoviesData} from "./components/molecules/MoviesList/mocks";

import styles from './styles.module.scss';

export const initialFormDataState = {
  title: '',
  url: '',
  releaseDate: '',
  rating: '',
  genre: [],
  runtime: '',
  overview: ''
};

export const App = () => (
  <div className={styles.mainPage}>
    <Banner />
    <Movies movies={MoviesData} />
    <Footer />
  </div>
)
