import { useState } from 'react';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faPersonSwimming, faBroom, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import styles from './ServicesPage.module.css';

const data = {
  jardineria: {
    id: 'jardineria',
    label: 'Jardinería',
    icon: faSeedling,
    accent: '#8AF003',
    hero: 'Transformamos cada espacio verde en un ecosistema vivo.',
    basic: {
      title: 'Mantenimiento Básico',
      items: [
        { name: 'Desyerbado', desc: 'Eliminación de maleza y hierbas no deseadas para mantener áreas limpias y saludables.' },
        { name: 'Despatillado', desc: 'Recorte y limpieza de bordes, hojas secas o crecimiento desordenado para mejorar la apariencia del jardín.' },
        { name: 'Poda de plantas', desc: 'Corte y mantenimiento de plantas y arbustos para estimular su crecimiento y conservar su forma.' },
        { name: 'Corte de césped', desc: 'Podado regular del pasto para mantenerlo uniforme, limpio y estético.' },
        { name: 'Remoción de tierra en islas', desc: 'Limpieza, nivelación o reemplazo de tierra en áreas decorativas o jardineras.' },
        { name: 'Control de plagas temporales', desc: 'Tratamientos preventivos o correctivos básicos para reducir plagas comunes en temporadas específicas.' },
      ],
    },
    extra: {
      title: 'Servicios Adicionales y Personalizados',
      items: [
        { name: 'Fumigación o tratamiento específico', desc: 'Aplicación de productos especializados para plagas, hongos o enfermedades.' },
        { name: 'Poda de árboles', desc: 'Corte y mantenimiento de árboles para seguridad, salud y mejor presentación.' },
        { name: 'Remodelación de jardín', desc: 'Renovación o mejora de espacios verdes según necesidades del cliente.' },
        { name: 'Diseños o paisajismo', desc: 'Planificación y creación de jardines decorativos, funcionales y personalizados.' },
        { name: 'Retiro de basura de jardín', desc: 'Recolección y eliminación de hojas, ramas y residuos vegetales.' },
        { name: 'Venta de abono orgánico', desc: 'Suministro de fertilizantes naturales para mejorar la calidad del suelo y crecimiento de plantas.' },
      ],
    },
  },
  piscinas: {
    id: 'piscinas',
    label: 'Piscinas',
    icon: faPersonSwimming,
    accent: '#4ADBFF',
    hero: 'Agua cristalina, cada visita, sin excepción.',
    basic: {
      title: 'Mantenimiento Básico',
      items: [
        { name: 'Aspirado de fondo', desc: 'Eliminación de suciedad, arena y residuos acumulados en el fondo para mantener el agua limpia.' },
        { name: 'Recolección de hojas y flotantes', desc: 'Retiro de hojas, insectos y desechos flotantes o sumergidos.' },
        { name: 'Cepillado de paredes y fondo', desc: 'Limpieza de superficies para prevenir algas, sarro y suciedad adherida.' },
        { name: 'Control de cloro y pH', desc: 'Medición y ajuste químico para garantizar agua segura y balanceada.' },
        { name: 'Limpieza de filtro y retrolavado', desc: 'Mantenimiento del sistema de filtración para asegurar un funcionamiento eficiente.' },
        { name: 'Limpieza del área de máquinas', desc: 'Orden y limpieza del espacio técnico para prevenir fallas y prolongar la vida útil de los equipos.' },
        { name: 'Tratamiento de agua', desc: 'Aplicación de productos para desinfección, clarificación y mejora de la calidad del agua.' },
        { name: 'Mantenimiento de cloro según parámetros', desc: 'Dosificación adecuada de cloro de acuerdo con el estado y uso de la piscina.' },
        { name: 'Limpieza de sarro', desc: 'Eliminación de incrustaciones minerales en bordes y paredes.' },
      ],
    },
    extra: {
      title: 'Servicios Adicionales',
      items: [
        { name: 'Diagnóstico de la bomba', desc: 'Evaluación técnica para detectar fallas o bajo rendimiento del sistema de bombeo.' },
        { name: 'Mantenimiento o cambio de piezas', desc: 'Reparación, ajuste o reemplazo de componentes dañados.' },
        { name: 'Recuperación de agua verde', desc: 'Tratamiento intensivo para restaurar piscinas con alto nivel de suciedad o algas.' },
        { name: 'Alquiler de equipos', desc: 'Disponibilidad de herramientas o maquinaria especializada para trabajos específicos.' },
        { name: 'Cambio de arena del filtro', desc: 'Sustitución del material filtrante para mejorar la calidad de filtración y rendimiento del sistema.' },
      ],
    },
  },
  limpieza: {
    id: 'limpieza',
    label: 'Limpieza',
    icon: faBroom,
    accent: '#00E5C8',
    hero: 'Espacios impecables que inspiran bienestar.',
    basic: {
      title: 'Mantenimiento Básico',
      items: [
        { name: 'Despolvo de muebles', desc: 'Eliminación de polvo y suciedad superficial en muebles, repisas y superficies decorativas.' },
        { name: 'Limpieza de vidrios internos', desc: 'Limpieza de ventanas, espejos y superficies de vidrio interiores para mayor claridad y presentación.' },
        { name: 'Mantenimiento de pisos secos', desc: 'Recolección de polvo, tierra y residuos en pisos interiores.' },
        { name: 'Mantenimiento de pisos húmedos', desc: 'Limpieza húmeda y desinfección básica de pisos para mantener higiene y buena presentación.' },
        { name: 'Limpieza de churrasqueras', desc: 'Retiro de grasa, ceniza y residuos en parrillas o áreas de asado.' },
        { name: 'Barrido de calles externas', desc: 'Limpieza de áreas exteriores, aceras o accesos comunes.' },
        { name: 'Limpieza de parqueo', desc: 'Mantenimiento de estacionamientos, eliminando polvo, basura y suciedad acumulada.' },
        { name: 'Limpieza de oficina', desc: 'Orden, limpieza y desinfección de espacios laborales.' },
        { name: 'Limpieza de portería', desc: 'Mantenimiento del área de ingreso o recepción para una presentación limpia y profesional.' },
      ],
    },
    extra: {
      title: 'Servicios Adicionales',
      items: [
        { name: 'Cepillado de piso', desc: 'Limpieza profunda para remover manchas difíciles o suciedad incrustada.' },
        { name: 'Lustre de muebles', desc: 'Aplicación de productos para mejorar brillo, protección y apariencia de muebles.' },
        { name: 'Limpieza de vidrios externos', desc: 'Limpieza más detallada para vidrios de gran tamaño o difícil acceso.' },
      ],
    },
  },
};

const tabs = ['jardineria', 'piscinas', 'limpieza'];

function AccordionItem({ item, accent }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`${styles.accordionItem} ${open ? styles.accordionOpen : ''}`}
      style={{ '--accent': accent }}
    >
      <button className={styles.accordionTrigger} onClick={() => setOpen(o => !o)}>
        <span className={styles.accordionName}>{item.name}</span>
        <span className={styles.accordionIcon}>
          <FontAwesomeIcon icon={open ? faMinus : faPlus} />
        </span>
      </button>
      <div className={styles.accordionBody}>
        <p>{item.desc}</p>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const [active, setActive] = useState('jardineria');
  const service = data[active];

  return (
    <div className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroInner}>
          <span className={styles.heroEyebrow}>Catálogo de Servicios</span>
          <h1 className={styles.heroTitle}>
            Todo lo que tu espacio <em>necesita</em>
          </h1>
          <p className={styles.heroSub}>
            Soluciones profesionales de jardinería, piscinas y limpieza para residencias, edificios y empresas.
          </p>
        </div>

        {/* TABS */}
        <div className={styles.tabBar}>
          {tabs.map(t => {
            const s = data[t];
            return (
              <button
                key={t}
                className={`${styles.tab} ${active === t ? styles.tabActive : ''}`}
                onClick={() => setActive(t)}
                style={{ '--tab-accent': s.accent }}
              >
                <FontAwesomeIcon icon={s.icon} className={styles.tabIcon} />
                <span>{s.label}</span>
              </button>
            );
          })}
        </div>
        {/* Scroll indicator */}
        <div className={styles.heroScroll}>
        <span />
        </div>
      </section>

      {/* CONTENIDO */}
      <section className={styles.content} key={active}>

        <div className={styles.serviceHeader} style={{ '--accent': service.accent }}>
          <div className={styles.serviceHeaderIcon}>
            <FontAwesomeIcon icon={service.icon} />
          </div>
          <div>
            <h2 className={styles.serviceHeaderTitle}>{service.label}</h2>
            <p className={styles.serviceHeaderHero}>{service.hero}</p>
          </div>
        </div>

        <div className={styles.block}>
          <div className={styles.blockLabel} style={{ '--accent': service.accent }}>
            <span className={styles.blockLabelDot} />
            {service.basic.title}
          </div>
          <div className={styles.accordion}>
            {service.basic.items.map((item, i) => (
              <AccordionItem key={i} item={item} accent={service.accent} />
            ))}
          </div>
        </div>

        <div className={styles.block}>
          <div className={styles.blockLabel} style={{ '--accent': service.accent }}>
            <span className={styles.blockLabelDot} />
            {service.extra.title}
          </div>
          <div className={styles.accordion}>
            {service.extra.items.map((item, i) => (
              <AccordionItem key={i} item={item} accent={service.accent} />
            ))}
          </div>
        </div>

      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <p className={styles.ctaText}>¿Quieres cotizar un servicio?</p>
          <p style={{color:"gray"}}>Escríbenos y recibe una propuesta sin compromiso.</p>
          <a 
            href="https://wa.me/+59178676716"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            💬 WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
}