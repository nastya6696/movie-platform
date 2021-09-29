import styles from './styles.module.scss';
import {Button} from "../../atoms";

export const Search = () => (
  <>
    <input
      type="text"
      className={styles.searchBar}
      placeholder="What do you want to watch?"
      name="s"
    />
    <Button name="SEARCH"/>
  </>
)
