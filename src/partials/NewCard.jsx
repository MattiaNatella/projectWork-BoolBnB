import styled from "styled-components";
import CardButton from "./CardButton";
import Hearts from "../components/Hearts";

const NewCard = ({ immobile }) => {
  return (
    <StyledWrapper>
      <div className="custom-card">
        <img
          src={immobile.immagine}
          className="csm-image"
          alt={immobile.descrizione_immobile}
        />
        <div className="card__content">
          <p className="card__title">{immobile.descrizione_immobile}</p>
          <p className="card__description">
            <span className="fw-bolder">Stanze:</span> {immobile.stanze}
          </p>
          <p className="card__description">
            <span className="fw-bolder">Bagni: </span>
            {immobile.bagni}
          </p>
          <p className="card__description">
            <span className="fw-bolder">Metri Quadrati:</span>{" "}
            {immobile.metri_quadrati}m²
          </p>
          <p className="card__description">
            <span className="fw-bolder">Indirizzo:</span> {immobile.indirizzo}
          </p>
          <p className="card__description">
            <span className="fw-bolder">Recensioni:</span>{" "}
            {immobile.num_recensioni}
          </p>
          <div className="mt-3 d-flex justify-content-around">
            <CardButton immobile={immobile} />
            <Hearts immobile={immobile} />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .custom-card {
    position: relative;
    width: 100%
    background-color: #f2f2f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 0 0 5px #ffffff80;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    margin-bottom: 20px;
  }

  .csm-card svg {
    width: 48px;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .custom-card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }

  .card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #f2f2f2;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .custom-card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    margin: 0;
    font-size: 24px;
    color: #333;
    font-weight: 700;
  }

  .card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: #777;
    line-height: 1.4;
  }`;

export default NewCard;
