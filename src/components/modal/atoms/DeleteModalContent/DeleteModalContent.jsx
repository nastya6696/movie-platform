import {Button} from "../../../atoms";

import styles from './styles.module.scss';

export const DeleteModalContent = () => (
  <div className={styles.deleteContent}>
    <p>Are you sure you want to delete this movie?</p>
    <Button name="CONFIRM" />
  </div>
)
