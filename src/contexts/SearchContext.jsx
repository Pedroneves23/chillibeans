import { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { searchProducts } from '../data/products';

const SearchContext = createContext(null);

export function SearchProvider({ children }) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return searchProducts(query);
  }, [query]);

  const openSearch = useCallback(() => setIsOpen(true), []);
  const closeSearch = useCallback(() => {
    setIsOpen(false);
    setQuery('');
  }, []);
  const toggleSearch = useCallback(() => {
    setIsOpen((prev) => {
      if (prev) setQuery('');
      return !prev;
    });
  }, []);

  const value = useMemo(
    () => ({
      query,
      setQuery,
      results,
      isOpen,
      openSearch,
      closeSearch,
      toggleSearch,
    }),
    [query, results, isOpen, openSearch, closeSearch, toggleSearch]
  );

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch deve ser utilizado dentro de SearchProvider');
  }
  return context;
}

export default SearchContext;
