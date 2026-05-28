import { Link } from 'react-router';
import styles from './SystemPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClipboardList, faCalendarCheck, faUserCheck, faShieldHalved,
  faBuilding, faHouse, faTree,
  faLayerGroup, faRotate, faHandshake,
  faSeedling, faPersonSwimming, faBroom,
} from '@fortawesome/free-solid-svg-icons';

const clientes = [
  { icon: faBuilding, label: 'Condominios horizontales y verticales' },
  { icon: faHouse,    label: 'Viviendas particulares con jardines o piscinas' },
  { icon: faTree,     label: 'Empresas con áreas verdes o recreativas' },
];

const propuesta = [
  { icon: faLayerGroup,    title: 'Un solo proveedor', desc: 'Solución integral que reduce la necesidad de múltiples contratistas y simplifica la gestión.' },
  { icon: faRotate,        title: 'Regularidad',       desc: 'Ejecución continua y previsible que mantiene los espacios en condiciones adecuadas a lo largo del tiempo.' },
  { icon: faHandshake,     title: 'Cumplimiento',      desc: 'Respeto por los compromisos asumidos en alcances, frecuencias y condiciones del servicio.' },
];

const equipo = [
  { icon: faSeedling,        label: 'Jardinería'        },
  { icon: faPersonSwimming,  label: 'Piscinas'          },
  { icon: faBroom,           label: 'Limpieza'          },
];

export default function SystemPage() {
  return (
    <div className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOrb1} />
        <div className={styles.heroOrb2} />
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>Golestan SRL</span>
          <h1 className={styles.heroTitle}>Sistema de<br />Gestión</h1>
          <div className={styles.heroDivider} />
          <p className={styles.heroSub}>
            Planificación, regularidad y orden en cada servicio.
          </p>
        </div>
        <div className={styles.heroScroll}>
          <span />
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className={styles.como} data-aos="fade-up">
        <div className={styles.comoInner}>
          <div className={styles.comoContent}>
            <span className={styles.eyebrow}>Cómo trabajamos</span>
            <h2 className={styles.sectionTitle}>
              Orden y <em>previsibilidad</em>
            </h2>
            <p className={styles.bodyText}>
              Nuestro trabajo se basa en la planificación, la regularidad y el orden
              en la ejecución de los servicios.
            </p>
            <p className={styles.bodyText}>
              Definimos alcances claros, frecuencias de atención y responsables,
              asegurando una ejecución constante y previsible que permita mantener
              los espacios en condiciones adecuadas a lo largo del tiempo.
            </p>
          </div>
          <div className={styles.comoPillars}>
            {[
              { icon: faClipboardList,  title: 'Planificación',  desc: 'Alcances y frecuencias definidos desde el inicio.' },
              { icon: faCalendarCheck,  title: 'Regularidad',    desc: 'Atención constante sin interrupciones.' },
              { icon: faUserCheck,      title: 'Responsables',   desc: 'Equipo asignado con roles claros.' },
              { icon: faShieldHalved,   title: 'Previsibilidad', desc: 'Ejecución ordenada y sin sorpresas.' },
            ].map((p, i) => (
              <div key={i} className={styles.pillarCard} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className={styles.pillarIconWrap}>
                  <FontAwesomeIcon icon={p.icon} className={styles.pillarIcon} />
                </div>
                <h4 className={styles.pillarTitle}>{p.title}</h4>
                <p className={styles.pillarDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A QUIÉNES ATENDEMOS */}
      <section className={styles.clientes} data-aos="fade-up">
        <div className={styles.clientesInner}>
          <span className={styles.eyebrowLight}>A quiénes atendemos</span>
          <h2 className={styles.sectionTitleLight}>
            Clientes que buscan <em>continuidad</em>
          </h2>
          <p className={styles.bodyTextLight}>
            Atendemos a clientes que requieren continuidad y confiabilidad en el
            mantenimiento de sus espacios.
          </p>
          <div className={styles.clientesGrid}>
            {clientes.map((c, i) => (
              <div
                key={i}
                className={styles.clienteCard}
                data-aos="fade-up"
                data-aos-delay={i * 120}
              >
                <div className={styles.clienteIconWrap}>
                  <FontAwesomeIcon icon={c.icon} className={styles.clienteIcon} />
                </div>
                <p className={styles.clienteLabel}>{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROPUESTA DE VALOR */}
      <section className={styles.propuesta} data-aos="fade-up">
        <div className={styles.propuestaInner}>
          <span className={styles.eyebrow}>Propuesta de valor</span>
          <h2 className={styles.sectionTitle}>
            Una solución <em>integral</em>
          </h2>
          <p className={styles.bodyText}>
            GOLESTAN SRL ofrece una solución integral de mantenimiento a través
            de un solo proveedor, reduciendo la necesidad de múltiples contratistas
            y facilitando la gestión del servicio.
          </p>
          <div className={styles.propuestaGrid}>
            {propuesta.map((item, i) => (
              <div
                key={i}
                className={styles.propuestaCard}
                data-aos="zoom-in"
                data-aos-delay={i * 120}
              >
                <div className={styles.propuestaIconWrap}>
                  <FontAwesomeIcon icon={item.icon} className={styles.propuestaIcon} />
                </div>
                <h4 className={styles.propuestaTitle}>{item.title}</h4>
                <p className={styles.propuestaDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPO Y CAPACIDAD */}
      <section className={styles.equipo} data-aos="fade-up">
        <div className={styles.equipoInner}>

          <div className={styles.equipoContent} data-aos="fade-right">
            <span className={styles.eyebrowLight}>Equipo y capacidad operativa</span>
            <h2 className={styles.sectionTitleLight}>
              Experiencia que <em>respalda</em>
            </h2>
            <p className={styles.bodyTextLight}>
              Contamos con un equipo de trabajo con experiencia y conocimiento en
              jardinería, mantenimiento de piscinas y limpieza de áreas comunes.
            </p>
            <p className={styles.bodyTextLight}>
              Disponemos de herramientas, equipos e insumos adecuados para la
              correcta ejecución de los servicios, lo que nos permite atender de
              manera continua y ordenada a nuestros clientes.
            </p>
            <div className={styles.equipoAreas}>
              {equipo.map((e, i) => (
                <div key={i} className={styles.equipoArea}>
                  <FontAwesomeIcon icon={e.icon} className={styles.equipoAreaIcon} />
                  <span>{e.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.equipoVisual} data-aos="fade-left">
            <div className={styles.equipoRing}>
              <div className={styles.equipoRingInner}>
                <span className={styles.equipoRingIcon}>⚙️</span>
                <span className={styles.equipoRingText}>Capacidad</span>
                <span className={styles.equipoRingText}>operativa</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta} data-aos="fade-up">
        <div className={styles.ctaInner}>
          <h2>¿Quieres que gestionemos tu espacio?</h2>
          <p>Escribenos y recibe una propuesta sin compromiso.</p>
          <div className={styles.ctaBtns}>
            <a
              href="https://wa.me/+59178676716"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaWhatsapp}
            >
              💬 WhatsApp
            </a>
            <Link to="/catalogo" className={styles.ctaServicios}>
              Ver servicios
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}