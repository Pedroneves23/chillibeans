import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import SectionTitle from '../../components/SectionTitle';
import ProductGrid from '../../components/ProductGrid';
import products, { getAllCategories, getAllCollections } from '../../data/products';
import styles from './Catalog.module.css';

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get('cat') || 'Todos';
  const searchQuery = searchParams.get('busca')?.trim() || '';

  const [selectedCategory, setSelectedCategory] = useState(initialCat);
  const [selectedCollection, setSelectedCollection] = useState('Todas');
  const [sortBy, setSortBy] = useState('popular');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  useEffect(() => {
    document.title = 'Catálogo Completo — CHILLI BEANS';
    const cat = searchParams.get('cat');
    if (cat === 'Solar') setSelectedCategory('Óculos de Sol');
    else if (cat === 'Grau') setSelectedCategory('Óculos de Grau');
    else if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const categories = ['Todos', ...getAllCategories()];
  const collections = ['Todas', ...getAllCollections()];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'Todos') {
      result = result.filter((p) => p.categoria.toLowerCase().includes(selectedCategory.toLowerCase()));
    }

    if (selectedCollection !== 'Todas') {
      result = result.filter((p) => p.colecao === selectedCollection);
    }

    if (searchQuery) {
      const normalizedQuery = searchQuery.toLocaleLowerCase('pt-BR');
      result = result.filter((p) =>
        [p.nome, p.categoria, p.colecao, p.descricao, ...p.cores, ...p.tags]
          .some((value) => value.toLocaleLowerCase('pt-BR').includes(normalizedQuery))
      );
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.preco - b.preco);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.preco - a.preco);
    } else if (sortBy === 'name') {
      result.sort((a, b) => a.nome.localeCompare(b.nome));
    } else {
      // Default: best sellers first, then rating
      result.sort((a, b) => (b.maisVendido ? 1 : 0) - (a.maisVendido ? 1 : 0) || b.avaliacao - a.avaliacao);
    }

    return result;
  }, [selectedCategory, selectedCollection, sortBy, searchQuery]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    const nextParams = new URLSearchParams(searchParams);
    if (cat === 'Todos') {
      nextParams.delete('cat');
    } else {
      nextParams.set('cat', cat);
    }
    setSearchParams(nextParams);
  };

  const handleClearFilters = () => {
    setSelectedCategory('Todos');
    setSelectedCollection('Todas');
    setSortBy('popular');
    setSearchParams({});
  };

  return (
    <div className={styles.catalogPage}>
      <div className={styles.headerBanner}>
        <div className="container">
          <SectionTitle
            subtitle="COLEÇÃO COMPLETA"
            title="CATÁLOGO EXCLUSIVO"
            description="Explore armações de design autêntico, lentes com proteção de alto desempenho e cortes contemporâneos."
          />
        </div>
      </div>

      <div className={`container ${styles.container}`}>
        {/* Filter Toolbar */}
        <div className={styles.toolbar}>
          <div className={styles.filterTabs}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.tabBtn} ${selectedCategory === cat ? styles.tabActive : ''}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.toolbarRight}>
            <div className={styles.sortWrapper}>
              <label htmlFor="sortSelect" className={styles.sortLabel}>Ordenar por:</label>
              <select
                id="sortSelect"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={styles.sortSelect}
              >
                <option value="popular">Mais Desejados</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior Preço</option>
                <option value="name">Nome (A - Z)</option>
              </select>
            </div>

            <button
              className={styles.mobileFilterToggle}
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            >
              <SlidersHorizontal size={18} />
              <span>Filtros</span>
            </button>
          </div>
        </div>

        {/* Collections filter chips */}
        <div className={`${styles.collectionsBar} ${isMobileFiltersOpen ? styles.mobileFiltersOpen : ''}`}>
          <div className={styles.collectionFilters}>
            <span className={styles.filterTitle}>Coleções:</span>
            {collections.map((col) => (
              <button
                key={col}
                className={`${styles.chipBtn} ${selectedCollection === col ? styles.chipActive : ''}`}
                onClick={() => setSelectedCollection(col)}
              >
                {col}
              </button>
            ))}
          </div>

          {(selectedCategory !== 'Todos' || selectedCollection !== 'Todas') && (
            <button className={styles.clearBtn} onClick={handleClearFilters}>
              <X size={14} /> Limpar filtros
            </button>
          )}
        </div>

        {/* Results summary */}
        <div className={styles.resultsInfo}>
          <span>Exibindo <strong>{filteredProducts.length}</strong> modelos exclusivos</span>
        </div>

        {/* Product Grid */}
        <div className={styles.gridSection}>
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}
