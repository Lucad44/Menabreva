import './Courses.css';

import Hydrofoil from "../assets/hydrofoil.png";
import Advanced from "../assets/advanced.png";
import Beginner from "../assets/beginner.png";

const Courses = () => {
  return (
    <div className="courses-page">
      <div className="page-header">
        <h1>I nostri corsi</h1>
        <p>Da principiante ad esperto, c'é n'é per tutti</p>
      </div>

      <div className="course-categories">
        <div className="course-category">
          <div className="course-info">
            <h2>Corso Entry Level</h2>
            <p>Comincia la tua avventura nel kitesurf. Nessuna esperienza richiesta.</p>
            <ul>
              <li>Introduzione all'equipaggiamento e alla sicurezza</li>
              <li>Controllo del kite</li>
              <li>Tecnice di movimento del corpo</li>
              <li>Prime uscite in acqua</li>
              <li>Durata: 3 giorni</li>
              <li>Prezzo: $1</li>
            </ul>
            <button className="book-button">Prenota ora</button>
          </div>
          <div className="course-image">
            <img src={Beginner} alt="Beginner kitesurfing course" />
          </div>
        </div>

        <div className="course-category advanced">
          <div className="course-image">
            <img src={Advanced} alt="Advanced kitesurfing course" />
          </div>
          <div className="course-info">
            <h2>Corso Avanzato</h2>
            <p>Take your skills to the next level with our advanced coaching program</p>
            <ul>
              <li>Salti con la tavola e manovre aeree</li>
              <li>Tecniche di cavalcata dell'onda</li>
              <li>bho</li>
              <li>Preparazione alla competizione</li>
              <li>Durata: 7 giorni</li>
              <li>Prezzo: $299</li>
            </ul>
            <button className="book-button">Prenota ora</button>
          </div>
        </div>

        <div className="course-category">
          <div className="course-info">
            <h2>Hydrofoil</h2>
            <p>Prova l'ultima innovazione del kitesurf con il nostro hydrofoil!</p>
            <ul>
              <li>Introduzione all'attrezzature per hydrofoil</li>
              <li>Equilibrio e fondamenta</li>
              <li>Foil-specific safety considerations</li>
              <li>Tecniche avanzate per hydrofoil</li>
              <li>Durata: 2-3 giorni</li>
              <li>Prezzo: $349</li>
            </ul>
            <button className="book-button">Prenota ora</button>
          </div>
          <div className="course-image">
            <img src={Hydrofoil} alt="Hydrofoil kitesurfing" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;