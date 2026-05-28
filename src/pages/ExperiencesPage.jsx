import { useState, useEffect } from 'react';
import styles from './ExperiencesPage.module.css';

const TOTAL_IMAGES = 14;
const SLOTS_COUNT = 9; // Número de espacios en el grid

// Generamos el array con las 14 imágenes disponibles
const allImages = Array.from({ length: TOTAL_IMAGES }, (_, i) => `/assets/${i + 1}.jpeg`);

export default function ExperiencesPage() {
  // Inicializamos los slots con las primeras imágenes
  const [slots, setSlots] = useState(() => 
    allImages.slice(0, SLOTS_COUNT).map((src, index) => ({
      id: index,
      src: src,
      // Usamos un identificador único para forzar el remount del <img> y detonar la animación
      keyId: `${index}-${Date.now()}` 
    }))
  );

  useEffect(() => {
    // Rotar una imagen aleatoria cada 2.5 segundos
    const interval = setInterval(() => {
      setSlots(prevSlots => {
        const newSlots = [...prevSlots];
        
        // Elegir un slot al azar para cambiar
        const slotToChange = Math.floor(Math.random() * SLOTS_COUNT);
        
        // Obtener las imágenes que se están mostrando actualmente
        const currentSrcs = prevSlots.map(s => s.src);
        
        // Filtrar las imágenes que están "libres" en este momento
        const availableSrcs = allImages.filter(src => !currentSrcs.includes(src));
        
        // Elegir una imagen nueva al azar de las disponibles
        const newSrc = availableSrcs[Math.floor(Math.random() * availableSrcs.length)];
        
        // Actualizar el slot con la nueva imagen y un nuevo keyId
        newSlots[slotToChange] = { 
          ...newSlots[slotToChange], 
          src: newSrc, 
          keyId: `${slotToChange}-${Date.now()}` 
        };
        
        return newSlots;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.page}>
      
      {/* Fondo estético */}
      <div className={styles.ambientGlow} />

      {/* Cabecera */}
      <header className={styles.header}>
        <span className={styles.heroEyebrow}>Como lo hacemos</span>
        <h1 className={styles.title}>Nuestras Experiencias</h1>
        <p className={styles.subtitle}>
          Resultados que hablan por sí solos. Cada espacio verde es una obra de arte viva, diseñada y cuidada a la perfección.
        </p>
      </header>

      {/* Bento Grid Vivo */}
      <section className={styles.gridContainer}>
        <div className={styles.bentoGrid}>
          {slots.map((slot) => (
            <div key={slot.id} className={styles.slot}>
              {/* Al cambiar el key, React destruye y crea el tag <img>, reactivando la animación de entrada */}
              <img 
                key={slot.keyId}
                src={slot.src} 
                alt="Experiencia Golestan" 
                className={styles.image} 
                loading="lazy"
              />
              <div className={styles.overlay} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Inferior */}
      <div className={styles.ctaWrapper}>
        <a 
          href="https://wa.me/59169112306" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.primaryBtn}
        >
          Quiero resultados así →
        </a>
      </div>

    </div>
  );
}