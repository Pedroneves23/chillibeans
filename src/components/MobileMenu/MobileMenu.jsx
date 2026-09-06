import { NavLink } from 'react-router-dom';
import { X } from 'lucide-react';
import styles from './MobileMenu.module.css';

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/mais-vendidos', label: 'Mais Vendidos' },
  { to: '/catalogo', label: 'Catálogo' },
  { to: '/sobre', label: 'Sobre Nossa Loja' },
  { to: '/carrinho', label: 'Sacola' },
];

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <>
      {isOpen && <div className={styles.backdrop} onClick={onClose} />}
      <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <span className={styles.title}>Menu</span>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Fechar menu">
            <X size={22} />
          </button>
        </div>

        <nav className={styles.nav} aria-label="Menu principal">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
              }
              onClick={onClose}
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.footer}>
          <p className={styles.brand}>CHILLI BEANS</p>
        </div>
      </div>
    </>
  );
}
