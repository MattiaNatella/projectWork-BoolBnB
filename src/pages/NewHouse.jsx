import { useState, useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";

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
      return;
    }
    setFormData(initialData);
  };

  useEffect(() => {
    fetchTipologie();
  }, []);

  return (
    <div className="container">
      <form action="#" onSubmit={handleSubmit}>
        <div className="mt-5 mb-3">
          <h4 className="mb-3">Prima parlaci un po' di te</h4>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            className="form-control"
            name="nome"
            placeholder="Inserisci il tuo nome"
            value={formData.proprietario.nome}
            onChange={hadleSetValue}
          />
        </div>
        <div className="my-3">
          <label htmlFor="cognome">Cognome</label>
          <input
            type="text"
            className="form-control"
            name="cognome"
            placeholder="Inserisci il tuo cognome"
            value={formData.proprietario.cognome}
            onChange={hadleSetValue}
          />
        </div>
        <div className="my-3">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            className="form-control"
            name="email"
            placeholder="Inserisci la tua E-mail"
            value={formData.proprietario.email}
            onChange={hadleSetValue}
          />
        </div>
        <div className="my-3 mb-5">
          <label htmlFor="telefono">Numero di telefono</label>
          <input
            type="tel"
            className="form-control"
            name="telefono"
            placeholder="Inserisci il tuo numero"
            value={formData.proprietario.telefono}
            onChange={hadleSetValue}
          />
        </div>
        <div className="my-3">
          <h4 className="mb-3">Inserisci i dati dell'annuncio</h4>
          <label htmlFor="descrizione_immobile">Nome dell'annuncio</label>
          <input
            type="text"
            className="form-control"
            name="descrizione_immobile"
            placeholder="Inserisci il nome dell'annuncio"
            value={formData.descrizione_immobile}
            onChange={hadleSetValue}
          />
        </div>
        <div className="my-3">
          <label htmlFor="stanze">Numero di stanze</label>
          <input
            type="number"
            className="form-control"
            name="stanze"
            placeholder="Inserisci il numero di stanze"
            value={formData.stanze}
            onChange={hadleSetValue}
          />
        </div>
        <div className="my-3">
          <label htmlFor="bagni">Numero di bagni</label>
          <input
            type="number"
            className="form-control"
            name="bagni"
            placeholder="Inserisci il numero di bagni"
            value={formData.bagni}
            onChange={hadleSetValue}
          />
        </div>
        <div className="my-3">
          <label htmlFor="letti">Numero di letti</label>
          <input
            type="number"
            className="form-control"
            name="letti"
            placeholder="Inserisci il numero di letti"
            value={formData.letti}
            onChange={hadleSetValue}
          />
        </div>
        <div className="my-3">
          <label htmlFor="metri_quadrati">Metri quadrati</label>
          <input
            type="number"
            className="form-control"
            name="metri_quadrati"
            placeholder="Inserisci i metri quadrati"
            value={formData.metri_quadrati}
            onChange={hadleSetValue}
          />
        </div>
        <div className="my-3">
          <label htmlFor="indirizzo">Indirizzo</label>
          <input
            type="text"
            className="form-control"
            name="indirizzo"
            placeholder="Inserisci l'indirizzo dell'immobile"
            value={formData.indirizzo}
            onChange={hadleSetValue}
          />
        </div>
        <div>
          <select
            className="form-select my-2"
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
        </div>
        <div className="my-3">
          <label htmlFor="immagine">Immagine</label>
          <input
            type="file"
            className="form-control"
            name="immagine"
            onChange={hadleSetValue}
          />
        </div>
        <h5 className="text-center text-danger">{error}</h5>
        <div className="d-flex justify-content-center my-5">
          <button type="submit" className="btn btn-lg w-50 btn-primary">
            Invia
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewHouse;
