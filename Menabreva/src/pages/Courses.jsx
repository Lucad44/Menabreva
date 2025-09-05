import './Courses.css';

import Hydrofoil from "../assets/hydrofoil.png";
import Advanced from "../assets/advanced.png";
import Beginner from "../assets/beginner.png";

const Courses = () => {
  return (
    <div className="courses-page">
      <header className="page-header">
        <h1>I nostri corsi</h1>
        <p>Da principiante ad esperto — scegli l'esperienza giusta per te.</p>
      </header>

      <div className="course-categories">
        {/* Card 1 - Beginner (text left, image right) */}
        <article className="course-card">
          <div className="card-body">
            <div className="top-row">
              <h2>Corso Entry Level</h2>
            </div>
            <p className="lead">Comincia la tua avventura nel kitesurf. Nessuna esperienza richiesta.</p>
            <ul>
              <li>Introduzione all'equipaggiamento e alla sicurezza</li>
              <li>Controllo del kite</li>
              <li>Tecniche di movimento del corpo</li>
              <li>Prime uscite in acqua</li>
              <li>Durata: 3 giorni</li>
            </ul>
            <button className="book-button">Prenota ora</button>
          </div>
          <div className="card-media">
            <img src={Beginner} alt="Beginner kitesurfing course" />
          </div>
        </article>

        {/* Card 2 - Advanced (image left, text right) */}
        <article className="course-card reverse">
          <div className="card-media">
            <img src={Advanced} alt="Advanced kitesurfing course" />
          </div>
          <div className="card-body">
            <div className="top-row">
              <h2>Corso Avanzato</h2>
            </div>
            <p className="lead">Porta le tue abilità al livello successivo con coaching avanzato.</p>
            <ul>
              <li>Salti con la tavola e manovre aeree</li>
              <li>Tecniche di cavalcata dell'onda</li>
              <li>Preparazione alla competizione</li>
              <li>Durata: 7 giorni</li>
            </ul>
            <button className="book-button">Prenota ora</button>
          </div>
        </article>

        {/* Card 3 - Hydrofoil (full width, big image) */}
        <article className="course-card full">
          <div className="card-body">
            <div className="top-row">
              <h2>Hydrofoil</h2>
            </div>
            <p className="lead">Prova l'ultima frontiera del kitesurf con il nostro corso hydrofoil.</p>
            <ul>
              <li>Introduzione all'attrezzatura per hydrofoil</li>
              <li>Equilibrio e fondamenta</li>
              <li>Sicurezza specifica per foil</li>
              <li>Tecniche avanzate per hydrofoil</li>
              <li>Durata: 2-3 giorni</li>
            </ul>
            <button className="book-button">Prenota ora</button>
          </div>
          <div className="card-media">
            <img src={Hydrofoil} alt="Hydrofoil kitesurfing" />
          </div>
        </article>
      </div>
    </div>
  );
};

export default Courses;