import ReactDOM from 'react-dom';

import closeBtnPopup from '../../assets/svg/closeBtnPopup.svg';
import styles from './styles.module.scss';
import classNames from "classnames";
import {ModalTypes} from "./types";

export const Modal = ({isOpen, children, handleCLose, type}) => {
  if(!isOpen) return null;
  const {CONFIRMATION, DELETE} = ModalTypes;

  return ReactDOM.createPortal(
    <>
      <div className={type === DELETE || type === CONFIRMATION ? classNames(styles.modal, styles.smallModal)
        : styles.modal}>
        <img onClick={handleCLose} className={styles.closeBtn} src={closeBtnPopup} alt='closeBtn'/>
        {children}
      </div>
      <div className={styles.overlayLayout} />
    </>,
    document.getElementById('portal')
  );
}
