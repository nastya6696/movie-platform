import Select from "react-select";
import {SortingOptions} from "./mocks";

import styles from './styles.module.scss';
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {sortMoviesRequest} from "../../../redux/actions";
import {useHistory} from "react-router-dom";

export const SortingSelect = () => {
  const [selectedOption, setSelectedOption] = useState(SortingOptions[0]);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    history.push(`/search?sortBy=${selectedOption.value}`);
  }

  useEffect(() => {
    dispatch(sortMoviesRequest(selectedOption.value));
  },[selectedOption, dispatch]);

  return (
    <div className={styles.sortingSelect}>
      <span>SORT BY</span>
      <Select value={selectedOption} options={SortingOptions} onChange={handleSelectChange} />
    </div>
  )
};
