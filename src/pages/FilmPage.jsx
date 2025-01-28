import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm"

const initialValues = {
  name: "",
  text: "",
  vote: 0,
};

function FilmPage() {
  const { slug } = useParams();

  const [film, setFilm] = useState(null);

  

  const [formData, setFormData] = useState(initialValues);

  const getFilms = () => {
    axios.get(`${backendUrl}/books/${slug}`).then((resp) => {
      setBook(resp.data.data);
    });
  };

  useEffect(() => {
    getFilms()
  
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
          <section className="mt-5">
            <div className="row justify-content-center">
              <div className="col-8">
                <h2 className="text-center">Invia una nuova recensione</h2>
                <ReviewForm
                  formData={formData}
                  setFormData={setFormData}
                  onSubmitFunction={storeReview}
                />
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default FilmPage;