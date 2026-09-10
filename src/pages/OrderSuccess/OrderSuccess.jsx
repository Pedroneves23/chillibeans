import { useEffect, useState } from 'react';
import { CheckCircle2, Package, ArrowRight, Printer } from 'lucide-react';
import { formatCurrency } from '../../utils/formatCurrency';
import Button from '../../components/Button';
import styles from './OrderSuccess.module.css';

export default function OrderSuccess() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    document.title = 'Pedido Confirmado! — CHILLI BEANS';
    const saved = sessionStorage.getItem('cb_last_order');
    if (saved) {
      try {
        setOrder(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  return (
    <div className={`container ${styles.successPage}`}>
      <div className={styles.card}>
        <div className={styles.iconCircle}>
          <CheckCircle2 size={44} className={styles.checkIcon} />
        </div>

        <span className={styles.tag}>PAGAMENTO PROCESSADO COM SUCESSO</span>
        <h1 className={styles.title}>Obrigado pela sua compra!</h1>
        <p className={styles.subtitle}>
          Seu pedido foi registrado e nossa equipe já está preparando suas peças no ateliê. Enviamos todos os detalhes para o seu e-mail cadastrado.
        </p>

        {order ? (
          <div className={styles.orderDetails}>
            <div className={styles.orderMeta}>
              <div>
                <span className={styles.metaLabel}>NÚMERO DO PEDIDO</span>
                <strong className={styles.metaValue}>{order.orderId}</strong>
              </div>
              <div>
                <span className={styles.metaLabel}>DATA</span>
                <strong className={styles.metaValue}>{order.date}</strong>
              </div>
              <div>
                <span className={styles.metaLabel}>MÉTODO</span>
                <strong className={styles.metaValue}>{order.paymentMethod.toUpperCase()}</strong>
              </div>
              <div>
                <span className={styles.metaLabel}>TOTAL PAGO</span>
                <strong className={styles.metaValueTotal}>{formatCurrency(order.total)}</strong>
              </div>
            </div>

            <div className={styles.itemsBlock}>
              <h4>Itens adquiridos:</h4>
              <div className={styles.itemsList}>
                {order.items.map((item, idx) => (
                  <div key={idx} className={styles.orderItem}>
                    <img src={item.imagem} alt={item.nome} className={styles.itemImg} />
                    <div className={styles.itemDetails}>
                      <span className={styles.itemName}>{item.nome}</span>
                      <span className={styles.itemSub}>Qtd: {item.quantidade} {item.cor && `• ${item.cor}`}</span>
                    </div>
                    <span className={styles.itemPrice}>{formatCurrency(item.preco * item.quantidade)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.shippingNotice}>
              <Package size={20} className={styles.packageIcon} />
              <div>
                <strong>Prazo estimado de entrega: 3 a 5 dias úteis</strong>
                <p>Você receberá o código de rastreamento dos Correios assim que despachado.</p>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.demoNotice}>
            <p>Pedido CB-982412 confirmado. Dados gravados com sucesso.</p>
          </div>
        )}

        <div className={styles.actions}>
          <Button to="/catalogo" variant="primary" size="large">
            CONTINUAR EXPLORANDO A COLEÇÃO <ArrowRight size={16} />
          </Button>
          <button
            className={styles.printBtn}
            onClick={() => window.print()}
          >
            <Printer size={16} /> Imprimir Comprovante
          </button>
        </div>
      </div>
    </div>
  );
}
