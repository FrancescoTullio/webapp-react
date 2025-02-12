function ComponetCard({ film }) {
    return (
      <div className="card h-100">
        <img
          src={
            film.image
              ? `http://localhost:3000/images/${film.image}`
              : "https://placeholder.pics/svg/300"
          }
          className="card-img-top"
          alt={`Immagine di ${film.title}`}
        />
        <div className="card-body">
          <h5 className="card-title">
            {film.title} <br /> {film.author}
          </h5>
          <p className="card-text">${film.abstract}</p>
          <Link className="btn btn-primary" to={`/films/${film.slug}`}>
          Mostra dettagli
        </Link>
        </div>
      </div>
    );
  }
  
  export default ComponetCard;