import {LogoIcon} from "../LogoIcon";

import styles from './styles.module.scss'

export const Header = ({btnClickHandler, btnInfo }) => {
  const {name = '', type = 'addMovie'} = btnInfo;
  return (
    <div className={styles.header}>
      <LogoIcon boldPart="netflix" thinPart="roulette"/>
      <button onClick={btnClickHandler} className={styles[type]}>{name}</button>
    </div>
  )
}
