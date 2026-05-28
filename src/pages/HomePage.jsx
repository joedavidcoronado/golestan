import { Link } from 'react-router';
import { useState, useEffect  } from 'react';
import styles from './HomePage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faPersonSwimming, faBroom,
         faBuilding, faHotel, faTree, faHouse,
         faCity, faLandmark, faStore, faIndustry 
} from '@fortawesome/free-solid-svg-icons';

const clients = Array.from({ length: 6 }, (_, i) => ({
  name: `Cliente ${i + 1}`,
  src: `/logosClients/${i + 1}.png`,
}));

const images = Array.from({ length: 14 }, (_, i) => ({
  id: i + 1,
  src: `/assets/${i + 1}.jpeg`,
  alt: `Experiencia Golestan ${i + 1}`,
}));

export default function HomePage() {

  const [lightbox, setLightbox]     = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOrb1} />
        <div className={styles.heroOrb2} />
        <div className={styles.heroContent}>
          <img
            src="/logoGoles.png"
            alt="Golestan"
            className={styles.heroLogo}
          />
          <p className={styles.heroTagline}>
            Transformamos tus espacios exteriores en experiencias naturales únicas.
          </p>
          <div className={styles.heroCtas}>
            <Link to="/catalogo" className={styles.ctaPrimary}>Ver servicios</Link>
            <Link to="/contactanos" className={styles.ctaSecondary}>Contáctanos</Link>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className={styles.services} data-aos="fade-up">
        <h2 className={styles.sectionTitle}>Nuestros Servicios</h2>
        <div className={styles.servicesGrid}>
          <Link to="/catalogo#jardineria" className={styles.serviceCard}>
            <span className={styles.serviceIcon}><FontAwesomeIcon icon={faSeedling} /></span>
            <h3>Jardinería</h3>
            <p>Diseño, siembra y mantenimiento de jardines a tu medida.</p>
          </Link>
          <Link to="/catalogo#piscinas" className={styles.serviceCard}>
            <span className={styles.serviceIcon}><FontAwesomeIcon icon={faPersonSwimming} /></span>
            <h3>Piscinas</h3>
            <p>Limpieza, tratamiento y mantenimiento de piscinas.</p>
          </Link>
          <Link to="/catalogo#limpieza" className={styles.serviceCard}>
            <span className={styles.serviceIcon}><FontAwesomeIcon icon={faBroom} /></span>
            <h3>Limpieza</h3>
            <p>Servicios integrales de limpieza para espacios exteriores.</p>
          </Link>
        </div>
        <Link to="/catalogo" className={styles.linkMore}>Ver catálogo completo →</Link>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className={styles.about} data-aos="fade-up">

        {/* Imagen */}
        <div className={styles.aboutImgWrapper}>
          <img
            src="/somos.jpg"
            alt="Equipo Golestan"
            className={styles.aboutImg}
          />
          <div className={styles.aboutImgBadge}>
            <span className={styles.aboutBadgeNum}>+5</span>
            <span className={styles.aboutBadgeText}>años de experiencia</span>
          </div>
        </div>

        {/* Contenido */}
        <div className={styles.aboutContent}>
          <span className={styles.aboutEyebrow}>¿Quiénes somos?</span>
          <h2 className={styles.aboutTitle}>
            Cuidamos tus espacios con <em>pasión y precisión</em>
          </h2>
          <p className={styles.aboutText}>
            Golestan es una empresa comprometida con el cuidado, el orden y la
            belleza de los espacios verdes y acuáticos. Trabajamos con pasión,
            responsabilidad y los más altos estándares de calidad para ofrecerte
            resultados que duran.
          </p>

          {/* Stats */}
          <div className={styles.aboutStats}>
            <div className={styles.aboutStat}>
              <span className={styles.aboutStatNum}>+100</span>
              <span className={styles.aboutStatLabel}>Clientes satisfechos</span>
            </div>
            <div className={styles.aboutStatDivider} />
            <div className={styles.aboutStat}>
              <span className={styles.aboutStatNum}>3</span>
              <span className={styles.aboutStatLabel}>Servicios especializados</span>
            </div>
            <div className={styles.aboutStatDivider} />
            <div className={styles.aboutStat}>
              <span className={styles.aboutStatNum}>100%</span>
              <span className={styles.aboutStatLabel}>Compromiso garantizado</span>
            </div>
          </div>

          <Link to="/quienes-somos" className={styles.linkMore}>
            Conoce nuestra historia →
          </Link>
        </div>

      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className={styles.system} data-aos="fade-up">
        <h2 className={styles.sectionTitleLight}>¿Cómo trabajamos?</h2>
        <div className={styles.systemGrid}>
          {[
            { icon: '🔍', title: 'Diagnóstico',   desc: 'Evaluamos tus espacios y necesidades.' },
            { icon: '📐', title: 'Planificación', desc: 'Diseñamos una propuesta personalizada.' },
            { icon: '⚙️', title: 'Ejecución',     desc: 'Nuestro equipo experto entra en acción.' },
            { icon: '✅', title: 'Seguimiento',   desc: 'Garantizamos resultados y satisfacción.' },
          ].map((step, i) => (
            <div
              key={i}
              className={styles.systemStep}
              data-aos="fade-up"
              data-aos-delay={i * 120}
            >
              <span className={styles.stepIcon}>{step.icon}</span>
              <p className={styles.stepDesc}>{step.desc}</p>
              <h4 className={styles.stepTitle}>{step.title}</h4>
            </div>
          ))}
        </div>
        <Link to="/sistema-de-gestion" className={styles.linkMoreLight}>
          Ver sistema de gestión →
        </Link>
      </section>

      {/* NUESTROS CLIENTES */}
      <div className={styles.clientsSection}>
        <div className={styles.clientsDivider}>
          <span className={styles.clientsDividerLine} />
          <span className={styles.clientsDividerText}>Nuestros Clientes</span>
          <span className={styles.clientsDividerLine} />
        </div>

        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeTrack}>
            {[...Array(2)].map((_, repeat) =>
              clients.map((client, i) => (
                <div key={`${repeat}-${i}`} className={styles.clientLogo}>
                  <img
                    src={client.src}
                    alt={client.name}
                    className={styles.clientImg}
                    loading="lazy"
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* EXPERIENCIAS */}
      <section className={styles.experiences}>

        {/* Slideshow de fondo */}
        <div className={styles.expSlideshow}>
          {images.map((img, i) => (
            <div
              key={img.id}
              className={`${styles.expSlide} ${i === activeSlide ? styles.expSlideActive : ''}`}
              style={{
                backgroundImage: `url(${img.src})`,
                animation: i === activeSlide
                  ? `kenburns${i % 4} 7s ease-out forwards`
                  : 'none',
              }}
            />
          ))}
          <div className={styles.expGradient} />
        </div>

        {/* Contenido */}
        <div className={styles.expContent} data-aos="fade-up">
          <h2 className={styles.sectionTitleLight}>Experiencias</h2>
          <p className={styles.expSubtitle}>
            Los resultados hablan por sí solos.
          </p>
          <Link to="/experiencias" className={styles.expBtn}>
            Ver galería →
          </Link>
        </div>

        {/* Indicadores */}
        <div className={styles.expDots}>
          {images.map((_, i) => (
            <button
              key={i}
              className={`${styles.expDot} ${i === activeSlide ? styles.expDotActive : ''}`}
              onClick={() => setActiveSlide(i)}
              aria-label={`Imagen ${i + 1}`}
            />
          ))}
        </div>

      </section>

      {/* CONTACTO CTA */}
      <section className={styles.contact} data-aos="fade-up">
        <div className={styles.contactInner}>
          <h2>¿Listo para transformar tu espacio?</h2>
          <p>Escríbenos por WhatsApp y recibe una propuesta sin compromiso.</p>
          <a 
            href="https://wa.me/+59178676716"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
          >
            💬 WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
}