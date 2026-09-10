import { useEffect } from 'react';
import SectionTitle from '../../components/SectionTitle';
import Button from '../../components/Button';
import { Eye, Shield, Sparkles, Award } from 'lucide-react';
import styles from './About.module.css';

export default function About() {
  useEffect(() => {
    document.title = 'Nossa História — CHILLI BEANS';
  }, []);

  return (
    <div className={styles.aboutPage}>
      {/* Editorial Header */}
      <section className={styles.heroBanner}>
        <div className={`container ${styles.heroInner}`}>
          <span className={styles.eyebrow}>DESDE 1997</span>
          <h1 className={styles.title}>NASCEMOS PARA DESAFIAR O CONVENCIONAL</h1>
          <p className={styles.lead}>
            A Chilli Beans começou no Mercado Mundo Mix e se transformou na maior rede especializada em óculos escuros e armações de grau da América Latina.
          </p>
        </div>
      </section>

      {/* Manifesto Section with image */}
      <section className={`container ${styles.contentSection}`}>
        <div className={styles.contentGrid}>
          <div className={styles.imageBlock}>
            <img
              src="/images/oculos-cat-eye-preto.png"
              alt="Estilo e Atitude Chilli Beans"
              className={styles.storyImg}
            />
          </div>

          <div className={styles.textBlock}>
            <span className={styles.subTag}>ATITUDE & DESIGN</span>
            <h2>Mais que óculos: uma extensão da sua identidade</h2>
            <p>
              Não seguimos tendências prontas; criamos conceitos. Nossas coleções semanais trazem parcerias com ícones da música, da moda, da arte e da cultura pop global.
            </p>
            <p>
              Cada armação é projetada com acetato italiano de alta densidade, titânio cirúrgico e ligas de precisão, garantindo conforto duradouro para uso o dia inteiro.
            </p>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statNum}>+1000</span>
                <span className={styles.statLabel}>Pontos de venda no mundo</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>100%</span>
                <span className={styles.statLabel}>Proteção UV400 Certificada</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>+25</span>
                <span className={styles.statLabel}>Anos de Vanguarda Fashion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className={styles.pillarsSection}>
        <div className="container">
          <SectionTitle
            subtitle="NOSSOS PILARES"
            title="O QUE NOS MOVE"
          />
          <div className={styles.pillarsGrid}>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIconWrap}>
                <Sparkles className={styles.pillarIcon} size={26} />
              </div>
              <h3>Provocação Contínua</h3>
              <p>Designs que quebram o padrão conservador da ótica tradicional e expressam quem você é sem pedir desculpas.</p>
            </div>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIconWrap}>
                <Eye className={styles.pillarIcon} size={26} />
              </div>
              <h3>Engenharia Óptica</h3>
              <p>Lentes polarizadas com nitidez cristalina, proteção UV400 completa e tecnologia antirreflexo multicamadas.</p>
            </div>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIconWrap}>
                <Award className={styles.pillarIcon} size={26} />
              </div>
              <h3>Acabamento Artesanal</h3>
              <p>Polimento manual de acetato, charneiras reforçadas com 5 a 7 dentes e encaixe ergonômico feito para o rosto brasileiro.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Pronto para encontrar seu novo modelo?</h2>
          <p>Explore nosso acervo completo e sinta a diferença no seu dia a dia.</p>
          <Button to="/catalogo" variant="primary" size="large">
            VER CATÁLOGO COMPLETO
          </Button>
        </div>
      </section>
    </div>
  );
}
