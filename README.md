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

## 📦 Build para Produção (HTML Único Standalone)

O projeto está configurado com `vite-plugin-singlefile` e `HashRouter` para gerar **um único arquivo HTML** totalmente autossuficiente (todo o CSS, JavaScript e assets embutidos inline no próprio HTML):

```bash
npm run build
```

O comando gera:
- `dist/index.html`: Arquivo HTML único e independente.
- `docs/index.html`: Cópia automática pronta para o **GitHub Pages**.

### 🌐 Como publicar no GitHub Pages:
1. Faça o commit e envie para o seu repositório:
   ```bash
   git add .
   git commit -m "feat: build html unico para github pages"
   git push
   ```
2. No seu repositório no GitHub, acesse **Settings** > **Pages**.
3. Em **Branch**, selecione a branch `main` e a pasta `/docs`, depois clique em **Save**.
4. Seu site estará no ar gratuitamente em instantes!

