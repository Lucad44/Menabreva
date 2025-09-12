import React from 'react';
import styles from './Teacher.module.css';

const Teacher = () => {
  const handleDownloadGuide = () => {
    // Placeholder for PDF download
    const link = document.createElement('a');
    link.href = '../../assets/manuale_msp.pdf';
    link.download = 'Guida_Istruttore_Kitesurf_MSP_Italia.pdf';
    link.click();
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Diventa <span className={styles.accent}>Istruttore Kitesurf</span> MSP Italia
          </h1>
          <p className={styles.heroSubtitle}>
            Trasforma la tua passione per il kitesurf in una professione. 
            Scopri come ottenere la certificazione MSP Italia e iniziare la tua carriera come istruttore.
          </p>
          <div className={styles.heroActions}>
            <button className={styles.primaryButton} onClick={handleDownloadGuide}>
              Scarica la Guida Gratuita
            </button>
            <button className={styles.secondaryButton}>
              Contattaci Ora
            </button>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img 
            src="/api/placeholder/600/400" 
            alt="Istruttore kitesurf che insegna sulla spiaggia"
            className={styles.heroImg}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Perché Scegliere MSP Italia</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <img src="/api/placeholder/64/64" alt="Certificazione" />
              </div>
              <h3>Certificazione Riconosciuta</h3>
              <p>Ottieni una qualifica MSP Italia riconosciuta a livello nazionale e internazionale</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <img src="/api/placeholder/64/64" alt="Esperti" />
              </div>
              <h3>Istruttori Esperti</h3>
              <p>Formazione con i migliori professionisti del settore con anni di esperienza</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <img src="/api/placeholder/64/64" alt="Pratica" />
              </div>
              <h3>Formazione Pratica</h3>
              <p>Oltre il 70% del corso è dedicato alla pratica in acqua e sulla spiaggia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section className={styles.courseStructure}>
        <div className={styles.container}>
          <div className={styles.structureContent}>
            <h2 className={styles.sectionTitle}>Struttura del Corso</h2>
            <p className={styles.sectionSubtitle}>
              Un percorso completo che ti preparerà ad essere un istruttore qualificato
            </p>
            
            <div className={styles.courseModules}>
              <div className={styles.module}>
                <div className={styles.moduleNumber}>01</div>
                <div className={styles.moduleContent}>
                  <h3>Teoria del Volo e Sicurezza</h3>
                  <p>Principi aerodinamici, finestra del vento, sistemi di sicurezza e gestione delle emergenze</p>
                  <span className={styles.duration}>16 ore</span>
                </div>
              </div>
              
              <div className={styles.module}>
                <div className={styles.moduleNumber}>02</div>
                <div className={styles.moduleContent}>
                  <h3>Metodologie di Insegnamento</h3>
                  <p>Tecniche didattiche, comunicazione efficace, gestione dei gruppi e psicologia dell'apprendimento</p>
                  <span className={styles.duration}>12 ore</span>
                </div>
              </div>
              
              <div className={styles.module}>
                <div className={styles.moduleNumber}>03</div>
                <div className={styles.moduleContent}>
                  <h3>Pratica in Acqua</h3>
                  <p>Demonstrazioni pratiche, assistenza agli allievi, rescue e tecniche avanzate</p>
                  <span className={styles.duration}>32 ore</span>
                </div>
              </div>
              
              <div className={styles.module}>
                <div className={styles.moduleNumber}>04</div>
                <div className={styles.moduleContent}>
                  <h3>Esame Finale</h3>
                  <p>Test teorico scritto, prova pratica e simulazione di lezione</p>
                  <span className={styles.duration}>4 ore</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.structureImage}>
            <img 
              src="/api/placeholder/500/600" 
              alt="Struttura del corso istruttore kitesurf"
              className={styles.structureImg}
            />
          </div>
        </div>
      </section>

      {/* Requirements */}
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

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Cosa Dicono i Nostri Istruttori</h2>
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonial}>
              <div className={styles.testimonialAvatar}>
                <img src="/api/placeholder/80/80" alt="Marco Rossi" />
              </div>
              <blockquote>
                "Il corso MSP Italia mi ha dato tutte le competenze necessarie per iniziare la mia carriera. 
                Ora insegno in una delle migliori scuole della Sardegna."
              </blockquote>
              <cite>Marco Rossi, Istruttore dal 2022</cite>
            </div>
            
            <div className={styles.testimonial}>
              <div className={styles.testimonialAvatar}>
                <img src="/api/placeholder/80/80" alt="Laura Bianchi" />
              </div>
              <blockquote>
                "La formazione è stata eccellente, con un perfetto equilibrio tra teoria e pratica. 
                Gli istruttori sono professionali e sempre disponibili."
              </blockquote>
              <cite>Laura Bianchi, Istruttrice dal 2021</cite>
            </div>
            
            <div className={styles.testimonial}>
              <div className={styles.testimonialAvatar}>
                <img src="/api/placeholder/80/80" alt="Andrea Verdi" />
              </div>
              <blockquote>
                "Grazie al corso ho trasformato la mia passione in lavoro. 
                La certificazione MSP è riconosciuta ovunque e apre molte opportunità."
              </blockquote>
              <cite>Andrea Verdi, Istruttore dal 2020</cite>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Pronto a Iniziare?</h2>
            <p>
              Scarica la nostra guida completa e scopri tutti i dettagli sui corsi istruttore MSP Italia. 
              Include calendario corsi, costi, location e molto altro.
            </p>
            <div className={styles.ctaActions}>
              <button className={styles.primaryButton} onClick={handleDownloadGuide}>
                Scarica la Guida PDF
              </button>
              <button className={styles.secondaryButton}>
                Richiedi Informazioni
              </button>
            </div>
          </div>
          <div className={styles.ctaImage}>
            <img 
              src="/api/placeholder/400/300" 
              alt="Diventa istruttore kitesurf"
              className={styles.ctaImg}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teacher;