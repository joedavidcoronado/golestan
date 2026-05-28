import { Link } from 'react-router';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Columna 1: Branding & Redes Sociales */}
        <div className={styles.brandCol}>
          <img 
            src="/logoGoles.png" 
            alt="Golestan" 
            className={styles.logo} 
          />
          <p className={styles.tagline}>
            Transformamos tus espacios exteriores en experiencias naturales únicas y duraderas.
          </p>
          
          {/* Redes Sociales */}
          <div className={styles.socialWrapper}>
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialLink}
              aria-label="Facebook Golestan"
            >
              <svg viewBox="0 0 24 24" className={styles.socialIcon}>
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </a>
            
            <a 
              href="https://www.instagram.com/golestan.s.r.l?igsh=MXYzZW5ibjV6bW5oaQ==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialLink}
              aria-label="Instagram Golestan"
            >
              <svg viewBox="0 0 24 24" className={styles.socialIcon}>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>

            <a 
              href="https://www.tiktok.com/@golestan.s.r.l?_r=1&_t=ZS-96PeGCS8oYG" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialLink}
              aria-label="TikTok Golestan"
            >
              <svg viewBox="0 0 24 24" className={styles.socialIcon}>
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.01 1.63 4.14.99 1.11 2.37 1.83 3.84 2.06v3.91c-1.68-.04-3.32-.56-4.73-1.48-.38-.25-.73-.53-1.05-.85V14.5c.06 2.45-.9 4.88-2.67 6.58-1.92 1.85-4.63 2.75-7.27 2.41-2.92-.36-5.54-2.31-6.59-5.07C-1.4 15.28-.27 11.53 2.48 9.6c1.99-1.41 4.54-1.74 6.82-1.03v4.06c-1.42-.51-3.03-.22-4.18.78-.99.85-1.43 2.19-1.2 3.47.23 1.25 1.15 2.29 2.37 2.64 1.46.43 3.12-.13 3.97-1.41.44-.64.64-1.41.61-2.18V.02z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Columna 2: Navegación */}
        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Explora</h4>
          <ul className={styles.linksList}>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/catalogo">Servicios</Link></li>
            <li><Link to="/experiencias">Experiencias</Link></li>
            <li><Link to="/contactanos">Contacto</Link></li>
          </ul>
        </div>

        {/* Columna 3: Información de Contacto */}
        <div className={styles.contactCol}>
          <h4 className={styles.colTitle}>Contacto</h4>
          <ul className={styles.contactInfo}>
            <li>
              <span className={styles.icon}>📍</span>
              <span className={styles.text}>Santa Cruz de la Sierra, Bolivia</span>
            </li>
            <li>
              <span className={styles.icon}>💬</span>
              <a href="https://wa.me/59169112306" target="_blank" rel="noopener noreferrer" className={styles.link}>
                +591 69112306
              </a>
            </li>
            <li>
              <span className={styles.icon}>✉️</span>
              <a href="mailto:golestansrl@gmail.com" className={styles.link}>
                golestansrl@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Barra Inferior de Copyright */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomContainer}>
          <p className={styles.copyright}>
            &copy; {currentYear} <strong>GOLESTAN S.R.L.</strong> Todos los derechos reservados.
          </p>
          <p className={styles.legal}>
            Sociedad de Responsabilidad Limitada
          </p>
        </div>
      </div>
    </footer>
  );
}