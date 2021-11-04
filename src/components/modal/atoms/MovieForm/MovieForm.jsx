import {MovieTypes} from "../../../../assets/mocks";
import {Button} from "../../../atoms";

import styles from './styles.module.scss';
import {useEffect, useRef, useState} from "react";
import {Multiselect} from "multiselect-react-dropdown";
import {useDispatch} from "react-redux";
import {addMovieRequest, editMovieRequest} from "../../../../redux/actions";

const initialFormDataState = {
  title: '',
  poster_path: '',
  release_date: '',
  vote_average: 0,
  genres: [],
  runtime: 0,
  overview: ''
};

export const MovieForm = ({selectedMovie = initialFormDataState, handleSubmit, handleReset, actionType}) => {
  const [formData, setFormData] = useState(selectedMovie);
  const multiselectRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setFormData(selectedMovie);

    return () => setFormData(initialFormDataState);
  }, [selectedMovie]);

  const handleChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSelectAction = () => {
    setFormData(prevState => ({
      ...prevState,
      genres: multiselectRef.current.getSelectedItems()
    }))
  }

  const handleSubmitClick = (e) => {
    const updatedMovie = {...selectedMovie, ...formData};
    updatedMovie.vote_average = Number(updatedMovie.vote_average);
    updatedMovie.runtime = Number(updatedMovie.runtime);
    actionType === 'EDIT_MOVIE' ? dispatch(editMovieRequest(updatedMovie)) : dispatch(addMovieRequest(updatedMovie));
    handleSubmit(e);
  }

  return (
    <form className={styles.movieForm} onSubmit={handleSubmit} >
      <div className={styles.fieldsGroup}>
        <label>
          TITLE
          <input className={styles.bigInput} type="text" value={formData.title} onChange={handleChange} name="title" placeholder='Movie title'/>
        </label>
        <label>
          RELEASE DATE
          <input type="date" value={formData.release_date} onChange={handleChange} name="release_date" placeholder='Select Date'/>
        </label>
      </div>
      <div className={styles.fieldsGroup}>
        <label>
          MOVIE URL
          <input className={styles.bigInput} type="url" value={formData.poster_path} onChange={handleChange} name="poster_path" placeholder='https://'/>
        </label>
        <label>
          RATING
          <input type="text" value={formData.vote_average} onChange={handleChange} name="vote_average" placeholder='7.8'/>
        </label>
      </div>
      <div className={styles.fieldsGroup}>
        <label>
          GENRE
          <div className={styles.bigInput}>
            <Multiselect
              isObject={false}
              onRemove={handleSelectAction}
              onSelect={handleSelectAction}
              selectedValues={formData.genres}
              options={MovieTypes}
              placeholder=""
              showCheckbox
              ref={multiselectRef}
            />
          </div>
        </label>
        <label>
          RUNTIME
          <input type="text" value={formData.runtime} onChange={handleChange} name="runtime" placeholder='minutes'/>
        </label>
      </div>
      <label>
        OVERVIEW
        <textarea name="overview" value={formData.overview} onChange={handleChange} placeholder='Movie overview..' />
      </label>

      <div className={styles.btnGroup}>
        <Button handleClick={handleReset} name="RESET" />
        <Button handleClick={handleSubmitClick} name="SUBMIT" />
      </div>
    </form>
  )
}
