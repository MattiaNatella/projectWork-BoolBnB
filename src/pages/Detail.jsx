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
        <img
          className="w-100 py-3"
          src={immobile?.immagine}
          alt="placeholder"
        />

        <div className="details my-3">
          <p>Descrizione: {immobile?.descrizione_immobile}</p>
          <p>Metri Quadrati: {immobile?.metri_quadrati}</p>
          <p>Indirizzo: {immobile?.indirizzo}</p>
          <p>Stanze: {immobile?.stanze}</p>
          <p>Bagni: {immobile?.bagni}</p>
        </div>

        <div className="recensioni mt-5">
          <h1>Recensioni:</h1>
          <ModalReview />
          {/* <button className="btn btn-primary my-3">
            Aggiungi una recensione
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Detail;
