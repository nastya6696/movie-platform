import styles from './styles.module.scss';
import {Button} from "../../atoms";
import {useState} from "react";

export const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <>
      <input
        type="text"
        className={styles.searchBar}
        placeholder="What do you want to watch?"
        name="search"
        value={searchValue}
        onChange={handleChange}
      />
      <Button name="SEARCH"/>
    </>
  );
};
