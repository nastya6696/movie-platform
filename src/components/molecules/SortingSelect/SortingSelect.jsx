import Select from "react-select";
import {SortingOptions} from "./mocks";

import styles from './styles.module.scss';

export const SortingSelect = () => (
  <div className={styles.sortingSelect}>
    <span>SORT BY</span>
    <Select value={SortingOptions[0]} options={SortingOptions} />
  </div>
)
