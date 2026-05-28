import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import styles from './UsPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckDouble, faClock, faShieldHalved,
  faListCheck, faHandshake, faHeart,
} from '@fortawesome/free-solid-svg-icons';

const valores = [
  { icon: faCheckDouble, label: 'Cumplimiento'     },
  { icon: faClock,       label: 'Puntualidad'      },
  { icon: faShieldHalved,label: 'Responsabilidad'  },
  { icon: faListCheck,   label: 'Orden y constancia'},
  { icon: faHandshake,   label: 'Respeto'           },
  { icon: faHeart,       label: 'Honestidad'        },
];

const compromisos = [
  'El cumplimiento de los acuerdos establecidos.',
  'El respeto por los tiempos y condiciones del servicio.',
  'La responsabilidad en cada intervención.',
  'La comunicación clara y oportuna con nuestros clientes.',
];

export default function UsPage() {
  return (
    <div className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOrb1} />
        <div className={styles.heroOrb2} />
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>Golestan SRL</span>
          <h1 className={styles.heroTitle}>¿Quiénes<br />somos?</h1>
          <div className={styles.heroDivider} />
          <p className={styles.heroSub}>
            Una empresa boliviana con experiencia, orden y compromiso.
          </p>
        </div>
        <div className={styles.heroScroll}>
          <span />
        </div>
      </section>

      {/* RESEÑA */}
      <section className={styles.resena}>
        <div className={styles.resenaInner} data-aos="fade-up">
          <div className={styles.resenaTag}>Nuestra historia</div>
          <h2 className={styles.resenaTitle}>
            Experiencia que <em>habla por sí sola</em>
          </h2>
          <div className={styles.resenaGrid}>
            <div className={styles.resenaCard} data-aos="fade-right" data-aos-delay="100">
              <div className={styles.resenaCardAccent} />
              <p>
                <strong>GOLESTAN SRL</strong> es una empresa boliviana dedicada a la
                prestación de servicios integrales de mantenimiento de jardines,
                piscinas y áreas comunes para condominios, viviendas y empresas.
              </p>
            </div>
            <div className={styles.resenaCard} data-aos="fade-left" data-aos-delay="200">
              <div className={styles.resenaCardAccent} />
              <p>
                La empresa da continuidad a la experiencia operativa desarrollada
                previamente bajo la denominación <strong>SERVICIOS ANDES</strong>,
                manteniendo el mismo enfoque de trabajo, el conocimiento del rubro
                y el compromiso con la regularidad y el cumplimiento del servicio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className={styles.mvSection}>
        <div className={styles.mvBg} />
        <div className={styles.mvInner}>

          <div className={styles.mvCard} data-aos="fade-up" data-aos-delay="0">
            <div className={styles.mvCardTop}>
              <span className={styles.mvIcon}>🎯</span>
              <h3>Misión</h3>
            </div>
            <p>
              Prestar servicios integrales de mantenimiento de jardines, piscinas
              y áreas comunes, aportando a la conservación y funcionalidad de los
              espacios.
            </p>
          </div>

          <div className={styles.mvCard} data-aos="fade-up" data-aos-delay="150">
            <div className={styles.mvCardTop}>
              <span className={styles.mvIcon}>🔭</span>
              <h3>Visión</h3>
            </div>
            <p>
              Consolidarse como una empresa referente en Santa Cruz en servicios
              integrales de mantenimiento de jardines, piscinas y áreas comunes,
              con una operación formalizada y sostenible.
            </p>
          </div>

        </div>
      </section>

      {/* VALORES */}
      <section className={styles.valores} data-aos="fade-up">
        <div className={styles.valoresInner}>
          <span className={styles.valoresEyebrow}>Lo que nos define</span>
          <h2 className={styles.valoresTitle}>Nuestros Valores</h2>
          <div className={styles.valoresGrid}>
            {valores.map((v, i) => (
              <div
                key={i}
                className={styles.valorCard}
                data-aos="zoom-in"
                data-aos-delay={i * 80}
              >
                <div className={styles.valorIconWrap}>
                  <FontAwesomeIcon icon={v.icon} className={styles.valorIcon} />
                </div>
                <span className={styles.valorLabel}>{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POLÍTICA DE CALIDAD */}
      <section className={styles.calidad}>
        <div className={styles.calidadInner}>
          <div className={styles.calidadContent} data-aos="fade-right">
            <span className={styles.calidadEyebrow}>Nuestro estándar</span>
            <h2 className={styles.calidadTitle}>Política de Calidad</h2>
            <p className={styles.calidadText}>
              GOLESTAN SRL se compromete a prestar servicios integrales de
              mantenimiento de jardines, piscinas y áreas comunes de manera
              <strong> constante y planificada</strong>, cumpliendo los acuerdos
              establecidos con sus clientes, a través de un equipo con experiencia
              y conocimiento, el uso adecuado de herramientas e insumos, una
              organización ordenada del trabajo y la <strong>mejora continua</strong> de
              su gestión operativa, con el fin de asegurar la conservación y
              funcionalidad de los espacios intervenidos.
            </p>
          </div>
          <div className={styles.calidadVisual} data-aos="fade-left">
            <div className={styles.calidadRing}>
              <div className={styles.calidadRingInner}>
                <span className={styles.calidadRingIcon}>✦</span>
                <span className={styles.calidadRingText}>Calidad</span>
                <span className={styles.calidadRingText}>garantizada</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPROMISOS */}
      <section className={styles.compromisos} data-aos="fade-up">
        <div className={styles.compromisosInner}>
          <span className={styles.compromisosEyebrow}>Nuestra promesa</span>
          <h2 className={styles.compromisosTitle}>
            Compromiso con<br />nuestros clientes
          </h2>
          <div className={styles.compromisosGrid}>
            {compromisos.map((item, i) => (
              <div
                key={i}
                className={styles.compromisoItem}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className={styles.compromisoNum}>0{i + 1}</div>
                <p className={styles.compromisoText}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className={styles.cta} data-aos="fade-up">
        <div className={styles.ctaInner}>
          <h2>¿Quieres trabajar con nosotros?</h2>
          <p>Escríbenos y recibe una propuesta sin compromiso.</p>
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