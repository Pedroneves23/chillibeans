import { useEffect } from 'react';
import SectionTitle from '../../components/SectionTitle';
import ProductGrid from '../../components/ProductGrid';
import { getBestSellers } from '../../data/products';
import styles from './BestSellers.module.css';

export default function BestSellers() {
  const bestSellers = getBestSellers();

  useEffect(() => {
    document.title = 'Mais Vendidos — CHILLI BEANS';
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className="container">
          <SectionTitle
            subtitle="PREFERÊNCIA ABSOLUTA"
            title="OS MAIS VENDIDOS"
            description="Ícones de estilo aprovados por milhares de clientes exigentes. Os modelos que mais definem a identidade Chilli Beans."
          />
        </div>
      </div>

      <div className={`container ${styles.gridContainer}`}>
        <ProductGrid products={bestSellers} />
      </div>
    </div>
  );
}
