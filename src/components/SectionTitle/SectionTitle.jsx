import styles from './SectionTitle.module.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

export default function SectionTitle({
  title,
  subtitle,
  label,
  description,
  align = 'center',
  dark = false,
}) {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`${styles.wrapper} ${styles[align]} ${dark ? styles.dark : ''} animate-on-scroll`}
    >
      {(label || subtitle) && <span className={styles.label}>{label || subtitle}</span>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.subtitle}>{description}</p>}
    </div>
  );
}
