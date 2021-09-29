import {Banner, Movies, Footer} from "./components/molecules";

import styles from './styles.module.scss';

export const App = () => (
  <div className={styles.mainPage}>
    <Banner />
    <Movies />
    <Footer />
  </div>
)
