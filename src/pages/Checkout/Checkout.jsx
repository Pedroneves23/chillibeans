import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, CreditCard, QrCode, FileText, CheckCircle2, Lock, ArrowLeft } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { formatCurrency } from '../../utils/formatCurrency';
import Button from '../../components/Button';
import styles from './Checkout.module.css';

export default function Checkout() {
  const navigate = useNavigate();
  const { items, cartTotal, clearCart } = useCart();
  const savedUser = (() => {
    try {
      return JSON.parse(localStorage.getItem('cb_user')) || {};
    } catch {
      return {};
    }
  })();

  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('pix');
  const [formData, setFormData] = useState({
    nome: savedUser.nome || '',
    email: savedUser.email || '',
    cpf: '',
    telefone: '',
    cep: '',
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: '',
    installments: '1',
  });

  useEffect(() => {
    document.title = 'Checkout Seguro — CHILLI BEANS';
    if (items.length === 0) {
      navigate('/carrinho');
    }
  }, [items.length, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const pixDiscount = paymentMethod === 'pix' ? cartTotal * 0.05 : 0;
  const shipping = cartTotal >= 299 ? 0 : 24.90;
  const finalTotal = cartTotal - pixDiscount + shipping;

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    const orderDetails = {
      orderId: 'CB-' + Math.floor(100000 + Math.random() * 900000),
      items,
      total: finalTotal,
      paymentMethod,
      customer: formData,
      date: new Date().toLocaleDateString('pt-BR'),
    };
    sessionStorage.setItem('cb_last_order', JSON.stringify(orderDetails));
    navigate('/checkout/sucesso');
    clearCart();
  };

  return (
    <div className={styles.checkoutPage}>
      {/* Top security header */}
      <div className={styles.checkoutHeader}>
        <div className={`container ${styles.headerInner}`}>
          <Link to="/" className={styles.logo}>CHILLI BEANS</Link>
          <div className={styles.secureBadge}>
            <Lock size={16} />
            <span>CHECKOUT 100% SEGURO</span>
          </div>
        </div>
      </div>

      <div className={`container ${styles.checkoutContainer}`}>
        <div className={styles.leftCol}>
          {/* Step tabs */}
          <div className={styles.stepsNav}>
            <button
              className={`${styles.stepTab} ${step >= 1 ? styles.stepTabActive : ''}`}
              onClick={() => setStep(1)}
            >
              <span className={styles.stepNum}>1</span> Dados Pessoais
            </button>
            <button
              className={`${styles.stepTab} ${step >= 2 ? styles.stepTabActive : ''}`}
              onClick={() => setStep(2)}
            >
              <span className={styles.stepNum}>2</span> Entrega
            </button>
            <button
              className={`${styles.stepTab} ${step >= 3 ? styles.stepTabActive : ''}`}
              onClick={() => setStep(3)}
            >
              <span className={styles.stepNum}>3</span> Pagamento
            </button>
          </div>

          <form onSubmit={handleSubmitOrder}>
            {/* Step 1: Identification */}
            {step === 1 && (
              <div className={styles.stepBox}>
                <h3 className={styles.stepTitle}>1. Identificação</h3>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label>Nome Completo</label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>E-mail para confirmação</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>CPF</label>
                    <input
                      type="text"
                      name="cpf"
                      value={formData.cpf}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Telefone Celular</label>
                    <input
                      type="text"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className={styles.stepActions}>
                  <Button type="button" variant="primary" onClick={() => setStep(2)}>
                    Prosseguir para Entrega
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Delivery */}
            {step === 2 && (
              <div className={styles.stepBox}>
                <h3 className={styles.stepTitle}>2. Endereço de Entrega</h3>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label>CEP</label>
                    <input
                      type="text"
                      name="cep"
                      value={formData.cep}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Endereço</label>
                    <input
                      type="text"
                      name="endereco"
                      value={formData.endereco}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Número</label>
                    <input
                      type="text"
                      name="numero"
                      value={formData.numero}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Complemento</label>
                    <input
                      type="text"
                      name="complemento"
                      value={formData.complemento}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Bairro</label>
                    <input
                      type="text"
                      name="bairro"
                      value={formData.bairro}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Cidade / UF</label>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <input
                        type="text"
                        name="cidade"
                        value={formData.cidade}
                        onChange={handleChange}
                        required
                        style={{ flex: 2 }}
                      />
                      <input
                        type="text"
                        name="estado"
                        value={formData.estado}
                        onChange={handleChange}
                        required
                        style={{ flex: 1 }}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.stepActions}>
                  <Button type="button" variant="outline" onClick={() => setStep(1)}>
                    Voltar
                  </Button>
                  <Button type="button" variant="primary" onClick={() => setStep(3)}>
                    Prosseguir para Pagamento
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {step === 3 && (
              <div className={styles.stepBox}>
                <h3 className={styles.stepTitle}>3. Forma de Pagamento</h3>

                {/* Methods options */}
                <div className={styles.paymentOptions}>
                  <label
                    className={`${styles.paymentCard} ${paymentMethod === 'pix' ? styles.paymentActive : ''}`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="pix"
                      checked={paymentMethod === 'pix'}
                      onChange={() => setPaymentMethod('pix')}
                    />
                    <QrCode size={22} className={styles.paymentIcon} />
                    <div>
                      <strong>PIX (5% de Desconto Imediato)</strong>
                      <p>Aprovação instantânea, chave gerada na próxima tela.</p>
                    </div>
                  </label>

                  <label
                    className={`${styles.paymentCard} ${paymentMethod === 'card' ? styles.paymentActive : ''}`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                    />
                    <CreditCard size={22} className={styles.paymentIcon} />
                    <div>
                      <strong>Cartão de Crédito</strong>
                      <p>Parcelamento em até 10x sem juros.</p>
                    </div>
                  </label>

                  <label
                    className={`${styles.paymentCard} ${paymentMethod === 'boleto' ? styles.paymentActive : ''}`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="boleto"
                      checked={paymentMethod === 'boleto'}
                      onChange={() => setPaymentMethod('boleto')}
                    />
                    <FileText size={22} className={styles.paymentIcon} />
                    <div>
                      <strong>Boleto Bancário</strong>
                      <p>Vencimento em 2 dias úteis.</p>
                    </div>
                  </label>
                </div>

                {/* Payment form if Card */}
                {paymentMethod === 'card' && (
                  <div className={styles.cardFields}>
                    <div className={styles.formGroup}>
                      <label>Número do Cartão</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Nome Impresso no Cartão</label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label>Validade</label>
                        <input
                          type="text"
                          name="cardExpiry"
                          value={formData.cardExpiry}
                          onChange={handleChange}
                          placeholder="MM/AA"
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label>CVV</label>
                        <input
                          type="text"
                          name="cardCvv"
                          value={formData.cardCvv}
                          onChange={handleChange}
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>
                    <div className={styles.formGroup}>
                      <label>Parcelamento</label>
                      <select
                        name="installments"
                        value={formData.installments}
                        onChange={handleChange}
                        className={styles.selectInput}
                      >
                        <option value="1">1x de {formatCurrency(finalTotal)} (À vista)</option>
                        <option value="2">2x de {formatCurrency(finalTotal / 2)} sem juros</option>
                        <option value="3">3x de {formatCurrency(finalTotal / 3)} sem juros</option>
                        <option value="6">6x de {formatCurrency(finalTotal / 6)} sem juros</option>
                        <option value="10">10x de {formatCurrency(finalTotal / 10)} sem juros</option>
                      </select>
                    </div>
                  </div>
                )}

                <div className={styles.stepActions}>
                  <Button type="button" variant="outline" onClick={() => setStep(2)}>
                    Voltar
                  </Button>
                  <Button type="submit" variant="primary" size="large">
                    CONFIRMAR E FINALIZAR PEDIDO
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Right side: Order Summary */}
        <aside className={styles.orderSummary}>
          <h3 className={styles.summaryTitle}>ITENS DO PEDIDO</h3>
          <div className={styles.miniItemsList}>
            {items.map((item) => (
              <div key={`${item.id}-${item.cor || ''}`} className={styles.miniItem}>
                <img src={item.imagem} alt={item.nome} className={styles.miniThumb} />
                <div className={styles.miniInfo}>
                  <span className={styles.miniName}>{item.nome}</span>
                  <span className={styles.miniQty}>Qtd: {item.quantidade} {item.cor && `• ${item.cor}`}</span>
                  <span className={styles.miniPrice}>{formatCurrency(item.preco * item.quantidade)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.summaryTotals}>
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>{formatCurrency(cartTotal)}</span>
            </div>
            {pixDiscount > 0 && (
              <div className={`${styles.summaryRow} ${styles.discountText}`}>
                <span>Desconto PIX (5%)</span>
                <span>-{formatCurrency(pixDiscount)}</span>
              </div>
            )}
            <div className={styles.summaryRow}>
              <span>Frete</span>
              <span>{shipping === 0 ? 'Grátis' : formatCurrency(shipping)}</span>
            </div>
            <div className={styles.totalRow}>
              <span>Total a Pagar</span>
              <span className={styles.totalHighlight}>{formatCurrency(finalTotal)}</span>
            </div>
          </div>

          <div className={styles.sslSecurity}>
            <ShieldCheck size={18} className={styles.sslIcon} />
            <span>Dados protegidos por certificado SSL com criptografia bancária.</span>
          </div>
        </aside>
      </div>
    </div>
  );
}
