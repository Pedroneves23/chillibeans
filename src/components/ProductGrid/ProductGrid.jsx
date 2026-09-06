import ProductCard from '../ProductCard';
import styles from './ProductGrid.module.css';

export default function ProductGrid({ products, columns = 4 }) {
  if (!products || products.length === 0) {
    return (
      <div className={styles.empty}>
        <p className={styles.emptyTitle}>Nenhum produto encontrado</p>
        <p className={styles.emptyText}>
          Tente ajustar seus filtros ou explore outras categorias.
        </p>
      </div>
    );
  }

  return (
    <div className={`${styles.grid} ${styles[`cols${columns}`]}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
