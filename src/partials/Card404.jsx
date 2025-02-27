import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card404 = () => {
  return (
    <StyledWrapper>
      <div className="container mt-5">
        <div className="box">
          <span className="title text-wine fs-1">OOOPS!</span>
          <p className="title text-wine pb-3">
            ERRORE <span className="text-white-smoke"> 404</span>
          </p>
          <div>
            <strong className="text-wine">Pagina non trovata</strong>
            <Link className="text-wine" to="/">
              Torna alla Home
            </Link>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    color: #f7f4f3;
    position: relative;
    font-family: sans-serif;
  }

  .container::before,
  .container::after {
    content: "";
    background-color: #5b2333;
    position: absolute;
  }

  .container::before {
    border-radius: 50%;
    width: 8rem;
    height: 8rem;
    top: 30%;
    right: 7%;
  }

  .container::after {
    content: "";
    position: absolute;
    height: 3rem;
    top: 8%;
    right: 5%;
    border: 1px solid;
  }

  .container .box {
    width: 20em;
    height: 25em;
    padding: 2rem;
    background-color: rgba(255, 255, 255, 0.074);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(23px);
    border-radius: 0.7rem;
    transition: all ease 0.3s;
  }

  .container .box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .container .box .title {
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 0.1em;
  }

  .container .box div strong {
    display: block;
    margin-bottom: 0.5rem;
  }

  .container .box div p {
    margin: 0;
    font-size: 0.9em;
    font-weight: 300;
    letter-spacing: 0.1em;
  }

  .container .box div span {
    font-size: 0.7rem;
    font-weight: 300;
  }

  .container .box div span:nth-child(3) {
    font-weight: 500;
    margin-right: 0.2rem;
  }

  .container .box:hover {
    box-shadow: 0px 0px 20px 1px #5b2333;
    border: 1px solid rgba(255, 255, 255, 0.454);
  }
`;

export default Card404;
