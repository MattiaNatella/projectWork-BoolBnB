import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import styled from "styled-components";
import UploadFile from "../partials/UploadFile";
import Button from "../partials/Button";
import axios from "axios";

const NewHouse = () => {
  const { tipologie, fetchTipologie, api_url } = useGlobalContext();
  const navigate = useNavigate();

  const initialData = {
    proprietario: {
      nome: "",
      cognome: "",
      email: "",
      telefono: "",
    },
    descrizione_immobile: "",
    stanze: "",
    bagni: "",
    letti: "",
    metri_quadrati: "",
    indirizzo: "",
    immagine: "",
    tipologia: 0,
    prezzo: "",
  };

  const [formData, setFormData] = useState(initialData);
  const [error, setError] = useState("");

  const validate = () => {
    if (
      !formData.descrizione_immobile ||
      formData.descrizione_immobile.length > 50 ||
      !formData.tipologia ||
      !formData.immagine ||
      !formData.stanze ||
      !formData.bagni ||
      !formData.letti ||
      !formData.metri_quadrati ||
      !formData.indirizzo ||
      !formData.proprietario.nome ||
      !formData.proprietario.cognome ||
      !formData.proprietario.email ||
      !formData.proprietario.telefono ||
      !formData.prezzo
    )
      return false;
    return true;
  };

  const handleSetValue = (e) => {
    const { value, name } = e.target;

    if (name in formData.proprietario) {
      setFormData((prev) => ({
        ...prev,
        proprietario: {
          ...prev.proprietario,
          [name]: value,
        },
      }));
    } else if (name === "immagine") {
      setFormData((prev) => ({ ...prev, immagine: e.target.files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      setError(
        "Controlla bene i dati, potrebbe esserci qualche errore, ricordati i dati sono obbligatori"
      );
      return error;
    }

    console.log(formData);

    //eseguo chiamata di tipo POST all'api URL
    axios
      .post(api_url, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTipologie();
  }, []);

  return (
    <StyledWrapper>
      <div className="container">
        <form action="#">
          <div className="pt-5 pb-3 col-12">
            <h4 className="mb-4">Inserisci i tuoi dati</h4>
            <div className="d-flex justify-content-around mb-3">
              <label htmlFor="nome">Nome</label>
              <label htmlFor="cognome" className="ps-5">
                Cognome
              </label>
            </div>
            <div className="d-flex gap-5 justify-content-between col-12">
              <input
                type="text"
                className="form-control input w-50"
                name="nome"
                value={formData.proprietario.nome}
                onChange={handleSetValue}
              />
              <input
                type="text"
                className="form-control input w-50 "
                name="cognome"
                value={formData.proprietario.cognome}
                onChange={handleSetValue}
              />
            </div>
          </div>
          <div className="d-flex justify-content-around mt-4 mb-3">
            <label htmlFor="email">Email</label>
            <label htmlFor="telefono" className="ps-5">
              Telefono
            </label>
          </div>
          <div className="d-flex gap-5 justify-content-between">
            <input
              type="email"
              className="form-control input w-50"
              name="email"
              value={formData.proprietario.email}
              onChange={handleSetValue}
            />
            <input
              type="tel"
              className="form-control input w-50"
              name="telefono"
              value={formData.proprietario.telefono}
              onChange={handleSetValue}
            />
          </div>

          <div className="pt-5 pb-3">
            <h4 className="mb-4">Inserisci i dati dell'annuncio</h4>
            <div className="d-flex justify-content-around mb-3">
              <label htmlFor="descrizione_immobile" className="pe-5 me-5">
                Nome dell'annuncio
              </label>
              <label htmlFor="indirizzo" className="pe-5">
                Indirizzo
              </label>
            </div>
            <div className="d-flex justify-content-around gap-5">
              <input
                type="text"
                className="form-control input w-50"
                name="descrizione_immobile"
                value={formData.descrizione_immobile}
                onChange={handleSetValue}
              />
              <input
                type="text"
                className="form-control input w-50"
                name="indirizzo"
                value={formData.indirizzo}
                onChange={handleSetValue}
              />
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-md-between mt-5 mb-3 text-center">
              <div>
                <label htmlFor="stanze" className="mb-3">
                  Numero di stanze
                </label>
                <input
                  type="number"
                  className="form-control input"
                  name="stanze"
                  value={formData.stanze}
                  onChange={handleSetValue}
                />
              </div>
              <div>
                <label htmlFor="bagni" className="mb-3">
                  Numero di bagni
                </label>
                <input
                  type="number"
                  className="form-control input"
                  name="bagni"
                  value={formData.bagni}
                  onChange={handleSetValue}
                />
              </div>
              <div>
                <label htmlFor="letti" className="mb-3">
                  Numero di letti
                </label>
                <input
                  type="number"
                  className="form-control input"
                  name="letti"
                  value={formData.letti}
                  onChange={handleSetValue}
                />
              </div>
              <div>
                <label htmlFor="metri_quadrati" className="mb-3">
                  Metri quadrati
                </label>
                <input
                  type="number"
                  className="form-control input"
                  name="metri_quadrati"
                  value={formData.metri_quadrati}
                  onChange={handleSetValue}
                />
              </div>
              <div>
                <label htmlFor="prezzo" className="mb-3">
                  Prezzo
                </label>
                <input
                  type="number"
                  className="form-control input"
                  name="prezzo"
                  value={formData.prezzo}
                  onChange={handleSetValue}
                />
              </div>
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-md-between mt-5 gap-sm-4 text-center">
              <div className="col-sm-6">
                <label htmlFor="tipologia" className="mb-3">
                  Tipologia
                </label>
                <select
                  className="form-select input tipologia"
                  aria-label="Default select example"
                  onChange={handleSetValue}
                  name="tipologia"
                  value={formData.tipologia}
                >
                  <option value=""></option>
                  {tipologie?.map((tipologia) => (
                    <option key={tipologia?.id} value={parseInt(tipologia?.id)}>
                      {tipologia?.descrizione}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-sm-6">
                <label htmlFor="immagine" className="mb-3">
                  Immagine
                </label>
                <UploadFile handleSetValue={handleSetValue} />
              </div>
            </div>

            <h5 className="text-center text-wine mt-4">{error}</h5>
            <div className="d-flex justify-content-center my-5">
              <Button text={"Invia"} type={"submit"} onclick={handleSubmit} />
            </div>
          </div>
        </form>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
.input {
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
    text-align: center;
%;
    transition: 0.5s;
  }
  .tipologia{
  width: 96.5%;
  }
  @media screen and (max-width: 575px){
  .tipologia{
    width: 100%;
  }  
}
`;
export default NewHouse;
