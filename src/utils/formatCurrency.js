/**
 * Formata valor numérico para moeda brasileira (BRL).
 */
export const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

/**
 * Calcula o valor da parcela.
 */
export const getInstallmentValue = (price, installments) => {
  if (!installments || installments <= 1) return price;
  return price / installments;
};

/**
 * Formata texto de parcelamento.
 */
export const formatInstallment = (price, installments) => {
  if (!installments || installments <= 1) return '';
  const value = getInstallmentValue(price, installments);
  return `${installments}x de ${formatCurrency(value)} sem juros`;
};
