import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { useParams } from "react-router-dom";
import ModalReview from "../components/ModalReview";


const Detail = () => {
  const { fetchImmobile, immobile } = useGlobalContext();
  const { id } = useParams();
  useEffect(() => fetchImmobile(id), []);

  return (
    <>
      <div className="container">
        <h3 className="mt-5">{immobile?.descrizione_immobile}</h3>
        <div className="d-flex">
          <img
            className="w-50 py-3"
            src={immobile?.immagine}
            alt="placeholder"
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
      </div>
    </>
  );
};

export default Detail;
