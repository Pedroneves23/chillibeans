import styles from './SectionTitle.module.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

export default function SectionTitle({
  title,
  subtitle,
  label,
  align = 'center',
  dark = false,
}) {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`${styles.wrapper} ${styles[align]} ${dark ? styles.dark : ''} animate-on-scroll`}
    >
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
