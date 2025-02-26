import { Link } from "react-router-dom";

const Card = ({ immobile }) => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card csm-card">
        <img
          src={immobile.immagine}
          className="card-img-top csm-image align-self-center"
          alt={immobile.descrizione_immobile}
        />
        <div className="card-body">
          <h6 className="card-title fw-bold">
            {immobile.descrizione_immobile}
          </h6>
          <p className="card-text">Stanze: {immobile.stanze}</p>
          <p className="card-text">Bagni: {immobile.bagni}</p>
          <div>
            <Link
              to={`/dettaglio-immobile/${immobile.id}`}
              className="btn btn-success bg-wine text-white-smoke"
            >
              Vedi dettagli
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

//salviamo andrea!
