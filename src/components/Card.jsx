import { Link } from "react-router-dom";

const Card = ({immobile}) =>{
  return (
    <div className="d-flex justify-content-center mt-2">
      <div className="houseCard card">
        <img src={immobile.immagine} className="card-img-top" alt={immobile.descrizione_immobile} />
        <div className="card-body">
          <h5 className="card-title">{immobile.descrizione_immobile}</h5>
          <p className="card-text">{immobile.stanze}</p>
          <div>
          <Link to={`/dettaglio-immobile/${immobile.id}`} className="btn btn-success">Vedi dettagli</Link>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Card;