import styled from "styled-components";
import CardButton from "./CardButton";
import Hearts from "../components/Hearts";
import { useState } from "react";

const NewCard = ({ immobile }) => {
  const [cuoricini, setCuoricini] = useState(immobile.voto);

  return (
    <StyledWrapper>
      <div className="custom-card">
        <img
          src={immobile.immagine}
          className="csm-image"
          alt={immobile.descrizione_immobile}
        />
        <div className=" cardoverlay-top w-100 d-flex justify-content-between py-3 px-2">
          <span className="desctag border rounded bg-light p-1 text-wine fw-bold">
            {immobile.descrizione_immobile}
          </span>
          <i className="fa-solid fa-heart text-danger p-1 border rounded bg-light rounded-">
            &nbsp; &nbsp;{cuoricini}
          </i>
        </div>
        <div className="cardoverlay-bottom py-3 px-2 ">
          <span className="border rounded bg-light  text-wine fw-bold p-1 px-2">
            {immobile.indirizzo}
          </span>
        </div>

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
            <span className="fw-bolder">Metri Quadrati: </span>
            {immobile.metri_quadrati}m²
          </p>
          <p className="card__description">
            <span className="fw-bolder">Indirizzo:</span> {immobile.indirizzo}
          </p>
          <p className="card__description">
            <span className="fw-bolder">Recensioni: </span>
            {immobile.num_recensioni}
          </p>
          <div className="buttons d-flex justify-content-around">
            <div>
              <CardButton immobile={immobile} />
            </div>
            <div>
              <Hearts
                immobile={immobile}
                cuoricini={cuoricini}
                setCuoricini={setCuoricini}
              />
            </div>

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
    perspective: 62.5rem;
    box-shadow: 0 0 0 5px #ffffff80;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    margin-bottom: 20px;
  }

.buttons {
position: relative;
top: 20%;
}

  .csm-card svg {
    width: 3rem;
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
    padding: 1.25rem;
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
  font-size: 0.9rem;
    color: #333;
    font-weight: 700;
  }

  .card__description {
    margin: 0.5rem 0 0;
font-size: 0.8rem;
    color: #777;
    line-height: 1.4;
  }`;

export default NewCard;
