import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { useParams } from "react-router-dom";
import ModalReview from "../components/ModalReview";
import ReviewCard from "../components/Reviews";
import NewReviewCard from "../partials/NewReviewCard";import Rating from "../components/Rating";

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
          <div className="details my-3 fs-5 ms-3">

            <p><strong>Metri Quadrati:</strong> {immobile?.metri_quadrati}</p>
            <p><strong>Indirizzo:</strong> {immobile?.indirizzo}</p>
            <p><strong>Stanze:</strong> {immobile?.stanze}</p>
            <p><strong>Bagni:</strong> {immobile?.bagni}</p>
            <p> {immobile?.testo_descrittivo}</p>
          </div>
        </div>




        <div className="recensioni mt-5">
          <h1>Recensioni:</h1>
          <ModalReview />
        </div>
        <div className="row row-cols-3 m-2">
         {immobile?.reviews.map(recensione => (<ReviewCard review={recensione} key={recensione.id} />))} 
        </div>
      </div>
    </>
  );
};

export default Detail;
