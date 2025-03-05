import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { useParams } from "react-router-dom";
import ModalReview from "../components/ModalReview";
import NewReviewCard from "../partials/NewReviewCard";
import Rating from "../components/Rating";
import DetailButton from "../partials/DetailButton";

const Detail = () => {
  const { fetchImmobile, immobile } = useGlobalContext();
  const { id } = useParams();
  useEffect(() => fetchImmobile(id), []);

  const checkReviews = () => {
    if (immobile?.recensioni === null) {
      return <p>Non ci sono recensioni per questo immobile</p>;
    }
    return immobile?.reviews.map((review) => (
      <NewReviewCard key={review.id} review={review} />
    ));
  };

  return (
    <>
      <div className="container py-5">
        <div className="container-top d-flex">
          <img
            src={immobile?.immagine}
            className="img-immobile csm-image"
            alt="immagine immobile"
          />
          <div className="p-3 csm-content csm-content">
            <div className="d-sm-block pb-3">
              <h3 className="fw-bold text-wine text-uppercase fs-4">{immobile?.descrizione_immobile}</h3>
              <span className="fs-4 flex-nowrap">
                <Rating
                  valutazione={immobile?.media_valutazione}
                  colore={"text-warning"}
                />
              </span>
            </div>
            <p className="fw-bolder fs-5 text-wine">€ {immobile?.prezzo_notte} / notte</p>
            <div className="details fs-5 fw-light ">
              <p> {immobile?.testo_descrittivo}</p>
              <p>
                <strong className="fw-bold pe-2 text-wine text-uppercase">Metri Quadrati:</strong>{" "}
                {immobile?.metri_quadrati} m²
              </p>
              <p>
                <strong className="fw-bold pe-2 text-wine text-uppercase">Indirizzo:</strong>{" "}
                {immobile?.indirizzo}
              </p>
              <p>
                <strong className="fw-bold pe-2 text-wine text-uppercase">Stanze:</strong>{" "}
                {immobile?.stanze}
              </p>
              <p>
                <strong className="fw-bold pe-2 text-wine text-uppercase">Bagni:</strong>{""}
                {immobile?.bagni}
              </p>

              <div className="d-flex flex-column align-items-end">
                <span className="pe-1 pb-2 fw-bold text-wine ">Contatta il proprietario</span>
                <DetailButton immobile={immobile} />
              </div>

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
          <div className="recensioni justify-content-center pt-5">
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
              {checkReviews()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
