import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, Truck, RotateCcw, Package, Star, ArrowLeft, Check } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../../data/products';
import { useCart } from '../../contexts/CartContext';
import { useToast } from '../../contexts/ToastContext';
import { formatCurrency, formatInstallment } from '../../utils/formatCurrency';
import { getDiscountPercent } from '../../utils/helpers';
import Button from '../../components/Button';
import ProductGrid from '../../components/ProductGrid';
import SectionTitle from '../../components/SectionTitle';
import styles from './Product.module.css';

export default function Product() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToast } = useToast();

  const product = getProductBySlug(slug);

  const [activeImage, setActiveImage] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product) {
      document.title = `${product.nome} — CHILLI BEANS`;
      setActiveImage(product.imagem);
      setSelectedColor(product.corSelecionada || (product.cores && product.cores[0]) || '');
      setQuantity(1);
      window.scrollTo(0, 0);
    }
  }, [slug, product]);

  if (!product) {
    return (
      <div className={`container ${styles.notFound}`}>
        <h2>Produto não encontrado</h2>
        <p>O modelo que você está procurando não existe ou foi descontinuado.</p>
        <Button to="/catalogo" variant="primary">Voltar ao Catálogo</Button>
      </div>
    );
  }

  const discount = getDiscountPercent(product.preco, product.precoAnterior);
  const related = getRelatedProducts(product, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor);
    addToast('Adicionado à sacola com sucesso!', {
      type: 'success',
      product: { nome: product.nome, imagem: product.imagem },
    });
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedColor);
    navigate('/checkout');
  };

  return (
    <div className={styles.productPage}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumbBar}>
        <div className={`container ${styles.breadcrumb}`}>
          <Link to="/">Início</Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <Link to="/catalogo">Catálogo</Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span className={styles.breadcrumbCurrent}>{product.nome}</span>
        </div>
      </div>

      <div className={`container ${styles.mainContent}`}>
        {/* Gallery */}
        <div className={styles.gallery}>
          <div className={styles.mainImageWrapper}>
            <img
              src={activeImage}
              alt={product.nome}
              className={styles.mainImage}
            />
            {discount > 0 && (
              <span className={styles.discountBadge}>-{discount}% OFF</span>
            )}
          </div>
          {product.imagemHover && (
            <div className={styles.thumbnails}>
              <button
                className={`${styles.thumbBtn} ${activeImage === product.imagem ? styles.thumbActive : ''}`}
                onClick={() => setActiveImage(product.imagem)}
              >
                <img src={product.imagem} alt={`${product.nome} visão 1`} />
              </button>
              <button
                className={`${styles.thumbBtn} ${activeImage === product.imagemHover ? styles.thumbActive : ''}`}
                onClick={() => setActiveImage(product.imagemHover)}
              >
                <img src={product.imagemHover} alt={`${product.nome} visão 2`} />
              </button>
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className={styles.info}>
          <div className={styles.metaRow}>
            <span className={styles.categoryBadge}>{product.categoria}</span>
            <span className={styles.collectionBadge}>{product.colecao}</span>
          </div>

          <h1 className={styles.title}>{product.nome}</h1>

          {/* Rating */}
          <div className={styles.ratingRow}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill={i < Math.floor(product.avaliacao) ? '#C8102E' : 'none'}
                  color="#C8102E"
                />
              ))}
            </div>
            <span className={styles.ratingScore}>{product.avaliacao}</span>
            <span className={styles.ratingCount}>({product.avaliacoes} avaliações)</span>
          </div>

          {/* Price */}
          <div className={styles.priceContainer}>
            <div className={styles.priceRow}>
              <span className={styles.currentPrice}>{formatCurrency(product.preco)}</span>
              {product.precoAnterior && (
                <span className={styles.oldPrice}>{formatCurrency(product.precoAnterior)}</span>
              )}
            </div>
            <p className={styles.installment}>
              {formatInstallment(product.preco, product.parcelas)}
            </p>
          </div>

          <p className={styles.description}>{product.descricao}</p>

          {/* Color Selection */}
          {product.cores && product.cores.length > 0 && (
            <div className={styles.sectionBlock}>
              <label className={styles.sectionLabel}>
                Cor da Armação: <strong>{selectedColor}</strong>
              </label>
              <div className={styles.colorsList}>
                {product.cores.map((cor) => (
                  <button
                    key={cor}
                    type="button"
                    className={`${styles.colorChip} ${selectedColor === cor ? styles.colorActive : ''}`}
                    onClick={() => setSelectedColor(cor)}
                  >
                    {selectedColor === cor && <Check size={14} className={styles.checkIcon} />}
                    {cor}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity & Actions */}
          <div className={styles.actionsBlock}>
            <div className={styles.quantityControl}>
              <button
                className={styles.qtyBtn}
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                -
              </button>
              <span className={styles.qtyValue}>{quantity}</span>
              <button
                className={styles.qtyBtn}
                onClick={() => setQuantity((q) => Math.min(product.estoque, q + 1))}
              >
                +
              </button>
            </div>

            <div className={styles.ctaButtons}>
              <Button
                variant="primary"
                size="large"
                fullWidth
                onClick={handleAddToCart}
              >
                ADICIONAR À SACOLA
              </Button>
              <Button
                variant="outline"
                size="large"
                fullWidth
                onClick={handleBuyNow}
              >
                COMPRAR AGORA
              </Button>
            </div>
          </div>

          {/* Guarantees & Features */}
          <div className={styles.featuresList}>
            <div className={styles.featureItem}>
              <Truck size={20} className={styles.featureIcon} />
              <div>
                <strong>Envio Rápido para Todo o Brasil</strong>
                <p>Receba com código de rastreamento em embalagem rígida protetora.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <ShieldCheck size={20} className={styles.featureIcon} />
              <div>
                <strong>Proteção UV400 Máxima</strong>
                <p>Bloqueio 100% dos raios UVA e UVB com certificado de conformidade.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <RotateCcw size={20} className={styles.featureIcon} />
              <div>
                <strong>Primeira Troca Grátis</strong>
                <p>Até 30 dias para experimentar no conforto da sua casa.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <Package size={20} className={styles.featureIcon} />
              <div>
                <strong>Estojo Rígido & Flanela Inclusos</strong>
                <p>Case premium exclusivo da linha Chilli Beans assinado.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className={styles.relatedSection}>
          <div className="container">
            <SectionTitle
              subtitle="VOCÊ TAMBÉM PODE GOSTAR"
              title="MODELOS RELACIONADOS"
            />
            <ProductGrid products={related} />
          </div>
        </section>
      )}
    </div>
  );
}
