import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  onClick,
  to,
  type = 'button',
  ariaLabel,
  className = '',
  ...props
}) {
  const normalizedSize = {
    small: 'sm',
    medium: 'md',
    large: 'lg',
  }[size] || size;

  const classes = [
    styles.button,
    styles[variant],
    styles[normalizedSize],
    fullWidth ? styles.fullWidth : '',
    loading ? styles.loading : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        onClick={onClick}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      aria-label={ariaLabel}
      {...props}
    >
      {loading ? <span className={styles.spinner} /> : children}
    </button>
  );
}
