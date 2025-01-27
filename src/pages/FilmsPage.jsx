import axios from "axios";
import { useEffect, useState } from "react";
import ComponetCard from "../components/ComponentCard"

const FilmsPage = () => {

  
  const [film, setFilm] = useState([]);
  const [search, setSearch] = useState("");

  const getFilms = () => {
    const params = {};
    if (search.length > 0) {
      params.search = search;
    }

    axios.get(`http://localhost:3000/books/`, { params }).then((resp) => {
      setFilm(resp.data.data);
    });
  };

  useEffect(() => {
    getFilms();
  }, []);


  return (
    <>
      <section>
        <h1>FILM!</h1>
        <p>Qui sotto troverai tutti i film recensiti dai nostri utenti</p>
      </section>
      <section>
        <h2>Elenco di film</h2>
        <div className="my-4 d-flex">
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="form-control"
            type="search"
            aria-label="Cerca i film per parola chiave"
            placeholder="parole chiavi per i film"
          />
          <button onClick={getFilms} className="btn btn-primary ms-2">
            Cerca
          </button>
        </div>
        {film.length > 0 ? (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
            {film.map((curFilm) => (
              <div className="col" key={curFilm.id}>
                <ComponetCard Film={curFilm} />
              </div>
            ))}
          </div>
        ) : (
          <div className="alert alert-warning">
            Nessun film con questo titolo
          </div>
        )}
      </section>
    </>
  );
}

export default FilmsPage