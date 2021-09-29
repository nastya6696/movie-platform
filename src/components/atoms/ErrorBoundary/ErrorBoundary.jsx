import styles from './styles.module.scss';

export const ErrorBoundary = ({children, title}) => {
  const OopsMovieCard = () => (
    <div className={styles.errorCard}>
      <h2>Oops something went wrong!</h2>
      <p>Movie will apear later!</p>
    </div>
  )

  return <>{title ? children : <OopsMovieCard />}</>
}
