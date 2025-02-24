import axios from "axios";
import { useState } from "react";

const NewHouse = () => {
  const initialData = {
    descrizione_immobile: "",
    stanze: "",
    bagni: "",
    letti: "",
    metri_quadrati: "",
    indirizzo: "",
    immagine: "",
  };

  const [formData, setFormData] = useState(initialData);

  const hadleSetValue = (e) => {
    const { value, name } = e.target;
    if (name === "immagine") {
      setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(initialData);
  };

  return (
    <div className="container">
      <form action="#" onSubmit={handleSubmit}>
        <div className="mt-5 mb-3">
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
        <div className="my-3">
          <label htmlFor="immagine">Immagine</label>
          <input
            type="file"
            className="form-control"
            name="immagine"
            onChange={hadleSetValue}
          />
        </div>
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
