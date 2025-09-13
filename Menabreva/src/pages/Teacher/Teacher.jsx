import React from 'react'
import styles from './Teacher.module.css'

import IstruttoriFermi from '../../assets/istruttorifermi.png'
import DiplomaMSP from '../../assets/diploma_msp.png'
import IstruttoreRadio from '../../assets/istruttore_radio.png'
import ManualPDF from '../../assets/manuale_msp.pdf'

const FEATURES = [
  {
    emoji: '🎖️',
    label: 'Certificazione Riconosciuta',
    desc: 'Ottieni una qualifica MSP Italia riconosciuta a livello nazionale e internazionale'
  },
  {
    emoji: '👩‍🏫',
    label: 'Istruttori Esperti',
    desc: 'Formazione con i migliori professionisti del settore con anni di esperienza'
  },
  {
    emoji: '🌊',
    label: 'Formazione Pratica',
    desc: 'Oltre il 70% del corso è dedicato alla pratica in acqua e sulla spiaggia'
  }
]

const MODULES = [
  {
    number: '01',
    title: 'Teoria del Volo e Sicurezza',
    desc: 'Principi aerodinamici, finestra del vento, sistemi di sicurezza e gestione delle emergenze',
    duration: '16 ore'
  },
  {
    number: '02',
    title: 'Metodologie di Insegnamento',
    desc: "Tecniche didattiche, comunicazione efficace, gestione dei gruppi e psicologia dell'apprendimento",
    duration: '12 ore'
  },
  {
    number: '03',
    title: 'Pratica in Acqua',
    desc: 'Dimostrazioni pratiche, assistenza agli allievi, rescue e tecniche avanzate',
    duration: '32 ore'
  },
  {
    number: '04',
    title: 'Esame Finale',
    desc: 'Test teorico scritto, prova pratica e simulazione di lezione',
    duration: '4 ore'
  }
]

const Teacher = () => {
  const handleDownloadGuide = () => {
    const link = document.createElement('a')
    link.href = ManualPDF
    link.download = 'Guida_Istruttore_Kitesurf_MSP_Italia.pdf'
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  return (
    <div className={styles.root}>
      <section className={styles.hero}>
        <div className={styles.inner}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Diventa{' '}
              <span className={styles.accent}>
                Istruttore Kitesurf MSP Italia
              </span>
            </h1>
            <br></br>
            <p className={styles.heroSubtitle}>
              Trasforma la tua passione per il kitesurf in una professione.
              Scopri come ottenere la certificazione MSP Italia e iniziare la
              tua carriera come istruttore.
            </p>
          </div>

          <div className={styles.heroImage}>
            <img
              src={IstruttoriFermi}
              alt='Istruttore kitesurf che insegna sulla spiaggia'
              className={styles.heroImg}
              loading='lazy'
            />
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Perché scegliere MSP Italia</h2>
          <p className={styles.sectionSubtitle}>
            Un percorso pensato per trasformare appassionati in professionisti
            con formazione pratica, certificazione e mentor dedicati.
          </p>

          <div className={styles.featuresGrid}>
            {FEATURES.map(f => (
              <article
                key={f.label}
                className={styles.featureCard}
                tabIndex={0}
                aria-label={f.label}
              >
                <div className={styles.featureIcon} aria-hidden>
                  <span
                    className={styles.emoji}
                    role='img'
                    aria-label={f.label}
                  >
                    {f.emoji}
                  </span>
                </div>
                <h3>{f.label}</h3>
                <p>{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.courseStructure}>
        <div className={styles.containerGrid}>
          <div className={styles.structureContent}>
            <h2 className={styles.sectionTitle}>Struttura del Corso</h2>
            <p className={styles.sectionSubtitle}>
              Un percorso completo che ti preparerà ad essere un istruttore
              qualificato
            </p>

            <div className={styles.courseModules}>
              {MODULES.map(m => (
                <div key={m.number} className={styles.module}>
                  <div className={styles.moduleNumber}>{m.number}</div>
                  <div className={styles.moduleContent}>
                    <h3>{m.title}</h3>
                    <p>{m.desc}</p>
                    <span className={styles.duration}>{m.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.structureImage}>
            <img
              src={DiplomaMSP}
              alt='Struttura del corso istruttore kitesurf'
              className={styles.structureImg}
              loading='lazy'
            />
          </div>
        </div>
      </section>

      <section className={styles.requirements}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Requisiti per l'Ammissione</h2>
          <div className={styles.requirementsGrid}>
            <div className={styles.requirementCard}>
              <h3>Esperienza</h3>
              <ul>
                <li>Minimo 2 anni di pratica kitesurf</li>
                <li>Capacità di navigare in autonomia</li>
                <li>Conoscenza delle manovre base</li>
              </ul>
            </div>

            <div className={styles.requirementCard}>
              <h3>Documenti</h3>
              <ul>
                <li>Maggiore età (18 anni compiuti)</li>
                <li>Certificato medico sportivo</li>
                <li>Brevetto di salvataggio in acqua</li>
              </ul>
            </div>

            <div className={styles.requirementCard}>
              <h3>Competenze</h3>
              <ul>
                <li>Buona forma fisica</li>
                <li>Capacità comunicative</li>
                <li>Pazienza e dedizione</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.containerGrid}>
          <div className={styles.ctaContent}>
            <h2>Pronto a Iniziare?</h2>
            <p>
              Scarica la nostra guida completa e scopri tutti i dettagli sui
              corsi istruttore MSP Italia.
            </p>
            <div className={styles.ctaActions}>
              <button
                className={styles.primaryButton}
                onClick={handleDownloadGuide}
                aria-label='Scarica guida PDF'
              >
                Scarica la Guida
              </button>
              <button
                className={styles.secondaryButton}
                aria-label='Richiedi informazioni'
              >
                Richiedi Informazioni
              </button>
            </div>
          </div>

          <div className={styles.ctaImage}>
            <img
              src={IstruttoreRadio}
              alt='Diventa istruttore kitesurf'
              className={styles.ctaImg}
              loading='lazy'
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Teacher
