import { Link } from "react-router-dom";

const Card = ({ immobile }) => {
  return (
    <div className="d-flex justify-content-center mt-2">
      <div className="houseCard card">
        <img
          src={immobile.immagine}
          className="card-img-top"
          alt={immobile.descrizione_immobile}
        />
        <div className="card-body">
          <h5 className="card-title">{immobile.descrizione_immobile}</h5>
          <p className="card-text"><strong>Indirizzo: </strong>{immobile.indirizzo}</p>
          <p className="card-text"><strong>Metri quadrati: </strong>{immobile.metri_quadrati}</p>
          <p className="card-text"><strong>Stanze: </strong>{immobile.stanze}</p>
          <p className="card-text"><strong>Bagni: </strong>{immobile.bagni}</p>
          <p className="card-text"><strong>Letti: </strong>{immobile.letti}</p>
          <div>
            <Link
              to={`/dettaglio-immoORDER BY voto DESCORDER BY voto DESCORDER BY voto DESCbile/${immobile.id}`}
              className="btn btn-success"
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
