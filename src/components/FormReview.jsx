import { useState } from "react";

const FormReview = ({ handleClose }) => {
  const initialData = {
    name: "",
    vote: "",
    valutazione: "",
    gg_permanenza: "",
  };

  const [formReview, setFormReview] = useState(initialData);

  const hadleSetValue = (e) => {
    const { value, name } = e.target;
    setFormReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormReview(initialData);
  };

  return (
    <div className="container">
      <form action="#" onSubmit={handleSubmit}>
        <div className="mt-3 mb-3">
          <label htmlFor="name">Nome e Cognome</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Inserisci il tuo nome di battesimo"
            value={formReview.name}
            onChange={hadleSetValue}
          />
        </div>
        <div className="my-3">
          <label htmlFor="vote">Voto</label>
          <input
            type="number"
            className="form-control"
            name="vote"
            placeholder="Dai un voto da 1 a 5 al tuo pernottamento"
            value={formReview.vote}
            onChange={hadleSetValue}
          />
        </div>
        <div className="my-3">
          <label htmlFor="valutazione">Valutazione</label>
          <input
            type="number"
            className="form-control"
            name="valutazione"
            min={1}
            max={5}
            placeholder="Inserisci il numero di cuoricini"
            value={formReview.valutazione}
            onChange={hadleSetValue}
          />
        </div>
        <div className="my-3">
          <label htmlFor="gg_permanenza">Giorni di permanenza</label>
          <input
            type="number"
            className="form-control"
            name="gg_permanenza"
            placeholder="Inserisci il numero di giorni in cui sei stato ospite"
            value={formReview.gg_permanenza}
            onChange={hadleSetValue}
          />
        </div>
        <button
          type="submit"
          className="btn btn-lg w-50 btn-primary my-3"
          onClick={handleClose}
        >
          Invia
        </button>
      </form>
    </div>
  );
};

export default FormReview;
