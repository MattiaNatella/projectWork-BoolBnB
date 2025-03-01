import { useState, useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import styled from "styled-components";
import UploadFile from "../partials/UploadFile";
import Button from "../partials/Button";

const NewHouse = () => {
  const { tipologie, fetchTipologie } = useGlobalContext();

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
  };

  const [formData, setFormData] = useState(initialData);
  const [error, setError] = useState("");

  const validate = () => {
    if (
      !formData.descrizione_immobile ||
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
      !formData.proprietario.telefono
    )
      return false;
    return true;
  };

  const hadleSetValue = (e) => {
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
    setFormData(initialData);
  };

  useEffect(() => {
    fetchTipologie();
  }, []);

  console.log(error);

  return (
    <StyledWrapper>
      <div className="container">
        <form action="#" onSubmit={handleSubmit}>
          <div className="pt-5 pb-3">
            <h4 className="mb-4">Inserisci i tuoi dati</h4>
            <div className="d-flex justify-content-around mb-3">
              <label htmlFor="nome">Nome</label>
              <label htmlFor="cognome" className="ps-5">
                Cognome
              </label>
            </div>
            <div className="d-flex gap-5 justify-content-between">
              <input
                type="text"
                className="form-control input w-50"
                name="nome"
                placeholder="Inserisci il tuo nome"
                value={formData.proprietario.nome}
                onChange={hadleSetValue}
              />
              <input
                type="text"
                className="form-control input w-50 "
                name="cognome"
                placeholder="Inserisci il tuo cognome"
                value={formData.proprietario.cognome}
                onChange={hadleSetValue}
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
              placeholder="Inserisci la tua email"
              value={formData.proprietario.email}
              onChange={hadleSetValue}
            />
            <input
              type="tel"
              className="form-control input w-50"
              name="telefono"
              placeholder="Inserisci il tuo numero di telefono"
              value={formData.proprietario.telefono}
              onChange={hadleSetValue}
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
                placeholder="Inserisci il nome dell'annuncio"
                value={formData.descrizione_immobile}
                onChange={hadleSetValue}
              />
              <input
                type="text"
                className="form-control input w-50"
                name="indirizzo"
                placeholder="Inserisci l'indirizzo dell'immobile"
                value={formData.indirizzo}
                onChange={hadleSetValue}
              />
            </div>

            <div className="d-flex justify-content-around mt-5 mb-3">
              <label htmlFor="stanze" className="pe-5 me-5">
                Numero di stanze
              </label>
              <label htmlFor="bagni" className="pe-5 me-5">
                Numero di bagni
              </label>
              <label htmlFor="letti" className="pe-4">
                Numero di letti
              </label>
            </div>

            <div className="d-flex justify-content-between gap-5">
              <input
                type="number"
                className="form-control input w-30"
                name="stanze"
                placeholder="Inserisci il numero di stanze"
                value={formData.stanze}
                onChange={hadleSetValue}
              />
              <input
                type="number"
                className="form-control input w-30"
                name="bagni"
                placeholder="Inserisci il numero di bagni"
                value={formData.bagni}
                onChange={hadleSetValue}
              />
              <input
                type="number"
                className="form-control input w-30"
                name="letti"
                placeholder="Inserisci il numero di letti"
                value={formData.letti}
                onChange={hadleSetValue}
              />
            </div>

            <div className="d-flex justify-content-around mt-5 mb-3">
              <label htmlFor="metri_quadrati" className="pe-5 me-5">
                Metri quadrati
              </label>
              <label htmlFor="tipologia" className="pe-5 me-5">
                Tipologia
              </label>
              <label htmlFor="immagine" className="pe-4">
                Immagine
              </label>
            </div>

            <div className="d-flex justify-content-between gap-5">
              <input
                type="number"
                className="form-control input w-30"
                name="metri_quadrati"
                placeholder="Inserisci i metri quadrati"
                value={formData.metri_quadrati}
                onChange={hadleSetValue}
              />
              <select
                className="form-select input w-30"
                aria-label="Default select example"
                onChange={hadleSetValue}
                name="tipologia"
                value={formData.tipologia}
              >
                <option value="">Seleziona la tipologia</option>
                {tipologie?.map((tipologia) => (
                  <option key={tipologia?.id} value={tipologia?.id}>
                    {tipologia?.descrizione}
                  </option>
                ))}
              </select>
              <UploadFile onchange={hadleSetValue} />
            </div>
            <h5 className="text-center text-wine mt-4">{error}</h5>
            <div className="d-flex justify-content-center my-5">
              <Button text={"Invia"} type={"submit"} />
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
`;
export default NewHouse;
