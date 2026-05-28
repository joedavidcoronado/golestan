import styles from './ContactPage.module.css';

export default function ContactPage() {
  return (
    <div className={styles.viewport}>
      {/* Orbes decorativos de fondo */}
      <div className={styles.orbPrimary} />
      <div className={styles.orbSecondary} />

      <div className={styles.cardContainer}>
        {/* Encabezado con Logo */}
        <header className={styles.header}>
          <img 
            src="/logoGoles.png" 
            alt="Golestan" 
            className={styles.logo} 
          />
          <h1 className={styles.title}>Contacto & Legal</h1>
          <p className={styles.subtitle}>Santa Cruz, Bolivia</p>
        </header>

        {/* Bloques de Información */}
        <div className={styles.infoWrapper}>
          
          {/* Información Legal */}
          <div className={styles.infoBlock}>
            <h2 className={styles.blockTitle}>Información Legal y Corporativa</h2>
            <ul className={styles.infoList}>
              <li>
                <span className={styles.label}>Razón Social:</span>
                <span className={styles.value}>GOLESTAN S.R.L.</span>
              </li>
              <li>
                <span className={styles.label}>Tipo de Empresa:</span>
                <span className={styles.value}>Sociedad de Responsabilidad Limitada</span>
              </li>
              <li>
                <span className={styles.label}>Domicilio:</span>
                <span className={styles.value}>Ciudad de Santa Cruz de la Sierra</span>
              </li>
              <li>
                <span className={styles.label}>Representación:</span>
                <span className={styles.value}>Gerencia General</span>
              </li>
            </ul>
          </div>

          {/* Datos de Contacto */}
          <div className={styles.infoBlock}>
            <h2 className={styles.blockTitle}>Datos de Contacto</h2>
            <ul className={styles.infoList}>
              <li>
                <span className={styles.label}>Zona de Operación:</span>
                <span className={styles.value}>Santa Cruz</span>
              </li>
              <li>
                <span className={styles.label}>Correo Electrónico:</span>
                <a href="mailto:golestansrl@gmail.com" className={styles.link}>
                  golestansrl@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Main Call to Action (Espectacular) */}
        <footer className={styles.actions}>
          <a 
            href="https://wa.me/59169112306" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.whatsappCta}
          >
            <span className={styles.whatsappIcon}>💬</span>
            <div className={styles.ctaTextWrapper}>
              <span className={styles.ctaLabel}>Escríbenos ahora</span>
            </div>
          </a>
        </footer>
      </div>
    </div>
  );
}