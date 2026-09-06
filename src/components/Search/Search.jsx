import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search as SearchIcon, X } from 'lucide-react';
import { useSearch } from '../../contexts/SearchContext';
import { formatCurrency } from '../../utils/formatCurrency';
import styles from './Search.module.css';

export default function SearchOverlay() {
  const { query, setQuery, results, closeSearch } = useSearch();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeSearch();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [closeSearch]);

  return (
    <div className={styles.overlay}>
      <div className={styles.backdrop} onClick={closeSearch} />
      <div className={styles.content}>
        <div className={`${styles.searchBar} container`}>
          <SearchIcon size={20} className={styles.icon} />
          <input
            ref={inputRef}
            type="text"
            className={styles.input}
            placeholder="O que você procura?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Buscar produtos"
          />
          <button
            className={styles.closeBtn}
            onClick={closeSearch}
            aria-label="Fechar busca"
          >
            <X size={20} />
          </button>
        </div>

        {query.trim() && (
          <div className={`${styles.results} container`}>
            {results.length > 0 ? (
              <>
                <p className={styles.resultCount}>
                  {results.length} {results.length === 1 ? 'resultado' : 'resultados'} para "{query}"
                </p>
                <div className={styles.resultGrid}>
                  {results.slice(0, 6).map((product) => (
                    <Link
                      key={product.id}
                      to={`/produto/${product.slug}`}
                      className={styles.resultItem}
                      onClick={closeSearch}
                    >
                      <img
                        src={product.imagem}
                        alt={product.nome}
                        className={styles.resultImage}
                      />
                      <div className={styles.resultInfo}>
                        <span className={styles.resultCategory}>
                          {product.categoria}
                        </span>
                        <span className={styles.resultName}>{product.nome}</span>
                        <span className={styles.resultPrice}>
                          {formatCurrency(product.preco)}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
                {results.length > 6 && (
                  <Link
                    to={`/catalogo?busca=${encodeURIComponent(query)}`}
                    className={styles.viewAll}
                    onClick={closeSearch}
                  >
                    Ver todos os resultados
                  </Link>
                )}
              </>
            ) : (
              <div className={styles.noResults}>
                <p className={styles.noResultsTitle}>
                  Não encontramos produtos para sua busca.
                </p>
                <p className={styles.noResultsText}>
                  Tente utilizar outros termos ou explore nosso catálogo.
                </p>
                <Link
                  to="/catalogo"
                  className={styles.catalogLink}
                  onClick={closeSearch}
                >
                  Explorar catálogo
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
