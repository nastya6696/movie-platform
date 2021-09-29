import styles from './styles.module.scss';

export const Button = ({name}) => (
  <button className={styles.btnBasic}>{name}</button>
)
