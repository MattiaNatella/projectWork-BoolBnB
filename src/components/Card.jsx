import { Link } from "react-router-dom";
import CardButton from "../partials/CardButton";


const Card = ({ immobile }) => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card csm-card">

        <div className="card-body">
          <h6 className="card-title fw-bold">
            {immobile.descrizione_immobile}
          </h6>
          <p className="card-text">Stanze: {immobile.stanze}</p>
          <p className="card-text">Bagni: {immobile.bagni}</p>
          <div>
            <CardButton immobile={immobile} />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

//salviamo andrea!
