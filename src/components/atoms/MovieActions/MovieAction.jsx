import CloseIcon from '../../../assets/svg/closeBtnPopup.svg';

import styles from './styles.module.scss';

const Actions = ['Edit', 'Delete']

export const MovieAction = ({isOpen, handleClose, handleActionClick}) => {
  if(!isOpen) return null;

  return (
    <>
      <ul className={styles.actions} onClick={handleActionClick} >
        <div onClick={handleClose}>
          <img src={CloseIcon} alt="closeIcon" className={styles.closeIcon}/>
        </div>
        {Actions.map(action => <li key={action}>{action}</li>)}
      </ul>
    </>
  )
}
