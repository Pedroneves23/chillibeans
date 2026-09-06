import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Truck, Sparkles, ArrowRight, Award, Compass } from 'lucide-react';
import SectionTitle from '../../components/SectionTitle';
import ProductGrid from '../../components/ProductGrid';
import Button from '../../components/Button';
import products, { getBestSellers, getNewProducts } from '../../data/products';
import styles from './Home.module.css';

export default function Home() {
  useEffect(() => {
    document.title = 'CHILLI BEANS — Óculos de Sol, Grau e Estilo Autêntico';
  }, []);

  const bestSellers = getBestSellers().slice(0, 4);
  const newProducts = getNewProducts().slice(0, 4);

  return (
    <div className={styles.home}>
      {/* Editorial Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>COLEÇÃO 2026 / VANGUARDA</span>
            <h1 className={styles.heroTitle}>
              DESIGN PARA QUEM NÃO PASSA DESPERCEBIDO.
            </h1>
            <p className={styles.heroSubtitle}>
              Óculos de sol e armações de grau que desafiam o óbvio. Linhas arquitetônicas, materiais nobres e atitude Chilli Beans.
            </p>
            <div className={styles.heroActions}>
              <Button to="/catalogo" variant="primary" size="large">
                EXPLORAR COLEÇÃO
              </Button>
              <Button to="/mais-vendidos" variant="outline" size="large">
                MAIS VENDIDOS
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Bar */}
      <section className={styles.valueBar}>
        <div className={`container ${styles.valueGrid}`}>
          <div className={styles.valueItem}>
            <Shield className={styles.valueIcon} size={22} />
            <div>
              <h4 className={styles.valueTitle}>Proteção UV400 Total</h4>
              <p className={styles.valueDesc}>Lentes testadas e certificadas</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <Truck className={styles.valueIcon} size={22} />
            <div>
              <h4 className={styles.valueTitle}>Frete Grátis Brasil</h4>
              <p className={styles.valueDesc}>Em compras a partir de R$ 299</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <Award className={styles.valueIcon} size={22} />
            <div>
              <h4 className={styles.valueTitle}>Garantia & Autenticidade</h4>
              <p className={styles.valueDesc}>Peças exclusivas numeradas</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <Sparkles className={styles.valueIcon} size={22} />
            <div>
              <h4 className={styles.valueTitle}>Até 10x Sem Juros</h4>
              <p className={styles.valueDesc}>Parcelamento facilitado no cartão</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured / Best Sellers */}
      <section className={styles.section}>
        <div className="container">
          <SectionTitle
            subtitle="CURADORIA EXCLUSIVA"
            title="OS MAIS DESEJADOS"
            description="Peças que definiram temporadas e continuam sendo o objeto de desejo de quem valoriza presença e personalidade."
          />
          <ProductGrid products={bestSellers} />
          <div className={styles.centerCta}>
            <Button to="/mais-vendidos" variant="outline" size="medium">
              VER TODOS OS MAIS VENDIDOS <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Category Visual Banner Grid */}
      <section className={styles.categoriesSection}>
        <div className="container">
          <SectionTitle
            subtitle="UNIVERSO CHILLI BEANS"
            title="ESCOLHA SUA CATEGORIA"
          />
          <div className={styles.categoryCards}>
            <Link to="/catalogo?cat=Solar" className={`${styles.categoryCard} ${styles.solarCard}`}>
              <div className={styles.categoryCardBg} />
              <div className={styles.categoryContent}>
                <span className={styles.categoryTag}>COLEÇÃO SOLAR</span>
                <h3 className={styles.categoryTitle}>Óculos de Sol</h3>
                <p className={styles.categoryDesc}>Dos clássicos aviadores aos geométricos oversized.</p>
                <span className={styles.categoryLink}>Ver Produtos <ArrowRight size={14} /></span>
              </div>
            </Link>

            <Link to="/catalogo?cat=Grau" className={`${styles.categoryCard} ${styles.grauCard}`}>
              <div className={styles.categoryCardBg} />
              <div className={styles.categoryContent}>
                <span className={styles.categoryTag}>COLEÇÃO OPTICAL</span>
                <h3 className={styles.categoryTitle}>Armações de Grau</h3>
                <p className={styles.categoryDesc}>Leveza, acetato nobre e sofisticação para o seu dia a dia.</p>
                <span className={styles.categoryLink}>Ver Produtos <ArrowRight size={14} /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Editorial Statement */}
      <section className={styles.manifestoSection}>
        <div className="container">
          <div className={styles.manifestoContent}>
            <span className={styles.manifestoEyebrow}>MANIFESTO</span>
            <h2 className={styles.manifestoHeading}>
              "ÓCULOS NÃO SÃO APENAS UM ACESSÓRIO. SÃO A PRIMEIRA COISA QUE AS PESSOAS OLHAM QUANDO OLHAM PARA VOCÊ."
            </h2>
            <p className={styles.manifestoText}>
              Nascemos para questionar a mesmice. Cada armação Chilli Beans carrega pesquisa estética, cortes precisos em acetato italiano e ligas metálicas com resistência aeroespacial.
            </p>
            <Button to="/sobre" variant="outline" size="medium">
              CONHEÇA NOSSA HISTÓRIA
            </Button>
          </div>
        </div>
      </section>

      {/* New Releases Section */}
      <section className={styles.section}>
        <div className="container">
          <SectionTitle
            subtitle="DROP RECENTE"
            title="LANÇAMENTOS DA TEMPORADA"
            description="As novidades que acabaram de chegar aos ateliês e já estão disponíveis em tiragens limitadas."
          />
          <ProductGrid products={newProducts} />
          <div className={styles.centerCta}>
            <Button to="/catalogo" variant="primary" size="medium">
              EXPLORAR TODO O CATÁLOGO <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
