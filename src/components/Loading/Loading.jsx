import styles from './Loading.module.css';

export default function Loading({ text = 'Carregando...' }) {
  return (
    <div className={styles.wrapper} role="status" aria-label={text}>
      <div className={styles.spinner}>
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
