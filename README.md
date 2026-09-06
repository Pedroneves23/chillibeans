# CHILLI BEANS — E-Commerce Premium Concept

Website e-commerce de alto nível para a marca **CHILLI BEANS**, focado em design editorial fashion, conversão de vendas, tipografia refinada e experiência do usuário ágil e fluida.

---

## 🕶️ Características Principais

* **Identidade Visual Marcante**: Estética editorial contemporânea, paleta monocromática premium com toques do vermelho autêntico Chilli Beans.
* **Tipografia Exclusiva Serif**: Combinação de *Playfair Display* para títulos imponentes e *Lora* para leitura agradável e interface sofisticada.
* **Catálogo Completo**: Filtros por categoria (Sol e Grau), coleções, ordenação por preço e popularidade, além de busca instantânea com preview de itens.
* **Página de Produto (PDP)**: Galeria com múltiplas perspectivas, seleção dinâmica de cores, cálculo de parcelas sem juros, benefícios e selos de segurança.
* **Carrinho Persistente**: Gerenciamento de itens com persistência automática no `localStorage`, cálculo de frete simulado e aplicação de cupons (`CHILLI10`).
* **Checkout Otimizado**: Fluxo simplificado em 3 etapas (Identificação, Entrega e Pagamento com suporte a PIX com desconto, Cartão e Boleto).
* **100% Responsivo**: Otimizado para mobile, tablet e desktop.

---

## 🛠️ Stack Tecnológica

* **Core**: [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/)
* **Roteamento**: [React Router v6](https://reactrouter.com/)
* **Estilização**: CSS Modules nativo (Vanilla CSS) com design tokens
* **Ícones**: [Lucide React](https://lucide.dev/)
* **Gerenciamento de Estado**: Context API (Carrinho, Busca e Notificações Toast)

---

## 🚀 Como Executar Localmente

### Pré-requisitos
* [Node.js](https://nodejs.org/) (versão 18+ recomendada)

### Passo a passo

1. Abra o terminal na pasta do projeto:
```bash
cd "c:\Users\Pedro\Desktop\Modelos de Sites\chilli-beans"
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

---

## 📦 Build para Produção

Para gerar os arquivos otimizados prontos para hospedagem (Vercel, Netlify, etc.):
```bash
npm run build
```
Os arquivos gerados ficarão na pasta `dist/`.
