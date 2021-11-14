import {Button} from "../../../atoms";

import styles from './styles.module.scss';
import {useContext} from "react";
import {DeleteModalContext} from "../../../molecules/MovieCard/MovieCard";

export const DeleteModalContent = () => {
  const {handleDeleteClick} = useContext(DeleteModalContext);

  return (
    <div className={styles.deleteContent}>
      <p>Are you sure you want to delete this movie?</p>
      <Button name="CONFIRM" handleClick={handleDeleteClick}/>
    </div>
  )
};
