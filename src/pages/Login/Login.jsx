import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail, UserRound } from 'lucide-react';
import Button from '../../components/Button';
import { useToast } from '../../contexts/ToastContext';
import styles from './Login.module.css';

export default function Login() {
  const { addToast } = useToast();
  const [mode, setMode] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cb_user'));
    } catch {
      return null;
    }
  });
  const [formData, setFormData] = useState({ nome: '', email: '', password: '' });

  useEffect(() => {
    document.title = 'Minha Conta — CHILLI BEANS';
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const account = {
      nome: mode === 'register' ? formData.nome.trim() : user?.nome || formData.email.split('@')[0],
      email: formData.email.trim().toLowerCase(),
    };

    localStorage.setItem('cb_user', JSON.stringify(account));
    setUser(account);
    addToast(mode === 'register' ? 'Conta criada com sucesso!' : 'Acesso realizado com sucesso!');
  };

  const handleLogout = () => {
    localStorage.removeItem('cb_user');
    setUser(null);
    setFormData({ nome: '', email: '', password: '' });
    addToast('Você saiu da sua conta.', { type: 'info' });
  };

  if (user) {
    return (
      <main className={styles.page}>
        <section className={styles.accountCard}>
          <span className={styles.eyebrow}>MINHA CONTA</span>
          <div className={styles.avatar}><UserRound size={28} /></div>
          <h1>Olá, {user.nome}</h1>
          <p className={styles.accountEmail}>{user.email}</p>
          <p className={styles.accountText}>Sua conta está ativa neste dispositivo. Você pode continuar comprando ou acessar o checkout.</p>
          <div className={styles.accountActions}>
            <Button to="/catalogo" variant="outline" size="large">VER CATÁLOGO</Button>
            <Button to="/carrinho" variant="primary" size="large">IR PARA A SACOLA <ArrowRight size={16} /></Button>
          </div>
          <button type="button" className={styles.logout} onClick={handleLogout}>Sair da conta</button>
        </section>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <section className={styles.intro}>
        <span className={styles.eyebrow}>EXPERIÊNCIA EXCLUSIVA</span>
        <h1>Seu estilo,<br /><em>sempre com você.</em></h1>
        <p>Acesse sua conta para agilizar suas compras e acompanhar sua experiência Chilli Beans.</p>
        <ul>
          <li>Checkout mais rápido</li>
          <li>Dados salvos neste dispositivo</li>
          <li>Acesso fácil à sua sacola</li>
        </ul>
      </section>

      <section className={styles.formCard}>
        <div className={styles.tabs} role="tablist" aria-label="Acesso à conta">
          <button type="button" className={mode === 'login' ? styles.activeTab : ''} onClick={() => setMode('login')}>ENTRAR</button>
          <button type="button" className={mode === 'register' ? styles.activeTab : ''} onClick={() => setMode('register')}>CRIAR CONTA</button>
        </div>

        <div className={styles.formHeader}>
          <h2>{mode === 'login' ? 'Bem-vindo de volta' : 'Crie sua conta'}</h2>
          <p>{mode === 'login' ? 'Informe seus dados para continuar.' : 'Leva menos de um minuto.'}</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          {mode === 'register' && (
            <label>
              <span>Nome completo</span>
              <div className={styles.inputWrap}>
                <UserRound size={18} />
                <input name="nome" value={formData.nome} onChange={handleChange} placeholder="Como devemos chamar você?" required />
              </div>
            </label>
          )}

          <label>
            <span>E-mail</span>
            <div className={styles.inputWrap}>
              <Mail size={18} />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="voce@email.com" required />
            </div>
          </label>

          <label>
            <span>Senha</span>
            <div className={styles.inputWrap}>
              <LockKeyhole size={18} />
              <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} placeholder="Mínimo de 6 caracteres" minLength="6" required />
              <button type="button" className={styles.passwordToggle} onClick={() => setShowPassword((current) => !current)} aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}>
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </label>

          <Button type="submit" variant="primary" size="large" fullWidth>
            {mode === 'login' ? 'ENTRAR NA MINHA CONTA' : 'CRIAR MINHA CONTA'} <ArrowRight size={16} />
          </Button>
        </form>

        <p className={styles.legal}>Ao continuar, você concorda com os termos de uso e a política de privacidade.</p>
        <Link to="/catalogo" className={styles.backLink}>Continuar comprando sem entrar</Link>
      </section>
    </main>
  );
}
