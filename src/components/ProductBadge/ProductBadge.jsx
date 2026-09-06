import styles from './ProductBadge.module.css';

export default function ProductBadge({ type }) {
  const labels = {
    novo: 'Novo',
    maisVendido: 'Mais vendido',
    desconto: 'Oferta',
  };

  return (
    <span className={`${styles.badge} ${styles[type]}`}>
      {labels[type] || type}
    </span>
  );
}
