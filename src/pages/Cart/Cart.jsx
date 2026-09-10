import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { formatCurrency } from '../../utils/formatCurrency';
import Button from '../../components/Button';
import styles from './Cart.module.css';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, clearCart, cartTotal, cartItemsCount } = useCart();

  const [cep, setCep] = useState('');
  const [shippingCalculated, setShippingCalculated] = useState(false);
  const [shippingCost, setShippingCost] = useState(0);
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [couponError, setCouponError] = useState('');

  useEffect(() => {
    document.title = 'Sua Sacola — CHILLI BEANS';
  }, []);

  const handleCalculateShipping = (e) => {
    e.preventDefault();
    if (cep.trim().length >= 8) {
      if (cartTotal >= 299) {
        setShippingCost(0);
      } else {
        setShippingCost(24.90);
      }
      setShippingCalculated(true);
    }
  };

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const code = coupon.trim().toUpperCase();
    if (code === 'CHILLI10') {
      setDiscount(cartTotal * 0.10);
      setCouponError('');
    } else if (code === 'PRIMEIRACOMPRA') {
      setDiscount(50);
      setCouponError('');
    } else {
      setCouponError('Cupom inválido ou expirado.');
    }
  };

  const finalTotal = Math.max(0, cartTotal - discount + (shippingCalculated ? shippingCost : 0));

  if (items.length === 0) {
    return (
      <div className={`container ${styles.emptyContainer}`}>
        <ShoppingBag size={56} className={styles.emptyIcon} />
        <h2 className={styles.emptyTitle}>Sua sacola está vazia</h2>
        <p className={styles.emptySubtitle}>
          Descubra nossos modelos de sol e grau e encontre a peça perfeita para o seu visual.
        </p>
        <Button to="/catalogo" variant="primary" size="large">
          EXPLORAR CATÁLOGO
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.cartPage}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h1 className={styles.pageTitle}>SUA SACOLA ({cartItemsCount})</h1>
          <button className={styles.clearBtn} onClick={clearCart}>
            Limpar sacola
          </button>
        </div>

        <div className={styles.grid}>
          {/* Items List */}
          <div className={styles.itemsList}>
            <div className={styles.tableHeader}>
              <span>PRODUTO</span>
              <span>QUANTIDADE</span>
              <span>SUBTOTAL</span>
            </div>

            {items.map((item) => (
              <div key={`${item.id}-${item.cor || ''}`} className={styles.cartItem}>
                <div className={styles.itemInfo}>
                  <Link to={`/produto/${item.slug}`} className={styles.itemThumb}>
                    <img src={item.imagem} alt={item.nome} />
                  </Link>
                  <div className={styles.itemMeta}>
                    <Link to={`/produto/${item.slug}`} className={styles.itemName}>
                      {item.nome}
                    </Link>
                    {item.cor && (
                      <span className={styles.itemColor}>Cor: {item.cor}</span>
                    )}
                    <span className={styles.itemUnitPrice}>{formatCurrency(item.preco)}</span>
                    <button
                      className={styles.removeBtn}
                      onClick={() => removeFromCart(item.id, item.cor)}
                      aria-label="Remover item"
                    >
                      <Trash2 size={14} /> Remover
                    </button>
                  </div>
                </div>

                <div className={styles.itemQty}>
                  <div className={styles.qtyControl}>
                    <button
                      className={styles.qtyBtn}
                      onClick={() => updateQuantity(item.id, item.cor, item.quantidade - 1)}
                    >
                      -
                    </button>
                    <span className={styles.qtyValue}>{item.quantidade}</span>
                    <button
                      className={styles.qtyBtn}
                      onClick={() => updateQuantity(item.id, item.cor, item.quantidade + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className={styles.itemTotal}>
                  <span>{formatCurrency(item.preco * item.quantidade)}</span>
                </div>
              </div>
            ))}

            {/* Extras: Shipping and Coupon */}
            <div className={styles.extrasSection}>
              {/* Shipping calc */}
              <div className={styles.extraBox}>
                <h4 className={styles.extraTitle}>
                  <Truck size={18} /> CALCULAR FRETE E PRAZO
                </h4>
                <form onSubmit={handleCalculateShipping} className={styles.extraForm}>
                  <input
                    type="text"
                    placeholder="Digite seu CEP"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    className={styles.extraInput}
                    maxLength={9}
                  />
                  <button type="submit" className={styles.extraSubmitBtn}>
                    Calcular
                  </button>
                </form>
                {shippingCalculated && (
                  <p className={styles.shippingResult}>
                    {shippingCost === 0 ? (
                      <span className={styles.freeShipping}>Parabéns! Frete Grátis aplicado (3 a 5 dias úteis)</span>
                    ) : (
                      <span>Entrega Padrão: {formatCurrency(shippingCost)} (4 a 6 dias úteis)</span>
                    )}
                  </p>
                )}
              </div>

              {/* Coupon */}
              <div className={styles.extraBox}>
                <h4 className={styles.extraTitle}>CUPOM DE DESCONTO</h4>
                <form onSubmit={handleApplyCoupon} className={styles.extraForm}>
                  <input
                    type="text"
                    placeholder="Código (ex: CHILLI10)"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    className={styles.extraInput}
                  />
                  <button type="submit" className={styles.extraSubmitBtn}>
                    Aplicar
                  </button>
                </form>
                {discount > 0 && (
                  <p className={styles.couponSuccess}>
                    Cupom aplicado! Desconto de {formatCurrency(discount)}
                  </p>
                )}
                {couponError && (
                  <p className={styles.couponError}>{couponError}</p>
                )}
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className={styles.summaryCard}>
            <h3 className={styles.summaryTitle}>RESUMO DO PEDIDO</h3>

            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>{formatCurrency(cartTotal)}</span>
            </div>

            {discount > 0 && (
              <div className={`${styles.summaryRow} ${styles.discountRow}`}>
                <span>Desconto</span>
                <span>-{formatCurrency(discount)}</span>
              </div>
            )}

            <div className={styles.summaryRow}>
              <span>Frete</span>
              <span>
                {shippingCalculated
                  ? shippingCost === 0
                    ? 'Grátis'
                    : formatCurrency(shippingCost)
                  : 'A calcular'}
              </span>
            </div>

            <div className={styles.summaryTotalRow}>
              <span>Total</span>
              <span className={styles.totalValue}>{formatCurrency(finalTotal)}</span>
            </div>

            <p className={styles.totalInstallment}>
              em até 10x de {formatCurrency(finalTotal / 10)} sem juros
            </p>

            <div className={styles.summaryActions}>
              <Button
                to="/checkout"
                variant="primary"
                size="large"
                fullWidth
              >
                FINALIZAR PEDIDO <ArrowRight size={16} />
              </Button>
              <Button
                to="/catalogo"
                variant="outline"
                size="medium"
                fullWidth
              >
                CONTINUAR COMPRANDO
              </Button>
            </div>

            <div className={styles.securityTrust}>
              <ShieldCheck size={18} className={styles.trustIcon} />
              <span>Ambiente 100% criptografado e seguro</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
