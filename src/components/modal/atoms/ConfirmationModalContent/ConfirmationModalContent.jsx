import CircleTickIcon from '../../../../assets/svg/circleTickIcon.svg';
import styles from './styles.module.scss';

export const ConfirmationModalContent = () => (
  <>
    <img className={styles.icon} src={CircleTickIcon} alt='circleTickIcon' />
    <h2 className={styles.title}>CONGRATULATIONS!</h2>
    <p className={styles.text}>The movie has been added to database successfully </p>
  </>
)
