import {MovieTypes} from "../../../../assets/mocks";
import {Button} from "../../../atoms";

import styles from './styles.module.scss';
import {useEffect, useState} from "react";
import {initialFormDataState} from "../../../../App";

export const MovieForm = ({selectedMovie = initialFormDataState, handleSubmit, handleReset}) => {
  const [formData, setFormData] = useState(selectedMovie);

  useEffect(() => {
    setFormData(selectedMovie)

    return () => setFormData(initialFormDataState);
  }, [selectedMovie]);

  const handleChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
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
          <input type="date" value={formData.releaseDate} onChange={handleChange} name="releaseDate" placeholder='Select Date'/>
        </label>
      </div>
      <div className={styles.fieldsGroup}>
        <label>
          MOVIE URL
          <input className={styles.bigInput} type="url" value={formData.url} onChange={handleChange} name="url" placeholder='https://'/>
        </label>
        <label>
          RATING
          <input type="text" value={formData.rating} onChange={handleChange} name="rating" placeholder='7.8'/>
        </label>
      </div>
      <div className={styles.fieldsGroup}>
        <label>
          GENRE
          <select className={styles.bigInput} size="1" name="genre" onChange={handleChange} multiple>
            {MovieTypes.map(type => <option key={type.toLowerCase()} value={type.toLowerCase()}>{type}</option>)}
          </select>
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
        <Button handleClick={handleSubmit} name="SUBMIT" />
      </div>
    </form>
  )
}
