import { LogoIcon} from "../../atoms";
import {Search} from "../Search";

import styles from './styles.module.scss';

export const Banner = () => (
  <div className={styles.banner}>
    <div className={styles.header}>
      <LogoIcon boldPart="netflix" thinPart="roulette"/>
      <button className={styles.addMovieBtn}>+ ADD MOVIE</button>
    </div>
    <div className={styles.searchArea}>
      <h1 className={styles.title}>FIND YOUR MOVIE</h1>
      <Search />
    </div>
  </div>
)
