import PropTypes from 'prop-types';

import styles from './styles.module.scss';

export const LogoIcon = ({boldPart, thinPart}) => (
  <div className={styles.logoText}>
    <strong className={styles.boldText}>{boldPart}</strong>{thinPart}
  </div>
)

LogoIcon.propTypes = {
  boldPart: PropTypes.string.isRequired,
  thinPart: PropTypes.string.isRequired
}

