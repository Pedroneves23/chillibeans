/**
 * Gera um número de pedido fictício.
 */
export const generateOrderNumber = () => {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `CB-${timestamp}-${random}`;
};

/**
 * Calcula frete mockado.
 */
export const calculateShipping = (subtotal, cep) => {
  if (!cep || cep.length < 8) return null;

  const FREE_SHIPPING_THRESHOLD = 299;

  if (subtotal >= FREE_SHIPPING_THRESHOLD) {
    return { valor: 0, prazo: '3-5 dias úteis', tipo: 'Frete Grátis' };
  }

  const firstDigit = parseInt(cep[0], 10);
  if (firstDigit <= 2) {
    return { valor: 14.90, prazo: '3-5 dias úteis', tipo: 'PAC' };
  } else if (firstDigit <= 5) {
    return { valor: 19.90, prazo: '5-8 dias úteis', tipo: 'PAC' };
  } else {
    return { valor: 24.90, prazo: '7-10 dias úteis', tipo: 'PAC' };
  }
};

export const FREE_SHIPPING_THRESHOLD = 299;

/**
 * Valida CEP (formato brasileiro).
 */
export const isValidCEP = (cep) => /^\d{5}-?\d{3}$/.test(cep);

/**
 * Formata CEP com máscara.
 */
export const formatCEP = (value) => {
  const digits = value.replace(/\D/g, '').slice(0, 8);
  if (digits.length > 5) {
    return `${digits.slice(0, 5)}-${digits.slice(5)}`;
  }
  return digits;
};

/**
 * Formata telefone com máscara.
 */
export const formatPhone = (value) => {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length > 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }
  if (digits.length > 2) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }
  return digits;
};

/**
 * Formata número de cartão com máscara.
 */
export const formatCardNumber = (value) => {
  const digits = value.replace(/\D/g, '').slice(0, 16);
  return digits.replace(/(\d{4})(?=\d)/g, '$1 ');
};

/**
 * Formata validade do cartão.
 */
export const formatExpiry = (value) => {
  const digits = value.replace(/\D/g, '').slice(0, 4);
  if (digits.length > 2) {
    return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  }
  return digits;
};

/**
 * Calcula percentual de desconto.
 */
export const getDiscountPercent = (preco, precoAnterior) => {
  if (!precoAnterior || precoAnterior <= preco) return 0;
  return Math.round(((precoAnterior - preco) / precoAnterior) * 100);
};

/**
 * Debounce helper.
 */
export const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};
