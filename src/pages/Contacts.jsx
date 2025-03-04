import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../partials/Button";

const Contacts = () => {
  return (
    <StyledWrapper>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <h1 className="title">Contattaci</h1>
            <p className="description">
              Se hai domande o desideri maggiori informazioni sui nostri
              servizi, non esitare a contattarci. Siamo sempre disponibili per
              assisterti.
            </p>
            <div className="contact-info">
              <p>
                <strong>Email:</strong> info@boolbnb.com
              </p>
              <p>
                <strong>Telefono:</strong> +39 123 456 7890
              </p>
              <p>
                <strong>Indirizzo:</strong> Via Brombeis, Napoli, Italia
              </p>
            </div>
            <h2 className="subtitle">Modulo di Contatto</h2>
            <form className="contact-form">
              <div className="mb-4">
                <label htmlFor="name" className="form-label">
                  Nome
                </label>
                <input
                  type="text"
                  className="form-control input"
                  id="name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control input"
                  id="email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="form-label">
                  Messaggio
                </label>
                <textarea
                  className="form-control input mb-4"
                  id="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <Button text={"Invia"} />
            </form>
            <h2 className="subtitle">La Nostra Posizione</h2>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.123456789012!2d14.250000000000!3d40.850000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b08a123456789%3A0x1234567890abcdef!2sVia%20Brombeis%2C%20Napoli%2C%20Italia!5e0!3m2!1sit!2sit!4v1616161616161!5m2!1sit!2sit"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .title {
    font-size: 2.5rem;
    color: #5b2333;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.8rem;
    color: #5b2333;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .description {
    font-size: 1.2rem;
    color: #333;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .contact-info {
    font-size: 1.2rem;
    color: #333;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .contact-info p {
    margin: 0.5rem 0;
  }

  .contact-form {
    margin-bottom: 2rem;
  }

  .map {
    margin-top: 2rem;
  }

  .input[type="text"],
  .input[type="email"],
  textarea {
    display: block;
    color: rgb(34, 34, 34);
    background: linear-gradient(
      142.99deg,
      rgba(217, 217, 217, 0.63) 15.53%,
      rgba(243, 243, 243, 0.63) 88.19%
    );
    box-shadow: 0px 12px 24px -1px rgba(0, 0, 0, 0.18);
    border-color: rgba(7, 4, 14, 0);
    border-radius: 50px;
    margin: 0px, auto;
    padding: 22px 15px;
    outline: none;
    transition: 0.5s;
    overflow: hidden;
    width: 100%;
    height: 50px;
  }

  textarea {
    height: 100px;
  }
`;

export default Contacts;
