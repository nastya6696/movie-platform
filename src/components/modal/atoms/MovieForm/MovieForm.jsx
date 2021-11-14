import {MovieTypes} from "../../../../assets/mocks";
import {Button} from "../../../atoms";

import styles from './styles.module.scss';
import {Multiselect} from "multiselect-react-dropdown";
import {useDispatch} from "react-redux";
import {addMovieRequest, editMovieRequest} from "../../../../redux/actions";

import {useFormik} from "formik";
import * as Yup from "yup";

const initialFormDataState = {
  title: '',
  poster_path: '',
  release_date: '',
  vote_average: 0,
  genres: [],
  runtime: 0,
  overview: ''
};

export const MovieForm = ({selectedMovie = initialFormDataState, handleSubmitForm, handleReset, actionType}) => {
  const dispatch = useDispatch();

  const {handleSubmit, handleChange, values, errors, touched, handleBlur} = useFormik({
    initialValues: selectedMovie,
    validationSchema: Yup.object({
      title: Yup.string().required(`'Title' is required`),
      poster_path: Yup.string().required(`'Url' is required`),
      runtime: Yup.number().min(1).required(`'Runtime' is required`),
      overview: Yup.string().required(`'Overview' is required`),
      //genres: Yup.array().min(1).required(`'Genres' is required`),
    }),
    onSubmit: () => {
      const updatedMovie = {...selectedMovie, ...values};
      updatedMovie.vote_average = Number(updatedMovie.vote_average);
      updatedMovie.runtime = Number(updatedMovie.runtime);
      actionType === 'EDIT_MOVIE' ? dispatch(editMovieRequest(updatedMovie)) : dispatch(addMovieRequest(updatedMovie));
      handleSubmitForm();
    }
  });

  return (
        <form className={styles.movieForm} onSubmit={handleSubmit} >
          <div className={styles.fieldsGroup}>
            <label>
              TITLE
              <input className={styles.bigInput} type="text" value={values.title} onChange={handleChange} onBlur={handleBlur} name="title" placeholder='Movie title'/>
              {errors.title && touched.title && <div>{errors.title}</div>}
            </label>
            <label>
              RELEASE DATE
              <input type="date" value={values.release_date} onChange={handleChange} name="release_date" placeholder='Select Date'/>
            </label>
          </div>
          <div className={styles.fieldsGroup}>
            <label>
              MOVIE URL
              <input className={styles.bigInput} type="url" value={values.poster_path} onChange={handleChange} name="poster_path" placeholder='https://'/>
              {errors.poster_path}
            </label>
            <label>
              RATING
              <input type="text" value={values.vote_average} onChange={handleChange} name="vote_average" placeholder='7.8'/>
            </label>
          </div>
          <div className={styles.fieldsGroup}>
            <label>
              GENRE
              <div className={styles.bigInput}>
                <Multiselect
                  isObject={false}
                  selectedValues={values.genres}
                  options={MovieTypes}
                  placeholder=""
                  showCheckbox
                />
              </div>
              {errors.genres}
            </label>
            <label>
              RUNTIME
              <input type="text" value={values.runtime} onChange={handleChange} name="runtime" placeholder='minutes'/>
              {errors.runtime}
            </label>
          </div>
          <label>
            OVERVIEW
            <textarea name="overview" value={values.overview} onChange={handleChange} placeholder='Movie overview..' />
            {errors.overview}
          </label>

          <div className={styles.btnGroup}>
            <Button handleClick={handleReset} name="RESET" />
            <Button handleClick={handleSubmit} name="SUBMIT" />
          </div>
        </form>
  )
}
