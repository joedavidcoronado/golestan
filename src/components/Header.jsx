import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import styles from './Header.module.css';

const navLinks = [
  { label: 'Home',            to: '/' },
  { label: '¿Quiénes somos?', to: '/quienes-somos' },
  { label: 'Servicios',       to: '/catalogo' },
  { label: 'Gestión',         to: '/sistema-de-gestion' },
  { label: 'Experiencias',    to: '/experiencias' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>

          <Link to="/" className={styles.logo}>
            <img src="/logoGoles.png" alt="Golestan" className={styles.logoImg} />
          </Link>

          <nav className={styles.nav} aria-label="Navegación principal">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`${styles.navLink} ${location.pathname === link.to ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/NUMERO_CORPORATIVO"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navCta}
            >
              Contáctanos
            </a>
          </nav>

          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Dropdown pequeño debajo del header */}
        {menuOpen && (
          <div className={styles.mobileMenu}>
            <nav className={styles.mobileNav} aria-label="Menú móvil">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`${styles.mobileNavLink} ${location.pathname === link.to ? styles.active : ''}`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/NUMERO_CORPORATIVO"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileCta}
              >
                💬 Contáctanos
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}