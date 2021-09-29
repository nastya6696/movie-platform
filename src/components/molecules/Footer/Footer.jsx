import styles from './styles.module.scss';
import {LogoIcon} from "../../atoms";

export const Footer = () => (
  <div className={styles.footer}>
    <LogoIcon boldPart="netflix" thinPart="roulette"/>
  </div>
)
