import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { useParams } from "react-router-dom";
import ModalReview from "../components/ModalReview";
import ReviewCard from "../components/Reviews";
import Rating from "../components/Rating";

const Detail = () => {
  const { fetchImmobile, immobile } = useGlobalContext();
  const { id } = useParams();
  useEffect(() => fetchImmobile(id), []);

  return (
    <>
      <div className="container py-5">
        <div className="card-top d-flex gap-5 justify-content-between  ">
          <img
            src={immobile?.immagine}
            className="w-50"
            alt="immagine immobile"
          />
          <div>
            <div className="d-flex justify-content-between mb-3">
              <h3>{immobile?.descrizione_immobile}</h3>
              <span className="fs-4">
                <Rating valutazione={immobile?.media_valutazione} />
              </span>
            </div>
            <p className="fw-bolder fs-5">€ {immobile?.prezzo_notte} / notte</p>
            <div className="details fs-5 fw-light ">
              <p> {immobile?.testo_descrittivo}</p>
              <p>
                <strong className="fw-bold pe-2">Metri Quadrati:</strong>{" "}
                {immobile?.metri_quadrati} m²
              </p>
              <p>
                <strong className="fw-bold pe-2">Indirizzo:</strong>{" "}
                {immobile?.indirizzo}
              </p>
              <p>
                <strong className="fw-bold pe-2">Stanze:</strong>{" "}
                {immobile?.stanze}
              </p>
              <p>
                <strong className="fw-bold pe-2">Bagni:</strong>{" "}
                {immobile?.bagni}
              </p>
            </div>
            <div className="recensioni mt-5">
              <h1>Recensioni:</h1>
              <ModalReview immobile={immobile} />
            </div>
            <div className="row row-cols-3 m-2">
              {immobile?.reviews.map((recensione) => (
                <ReviewCard review={recensione} key={recensione.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
