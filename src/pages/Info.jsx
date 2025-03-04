import React from "react";
import styled from "styled-components";

const Info = () => {
  return (
    <StyledWrapper>
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <h1 className="title">Chi Siamo</h1>
            <p className="description">
              Benvenuti su BoolBnB, la vostra agenzia immobiliare di fiducia per
              l'affitto di strutture a breve termine. Siamo dedicati a fornire
              un servizio eccellente e a garantire che ogni soggiorno sia
              un'esperienza indimenticabile.
            </p>
            <h2 className="subtitle">La Nostra Missione</h2>
            <p className="description">
              La nostra missione è offrire ai nostri clienti un'ampia gamma di
              strutture di alta qualità, garantendo comfort, sicurezza e
              convenienza. Ci impegniamo a soddisfare le esigenze di ogni
              ospite, offrendo soluzioni personalizzate e un servizio clienti
              impeccabile.
            </p>
            <h2 className="subtitle">I Nostri Servizi</h2>
            <ul className="services">
              <li>Affitto di appartamenti e case vacanza a breve termine</li>
              <li>Gestione completa delle proprietà</li>
              <li>Servizi di pulizia e manutenzione</li>
              <li>Assistenza clienti 24/7</li>
              <li>Consulenza personalizzata per proprietari e ospiti</li>
            </ul>
            <h2 className="subtitle">Contattaci</h2>
            <p className="description">
              Se avete domande o desiderate maggiori informazioni sui nostri
              servizi, non esitate a contattarci. Siamo sempre disponibili per
              assistervi.
            </p>
            <p className="contact">
              <strong>Email:</strong> info@boolbnb.com
              <br />
              <strong>Telefono:</strong> +39 123 456 7890
              <br />
              <strong>Indirizzo:</strong> Via Roma, 123, 00100 Roma, Italia
            </p>
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
    text-align: center;
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

  .services {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
  }

  .services li {
    font-size: 1.2rem;
    color: #333;
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }

  .contact {
    font-size: 1.2rem;
    color: #333;
    line-height: 1.6;
    margin-top: 1rem;
  }

  .contact strong {
    color: #5b2333;
  }
`;

export default Info;
