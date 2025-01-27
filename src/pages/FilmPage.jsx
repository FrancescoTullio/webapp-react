import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";

function FilmPage() {
  const { slug } = useParams();

  const [film, setFilm] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/films/${slug}`).then((resp) => {
      setFilm(resp.data.data);
    });
  }, []);

  return (
    <>
      {film && (
        <>
          <section>
            <img
              className="w-50"
              src={`http://localhost:3000/images/${film.image}`}
              alt=""
            />
            <h1>{film.title}</h1>
            <h2 className="text-primary">{film.author}</h2>
            <p>Voto: {film.vote_avg}</p>
            <p>Genre: {film.genre}</p>
            <p>{film.abstract}</p>
          </section>
          <section>
            <div className="row row-cols-1 g-3">
              {film.reviews.map(curReview => <ReviewCard key={curReview.id} review={curReview} />)}
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default FilmPage;