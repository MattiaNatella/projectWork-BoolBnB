import styled from "styled-components";
import Button from "../partials/Button";

const WorkWithUs = () => {
  return (
    <StyledWrapper>
      <div className="container my-5">
        <h1 className="title">Lavora con noi</h1>
        <p className="description">
          Siamo sempre alla ricerca di persone talentuose e appassionate per
          unirsi al nostro team. Se sei interessato a lavorare con noi, consulta
          le opportunità di lavoro disponibili e inviaci la tua candidatura.
        </p>
        <h2 className="subtitle">Opportunità di Lavoro</h2>
        <ul className="job-list">
          <li>Responsabile delle vendite</li>
          <li>Specialista del servizio clienti</li>
          <li>Responsabile della manutenzione</li>
          <li>Consulente immobiliare</li>
          <li>Specialista del marketing</li>
        </ul>
        <h2 className="subtitle">Perché Lavorare con Noi</h2>
        <p className="description text-start">
          Offriamo un ambiente di lavoro stimolante e dinamico, con opportunità
          di crescita professionale e personale. I nostri dipendenti beneficiano
          di:
        </p>
        <ul className="benefits-list">
          <li>Formazione continua</li>
          <li>Opportunità di carriera</li>
          <li>Ambiente di lavoro collaborativo</li>
          <li>Pacchetto retributivo competitivo</li>
          <li>Benefit aziendali</li>
        </ul>
        <h2 className="subtitle">Invia la tua Candidatura</h2>
        <form className="application-form">
          <div className="mb-3">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" className="input" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="input" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message">Messaggio</label>
            <textarea
              id="message"
              rows="5"
              className="input"
              required
            ></textarea>
          </div>
          <Button text={"Invia"} />
        </form>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .title {
    font-size: 2.5rem;
    color: #5b2333;
    margin-bottom: 2rem;
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
    text-align: center;
  }

  .job-list,
  .benefits-list {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
  }

  .job-list li,
  .benefits-list li {
    font-size: 1.2rem;
    color: #333;
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }

  .application-form {
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

export default WorkWithUs;
