import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { useParams } from "react-router-dom";
import ModalReview from "../components/ModalReview";
import ReviewCard from "../components/Reviews";
import NewReviewCard from "../partials/NewReviewCard";
import Rating from "../components/Rating";

const Detail = () => {
  const { fetchImmobile, immobile } = useGlobalContext();
  const { id } = useParams();
  useEffect(() => fetchImmobile(id), []);

  const checkReviews = () => {
    if (immobile?.recensioni == 0) {
      return <p>Non ci sono recensioni per questo immobile</p>;
    }
    return immobile?.reviews.map((review) => (
      <ReviewCard key={review.id} review={review} />
    ));
  };

  return (
    <>
      <div className="container py-5">
        <div className="container-top rounded-5 d-flex justify-content-between  ">
          <img
            src={immobile?.immagine}
            className="w-50 csm-image rounded-start-5"
            alt="immagine immobile"
          />
          <div className="p-3 csm-border rounded-end-5">
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
          </div>
        </div>
        <div className="pt-5">
          <h3 className="d-flex justify-content-between align-items-center">
            Recensioni:{" "}
            <span>
              <ModalReview immobile={immobile} />
            </span>{" "}
          </h3>
          <div className="recensioni mt-5">
            <div>{checkReviews()}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
