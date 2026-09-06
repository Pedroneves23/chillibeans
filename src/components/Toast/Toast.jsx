import { useToast } from '../../contexts/ToastContext';
import { Link } from 'react-router-dom';
import { X, Check, ShoppingBag } from 'lucide-react';
import styles from './Toast.module.css';

export default function Toast() {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className={styles.container} aria-live="polite">
      {toasts.map((toast) => (
        <div key={toast.id} className={`${styles.toast} ${styles[toast.type]}`}>
          <div className={styles.icon}>
            {toast.type === 'success' ? <Check size={16} /> : <ShoppingBag size={16} />}
          </div>
          <div className={styles.content}>
            <p className={styles.message}>{toast.message}</p>
            {toast.product && (
              <div className={styles.product}>
                <img
                  src={toast.product.imagem}
                  alt={toast.product.nome}
                  className={styles.productImage}
                />
                <div className={styles.productInfo}>
                  <span className={styles.productName}>{toast.product.nome}</span>
                  <div className={styles.productActions}>
                    <Link
                      to="/carrinho"
                      className={styles.actionLink}
                      onClick={() => removeToast(toast.id)}
                    >
                      Ver sacola
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <button
            className={styles.close}
            onClick={() => removeToast(toast.id)}
            aria-label="Fechar notificação"
          >
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  );
}
