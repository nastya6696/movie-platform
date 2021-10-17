import styles from './styles.module.scss';

export const Button = ({name, handleClick}) => (
  <button className={styles.btnBasic} onClick={handleClick}>{name}</button>
)
