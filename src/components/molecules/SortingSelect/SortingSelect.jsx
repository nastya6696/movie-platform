import Select from "react-select";
import {SortingOptions} from "./mocks";

import styles from './styles.module.scss';
import {useEffect, useRef} from "react";
import {useDispatch} from "react-redux";
import {sortMoviesRequest} from "../../../redux/actions";
import {useHistory} from "react-router-dom";
import withRouter from "react-router-dom/es/withRouter";

export const SortingSelect = withRouter(() => {
  const dispatch = useDispatch();
  const history = useHistory();
  let selectedOption = useRef(SortingOptions[2]);

  const handleSelectChange = (selectedOptionFromElem) => {
    selectedOption = selectedOptionFromElem;
    history.push(`/search?sortBy=${selectedOption.value}`);
  }

  useEffect(() => {
    if(history.location.search.includes('sortBy')) {
      const selectedOptionFromUrl = history.location.search.split('=')[1];
      dispatch(sortMoviesRequest(selectedOptionFromUrl));
      selectedOption.current = SortingOptions.find(option => option.value === selectedOptionFromUrl);
    }
  },[dispatch, history.location.search]);

  return (
    <div className={styles.sortingSelect}>
      <span>SORT BY</span>
      <Select ref={selectedOption} value={selectedOption.current} options={SortingOptions} onChange={handleSelectChange} />
    </div>
  )
});
