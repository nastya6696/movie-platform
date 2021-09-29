import {ResultsFilter} from "../ResultsFilter";
import {SortingSelect} from "../SortingSelect";

import styles from './styles.module.scss';
import {MoviesList} from "../MoviesList";

export const Movies = () => (
  <div className={styles.movies}>
    <div className={styles.content}>
      <div className={styles.sortingMethods}>
        <ResultsFilter/>
        <SortingSelect />
      </div>
      <p className={styles.resultText}><strong>39</strong> movies found</p>
      <MoviesList />
    </div>
  </div>
)
