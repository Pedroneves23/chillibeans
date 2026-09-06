import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useToast } from '../../contexts/ToastContext';
import ProductBadge from '../ProductBadge';
import { formatCurrency, formatInstallment } from '../../utils/formatCurrency';
import { getDiscountPercent } from '../../utils/helpers';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const { addToCart } = useCart();
  const { addToast } = useToast();

  const handleAddToCart = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      addToCart(product);
      addToast('Adicionado à sacola', {
        type: 'success',
        product: { nome: product.nome, imagem: product.imagem },
      });
    },
    [addToCart, addToast, product]
  );

  const discount = getDiscountPercent(product.preco, product.precoAnterior);
  const outOfStock = product.estoque === 0;

  const getBadgeType = () => {
    if (product.novo) return 'novo';
    if (product.maisVendido) return 'maisVendido';
    if (discount > 0) return 'desconto';
    return null;
  };

  const badgeType = getBadgeType();

  const currentImage =
    imgError
      ? null
      : isHovered && product.imagemHover
        ? product.imagemHover
        : product.imagem;

  return (
    <article
      className={`${styles.card} ${outOfStock ? styles.outOfStock : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/produto/${product.slug}`} className={styles.imageLink}>
        <div className={styles.imageWrapper}>
          {badgeType && <ProductBadge type={badgeType} />}
          {currentImage ? (
            <img
              src={currentImage}
              alt={product.nome}
              className={styles.image}
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className={styles.placeholder}>
              <span className={styles.placeholderText}>
                {product.nome.charAt(0)}
              </span>
            </div>
          )}
          {!outOfStock && (
            <button
              className={`${styles.addButton} ${isHovered ? styles.addButtonVisible : ''}`}
              onClick={handleAddToCart}
              aria-label={`Adicionar ${product.nome} à sacola`}
            >
              <ShoppingBag size={16} />
              <span>Adicionar à sacola</span>
            </button>
          )}
          {outOfStock && (
            <div className={styles.unavailable}>Indisponível</div>
          )}
        </div>
      </Link>

      <div className={styles.info}>
        <span className={styles.category}>{product.categoria}</span>
        <Link to={`/produto/${product.slug}`} className={styles.nameLink}>
          <h3 className={styles.name}>{product.nome}</h3>
        </Link>
        <div className={styles.pricing}>
          {product.precoAnterior && (
            <span className={styles.oldPrice}>
              {formatCurrency(product.precoAnterior)}
            </span>
          )}
          <span className={styles.price}>{formatCurrency(product.preco)}</span>
        </div>
        {product.parcelas > 1 && (
          <span className={styles.installment}>
            {formatInstallment(product.preco, product.parcelas)}
          </span>
        )}
      </div>
    </article>
  );
}
