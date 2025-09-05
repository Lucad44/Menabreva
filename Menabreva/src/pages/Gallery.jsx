import './Gallery.css';

const Gallery = () => {
  return (
    <div className="gallery-page">
      <div className="page-header">
        <h1>Galleria Immagini</h1>
      </div>

      <div className="gallery-grid">
        <div className="gallery-item">
          <img src="/placeholder-gallery1.jpg" alt="Kitesurfing jump" />
        </div>
        <div className="gallery-item">
          <img src="/placeholder-gallery2.jpg" alt="Beginner lesson" />
        </div>
        <div className="gallery-item">
          <img src="/placeholder-gallery3.jpg" alt="Hydrofoil action" />
        </div>
        <div className="gallery-item">
          <img src="/placeholder-gallery4.jpg" alt="Sunset kitesurfing" />
        </div>
        <div className="gallery-item">
          <img src="/placeholder-gallery5.jpg" alt="Group lesson" />
        </div>
        <div className="gallery-item">
          <img src="/placeholder-gallery6.jpg" alt="Advanced tricks" />
        </div>
        <div className="gallery-item">
          <img src="/placeholder-gallery7.jpg" alt="Beach view" />
        </div>
        <div className="gallery-item">
          <img src="/placeholder-gallery8.jpg" alt="Equipment setup" />
        </div>
        <div className="gallery-item">
          <img src="/placeholder-gallery9.jpg" alt="Aerial view" />
        </div>
      </div>

      <div className="gallery-cta">
        <h2>Pronto a creare dei fantastici ricordi?</h2>
        <p>Unisciti a noi per un'indimenticabile esperienza di kitesurf</p><br></br>
        <button className="cta-button">Prenota un corso adesso</button>
      </div>
    </div>
  );
};

export default Gallery;