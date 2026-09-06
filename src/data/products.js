/**
 * CHILLI BEANS — Catálogo de Produtos
 *
 * Cada produto contém todos os dados necessários para o e-commerce.
 * Para conectar uma API futuramente, substitua este arquivo por chamadas fetch/axios.
 *
 * Imagens: URLs Unsplash com parâmetros de dimensão.
 * Para trocar, basta substituir a URL mantendo a mesma propriedade.
 */

const products = [
  {
    id: 1,
    nome: 'Aviador Clássico',
    slug: 'aviador-classico',
    categoria: 'Óculos de Sol',
    colecao: 'Essential',
    preco: 349.90,
    precoAnterior: 449.90,
    parcelas: 6,
    imagem: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop&q=80',
    imagemHover: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=600&fit=crop&q=80',
    descricao: 'O clássico que nunca sai de cena. Armação em metal dourado com lentes em degradê marrom. Proteção UV400 e design atemporal que combina com qualquer estilo.',
    cores: ['Dourado', 'Prata', 'Preto'],
    corSelecionada: 'Dourado',
    tags: ['aviador', 'clássico', 'metal'],
    estoque: 15,
    maisVendido: true,
    novo: false,
    avaliacao: 4.8,
    avaliacoes: 124,
  },
  {
    id: 2,
    nome: 'Berlin Acetato',
    slug: 'berlin-acetato',
    categoria: 'Óculos de Sol',
    colecao: 'Urban',
    preco: 299.90,
    precoAnterior: null,
    parcelas: 5,
    imagem: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=600&fit=crop&q=80',
    imagemHover: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop&q=80',
    descricao: 'Inspirado na cena artística berlinense. Acetato premium tartaruga com lentes verdes polarizadas. Para quem vive a cidade com personalidade.',
    cores: ['Tartaruga', 'Preto', 'Azul Marinho'],
    corSelecionada: 'Tartaruga',
    tags: ['acetato', 'tartaruga', 'polarizado'],
    estoque: 22,
    maisVendido: true,
    novo: false,
    avaliacao: 4.6,
    avaliacoes: 89,
  },
  {
    id: 3,
    nome: 'Manhattan Square',
    slug: 'manhattan-square',
    categoria: 'Óculos de Sol',
    colecao: 'Premium',
    preco: 429.90,
    precoAnterior: 529.90,
    parcelas: 8,
    imagem: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&h=600&fit=crop&q=80',
    imagemHover: 'https://images.unsplash.com/photo-1556015048-4d3aa10df74c?w=600&h=600&fit=crop&q=80',
    descricao: 'Linhas retas e presença marcante. Armação quadrada oversized em acetato negro com detalhes em metal. A escolha de quem lidera.',
    cores: ['Preto', 'Havana', 'Verde Escuro'],
    corSelecionada: 'Preto',
    tags: ['quadrado', 'oversized', 'premium'],
    estoque: 8,
    maisVendido: true,
    novo: true,
    avaliacao: 4.9,
    avaliacoes: 56,
  },
  {
    id: 4,
    nome: 'Riviera Cat Eye',
    slug: 'riviera-cat-eye',
    categoria: 'Óculos de Sol',
    colecao: 'Femme',
    preco: 379.90,
    precoAnterior: null,
    parcelas: 6,
    imagem: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=600&h=600&fit=crop&q=80',
    imagemHover: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=600&fit=crop&q=80',
    descricao: 'Feminilidade e atitude em forma de óculos. Armação cat eye em acetato com acabamento perolado. Lentes em degradê cinza.',
    cores: ['Perolado', 'Vinho', 'Preto'],
    corSelecionada: 'Perolado',
    tags: ['cat-eye', 'feminino', 'acetato'],
    estoque: 18,
    maisVendido: false,
    novo: true,
    avaliacao: 4.7,
    avaliacoes: 73,
  },
  {
    id: 5,
    nome: 'Tokyo Round',
    slug: 'tokyo-round',
    categoria: 'Óculos de Sol',
    colecao: 'Urban',
    preco: 319.90,
    precoAnterior: 389.90,
    parcelas: 5,
    imagem: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=600&fit=crop&q=80',
    imagemHover: 'https://images.unsplash.com/photo-1614715838608-dd527c46231d?w=600&h=600&fit=crop&q=80',
    descricao: 'O redondo que transcende gerações. Metal fino com ponte dupla e lentes espelhadas. Inspiração oriental para quem busca leveza e distinção.',
    cores: ['Dourado', 'Grafite', 'Rosé'],
    corSelecionada: 'Dourado',
    tags: ['redondo', 'metal', 'espelhado'],
    estoque: 30,
    maisVendido: true,
    novo: false,
    avaliacao: 4.5,
    avaliacoes: 102,
  },
  {
    id: 6,
    nome: 'Milano Pilot',
    slug: 'milano-pilot',
    categoria: 'Óculos de Sol',
    colecao: 'Premium',
    preco: 459.90,
    precoAnterior: null,
    parcelas: 8,
    imagem: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop&q=80',
    imagemHover: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop&q=80',
    descricao: 'Sofisticação milanesa em cada detalhe. Armação piloto em titânio com lentes polarizadas premium. Acabamento fosco exclusivo.',
    cores: ['Grafite Fosco', 'Dourado', 'Preto'],
    corSelecionada: 'Grafite Fosco',
    tags: ['piloto', 'titânio', 'premium'],
    estoque: 5,
    maisVendido: false,
    novo: true,
    avaliacao: 4.9,
    avaliacoes: 34,
  },
  {
    id: 7,
    nome: 'Safari Oversized',
    slug: 'safari-oversized',
    categoria: 'Óculos de Sol',
    colecao: 'Essential',
    preco: 289.90,
    precoAnterior: null,
    parcelas: 5,
    imagem: 'https://images.unsplash.com/photo-1516642898673-edd1ced3be3e?w=600&h=600&fit=crop&q=80',
    imagemHover: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&h=600&fit=crop&q=80',
    descricao: 'Oversized para quem gosta de se destacar. Armação em acetato com tonalidade âmbar e lentes marrons. Presença em qualquer ambiente.',
    cores: ['Âmbar', 'Preto', 'Caramelo'],
    corSelecionada: 'Âmbar',
    tags: ['oversized', 'acetato', 'casual'],
    estoque: 25,
    maisVendido: false,
    novo: false,
    avaliacao: 4.4,
    avaliacoes: 67,
  },
  {
    id: 8,
    nome: 'Soho Retro',
    slug: 'soho-retro',
    categoria: 'Óculos de Sol',
    colecao: 'Urban',
    preco: 339.90,
    precoAnterior: 399.90,
    parcelas: 6,
    imagem: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=600&fit=crop&q=80',
    imagemHover: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=600&fit=crop&q=80',
    descricao: 'Vintage com alma contemporânea. Armação em acetato grosso com lentes flat. O equilíbrio perfeito entre nostalgia e modernidade.',
    cores: ['Preto Fosco', 'Tartaruga', 'Cristal'],
    corSelecionada: 'Preto Fosco',
    tags: ['retro', 'acetato', 'flat'],
    estoque: 12,
    maisVendido: true,
    novo: false,
    avaliacao: 4.7,
    avaliacoes: 91,
  },
  {
    id: 9,
    nome: 'Havana Intelectual',
    slug: 'havana-intelectual',
    categoria: 'Óculos de Grau',
    colecao: 'Scholar',
    preco: 259.90,
    precoAnterior: null,
    parcelas: 4,
    imagem: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=600&fit=crop&q=80',
    imagemHover: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=600&fit=crop&q=80',
    descricao: 'O clássico intelectual em acetato havana. Formato levemente arredondado com hastes finas em metal. Elegância discreta para o dia a dia.',
    cores: ['Havana', 'Preto', 'Mel'],
    corSelecionada: 'Havana',
    tags: ['grau', 'acetato', 'clássico'],
    estoque: 35,
    maisVendido: true,
    novo: false,
    avaliacao: 4.8,
    avaliacoes: 156,
  },
  {
    id: 10,
    nome: 'Oxford Scholar',
    slug: 'oxford-scholar',
    categoria: 'Óculos de Grau',
    colecao: 'Scholar',
    preco: 279.90,
    precoAnterior: 349.90,
    parcelas: 5,
    imagem: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=600&fit=crop&q=80',
    imagemHover: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=600&fit=crop&q=80',
    descricao: 'Inspiração acadêmica britânica. Armação retangular em metal com detalhes em acetato nas pontas. Seriedade com personalidade.',
    cores: ['Preto/Dourado', 'Grafite', 'Prata'],
    corSelecionada: 'Preto/Dourado',
    tags: ['grau', 'metal', 'retangular'],
    estoque: 20,
    maisVendido: false,
    novo: false,
    avaliacao: 4.6,
    avaliacoes: 78,
  },
  {
    id: 11,
    nome: 'Brooklyn Vintage',
    slug: 'brooklyn-vintage',
    categoria: 'Óculos de Grau',
    colecao: 'Urban',
    preco: 299.90,
    precoAnterior: null,
    parcelas: 5,
    imagem: 'https://images.unsplash.com/photo-1614715838608-dd527c46231d?w=600&h=600&fit=crop&q=80',
    imagemHover: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=600&fit=crop&q=80',
    descricao: 'O espírito criativo do Brooklyn em uma armação. Acetato grosso com formato arredondado e cores vibrantes. Para quem vive arte.',
    cores: ['Cristal', 'Verde Musgo', 'Vinho'],
    corSelecionada: 'Cristal',
    tags: ['grau', 'acetato', 'redondo'],
    estoque: 14,
    maisVendido: false,
    novo: true,
    avaliacao: 4.5,
    avaliacoes: 45,
  },
  {
    id: 12,
    nome: 'Vienna Titanium',
    slug: 'vienna-titanium',
    categoria: 'Óculos de Grau',
    colecao: 'Premium',
    preco: 489.90,
    precoAnterior: null,
    parcelas: 8,
    imagem: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop&q=80',
    imagemHover: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=600&fit=crop&q=80',
    descricao: 'Engenharia austríaca em titânio puro. Extremamente leve e resistente. Armação minimalista com parafusos de precisão. O ápice da discrição.',
    cores: ['Grafite', 'Dourado', 'Prata'],
    corSelecionada: 'Grafite',
    tags: ['grau', 'titânio', 'premium', 'minimalista'],
    estoque: 7,
    maisVendido: false,
    novo: true,
    avaliacao: 4.9,
    avaliacoes: 28,
  },
  {
    id: 13,
    nome: 'Paris Elegance',
    slug: 'paris-elegance',
    categoria: 'Óculos de Grau',
    colecao: 'Femme',
    preco: 359.90,
    precoAnterior: 429.90,
    parcelas: 6,
    imagem: 'https://images.unsplash.com/photo-1556015048-4d3aa10df74c?w=600&h=600&fit=crop&q=80',
    imagemHover: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop&q=80',
    descricao: 'A elegância parisiense em cada curva. Cat eye delicado em acetato com tons suaves. Detalhes em metal dourado nas dobradiças.',
    cores: ['Nude', 'Preto', 'Bordô'],
    corSelecionada: 'Nude',
    tags: ['grau', 'cat-eye', 'feminino', 'acetato'],
    estoque: 19,
    maisVendido: true,
    novo: false,
    avaliacao: 4.8,
    avaliacoes: 112,
  },
  {
    id: 14,
    nome: 'Monaco Sport',
    slug: 'monaco-sport',
    categoria: 'Óculos de Sol',
    colecao: 'Essential',
    preco: 269.90,
    precoAnterior: null,
    parcelas: 4,
    imagem: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=600&h=600&fit=crop&q=80',
    imagemHover: 'https://images.unsplash.com/photo-1516642898673-edd1ced3be3e?w=600&h=600&fit=crop&q=80',
    descricao: 'Performance com estilo. Armação esportiva em TR90 com lentes polarizadas. Leveza extrema e aderência perfeita para atividades ao ar livre.',
    cores: ['Preto/Vermelho', 'Azul', 'Preto'],
    corSelecionada: 'Preto/Vermelho',
    tags: ['esportivo', 'polarizado', 'leve'],
    estoque: 40,
    maisVendido: false,
    novo: false,
    avaliacao: 4.3,
    avaliacoes: 58,
  },
];

export default products;

/**
 * Helpers para filtrar produtos
 */
export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);

export const getProductById = (id) => products.find((p) => p.id === id);

export const getBestSellers = () => products.filter((p) => p.maisVendido);

export const getNewProducts = () => products.filter((p) => p.novo);

export const getProductsByCategory = (category) =>
  products.filter((p) => p.categoria === category);

export const getProductsByCollection = (collection) =>
  products.filter((p) => p.colecao === collection);

export const getRelatedProducts = (product, limit = 4) =>
  products
    .filter((p) => p.id !== product.id && p.categoria === product.categoria)
    .slice(0, limit);

export const getAllCategories = () =>
  [...new Set(products.map((p) => p.categoria))];

export const getAllCollections = () =>
  [...new Set(products.map((p) => p.colecao))];

export const getAllColors = () =>
  [...new Set(products.flatMap((p) => p.cores))];

export const getAllTags = () =>
  [...new Set(products.flatMap((p) => p.tags))];

export const searchProducts = (query) => {
  const q = query.toLowerCase().trim();
  if (!q) return products;
  return products.filter(
    (p) =>
      p.nome.toLowerCase().includes(q) ||
      p.categoria.toLowerCase().includes(q) ||
      p.colecao.toLowerCase().includes(q) ||
      p.cores.some((c) => c.toLowerCase().includes(q)) ||
      p.tags.some((t) => t.toLowerCase().includes(q)) ||
      p.descricao.toLowerCase().includes(q)
  );
};
