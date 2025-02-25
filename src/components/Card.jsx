import { Link } from "react-router-dom";

const Card = ({immobile}) =>{
  return (
    <div>
      <div className="card mt-2">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{immobile.descrizione_immobile}</h5>
          <p className="card-text">{immobile.stanze}</p>
          <Link to={`/dettaglio-immobile/${immobile.id}`} className="btn btn-success">Vedi dettagli</Link>
        </div>
      </div>
    </div>
  )
}


export default Card;