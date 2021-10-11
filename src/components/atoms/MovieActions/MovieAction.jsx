import CloseIcon from '../../../assets/svg/closeBtnPopup.svg';

import styles from './styles.module.scss';

const Actions = ['Edit', 'Delete']

export const MovieAction = ({isOpen, handleClose, handleActionClick, title}) => {
  if(!isOpen) return null;

  return (
    <>
      <ul className={styles.actions} data-title={title}>
        <div onClick={handleClose}>
          <img src={CloseIcon} alt="closeIcon" className={styles.closeIcon}/>
        </div>
        {Actions.map(action => <li key={action} onClick={handleActionClick}>{action}</li>)}
      </ul>
    </>
  )
}
