import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Upper newsletter bar */}
      <div className={styles.newsletterBar}>
        <div className={`container ${styles.newsletterInner}`}>
          <div className={styles.newsletterContent}>
            <h3 className={styles.newsletterTitle}>RECEBA AVISOS EXCLUSIVOS</h3>
            <p className={styles.newsletterSubtitle}>
              Seja o primeiro a conhecer lançamentos de edições limitadas e colaborações especiais.
            </p>
          </div>
          <form className={styles.newsletterForm} onSubmit={(e) => { e.preventDefault(); alert('Inscrição confirmada com sucesso!'); }}>
            <div className={styles.inputGroup}>
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                required
                className={styles.emailInput}
              />
              <button type="submit" className={styles.submitBtn} aria-label="Inscrever-se">
                <span>INSCREVER</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Main footer columns */}
      <div className={`container ${styles.main}`}>
        <div className={styles.columnBrand}>
          <Link to="/" className={styles.brandLogo}>CHILLI BEANS</Link>
          <p className={styles.brandDesc}>
            Provocação, autenticidade e design de vanguarda. Criamos óculos de sol, armações de grau e acessórios para quem dita seu próprio estilo.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialIcon}>
              <Instagram size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={styles.socialIcon}>
              <Facebook size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={styles.socialIcon}>
              <Twitter size={18} />
            </a>
          </div>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>COLEÇÕES</h4>
          <ul className={styles.linksList}>
            <li><Link to="/catalogo?cat=Solar">Óculos de Sol</Link></li>
            <li><Link to="/catalogo?cat=Grau">Armações de Grau</Link></li>
            <li><Link to="/mais-vendidos">Mais Vendidos</Link></li>
            <li><Link to="/catalogo?tag=EdicaoLimitada">Edições Limitadas</Link></li>
            <li><Link to="/catalogo?tag=Collabs">Collabs Exclusivas</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>ATENDIMENTO</h4>
          <ul className={styles.linksList}>
            <li><Link to="/sobre">Nossa História</Link></li>
            <li><Link to="/sobre#garantia">Garantia & Trocas</Link></li>
            <li><Link to="/sobre#cuidados">Guia de Cuidados</Link></li>
            <li><Link to="/sobre#faq">Perguntas Frequentes</Link></li>
            <li><Link to="/sobre#contato">Fale Conosco</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>CONTATO</h4>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <MapPin size={16} />
              <span>Av. Paulista, 1000 — Jardins, SP</span>
            </li>
            <li className={styles.contactItem}>
              <Phone size={16} />
              <span>0800 555 2445</span>
            </li>
            <li className={styles.contactItem}>
              <Mail size={16} />
              <span>contato@chillibeans.com.br</span>
            </li>
          </ul>
          <div className={styles.badgeSecurity}>
            <span className={styles.securityText}>COMPRA 100% SEGURA</span>
            <span className={styles.securitySub}>Criptografia SSL de 256 bits</span>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copyright}>
            © {currentYear} CHILLI BEANS. Todos os direitos reservados. E-commerce Premium Concept.
          </p>
          <div className={styles.bottomLinks}>
            <span>Termos de Uso</span>
            <span>Privacidade</span>
            <span>Segurança</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
