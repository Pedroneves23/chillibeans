import { createContext, useContext, useCallback, useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useLocalStorage('chilli-beans-cart', []);

  const addToCart = useCallback((product, quantity = 1, cor = null) => {
    setItems((prev) => {
      const selectedCor = cor || product.corSelecionada || product.cores[0];
      const existingIndex = prev.findIndex(
        (item) => item.id === product.id && item.cor === selectedCor
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantidade: Math.min(
            updated[existingIndex].quantidade + quantity,
            product.estoque
          ),
        };
        return updated;
      }

      return [
        ...prev,
        {
          id: product.id,
          nome: product.nome,
          slug: product.slug,
          preco: product.preco,
          precoAnterior: product.precoAnterior,
          imagem: product.imagem,
          cor: selectedCor,
          quantidade: Math.min(quantity, product.estoque),
          estoque: product.estoque,
        },
      ];
    });
  }, [setItems]);

  const removeFromCart = useCallback((id, cor) => {
    setItems((prev) => prev.filter((item) => !(item.id === id && item.cor === cor)));
  }, [setItems]);

  const updateQuantity = useCallback((id, cor, quantidade) => {
    if (quantidade < 1) return;
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.cor === cor
          ? { ...item, quantidade: Math.min(quantidade, item.estoque) }
          : item
      )
    );
  }, [setItems]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, [setItems]);

  const cartTotal = useMemo(
    () => items.reduce((sum, item) => sum + item.preco * item.quantidade, 0),
    [items]
  );

  const cartItemsCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantidade, 0),
    [items]
  );

  const isInCart = useCallback(
    (id) => items.some((item) => item.id === id),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartTotal,
      cartItemsCount,
      isInCart,
    }),
    [items, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartItemsCount, isInCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser utilizado dentro de CartProvider');
  }
  return context;
}

export default CartContext;
