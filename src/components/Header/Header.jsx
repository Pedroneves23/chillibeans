import { useState, useEffect, useCallback } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search as SearchIcon, User, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useSearch } from '../../contexts/SearchContext';
import SearchOverlay from '../Search';
import MobileMenu from '../MobileMenu';
import styles from './Header.module.css';

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/mais-vendidos', label: 'Mais Vendidos' },
  { to: '/catalogo', label: 'Catálogo' },
  { to: '/sobre', label: 'Sobre' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItemsCount } = useCart();
  const { isOpen: isSearchOpen, openSearch, closeSearch } = useSearch();
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    closeSearch();
  }, [location, closeSearch]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen || isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen, isSearchOpen]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={`${styles.inner} container`}>
          {/* Mobile menu toggle */}
          <button
            className={styles.mobileToggle}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <Link to="/" className={styles.logo} aria-label="CHILLI BEANS - Página inicial">
            <span className={styles.logoText}>CHILLI BEANS</span>
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.nav} aria-label="Navegação principal">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                }
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className={styles.actions}>
            <button
              className={styles.actionBtn}
              onClick={openSearch}
              aria-label="Abrir busca"
            >
              <SearchIcon size={20} />
            </button>
            <Link to="/login" className={styles.actionBtn} aria-label="Minha conta">
              <User size={20} />
            </Link>
            <Link to="/carrinho" className={styles.cartBtn} aria-label="Carrinho de compras">
              <ShoppingBag size={20} />
              {cartItemsCount > 0 && (
                <span className={styles.cartCount}>{cartItemsCount}</span>
              )}
            </Link>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className={styles.spacer} />

      {/* Search Overlay */}
      {isSearchOpen && <SearchOverlay />}

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
