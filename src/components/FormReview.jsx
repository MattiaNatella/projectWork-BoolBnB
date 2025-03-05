import { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../context/GlobalContext";

const FormReview = ({ handleClose, immobile }) => {
 
  const { fetchImmobile } = useGlobalContext()

  const api_url = `${import.meta.env.VITE_API_URL}/${immobile.id}/recensioni`;
  console.log(immobile.id);
  

  const initialData = {
    username: "",    
    valutazione: "",
    testo: "",
    gg_permanenza: "",
  };

  const [formReview, setFormReview] = useState(initialData);
  const [errorMsg, setErrorMsg] = useState("");

  const validateReview = () =>{
    if (!formReview.username || !formReview.testo) return false
    if(isNaN(formReview.valutazione) || formReview.valutazione < 1 || formReview.valutazione > 5) return false
    if (isNaN(formReview.gg_permanenza) || formReview.gg_permanenza < 1) return false;    
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!validateReview()){
      setErrorMsg("inserire valori corretto")
      return
    }
    axios.post(api_url,formReview, {headers: { 'Content-Type': 'application/json'}})
    .then((res)=>{
      console.log(res.data);
      
      setFormReview(initialData)
      setErrorMsg("")      
      handleClose()
    })
    .catch(err => {      
      console.log(err);
      setErrorMsg("Errore durante l'invio della recensione");        
    })
    .finally(()=>{
      fetchImmobile(immobile.id)
    })
  };

  const handleSetValue = (e) => {
    const { value, name } = e.target;
    setFormReview((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container">
      <form action="#" onSubmit={handleSubmit}>
        <div className="mt-3 mb-3 text-wine">
          <label htmlFor="username">Nome e Cognome</label>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Inserisci il tuo nome di battesimo"
            value={formReview.username}
            onChange={handleSetValue}
          />
        </div>
        <div className="my-3 text-wine">
          <label htmlFor="valutazione">Voto</label>
          <input
            type="number"
            className="form-control"
            name="valutazione"
            min={1}
            max={5}
            placeholder="Dai un voto da 1 a 5 al tuo pernottamento"
            value={formReview.valutazione}
            onChange={handleSetValue}
          />
        </div>        
        <div className="my-3 text-wine">
          <label htmlFor="gg_permanenza">Giorni di permanenza</label>
          <input
            type="number"
            className="form-control"
            name="gg_permanenza"
            placeholder="Inserisci il numero di giorni in cui sei stato ospite"
            value={formReview.gg_permanenza}
            onChange={handleSetValue}
          />
        </div>
        <div>
          <label htmlFor="testo" className="text-wine">Raccontaci la tua esperienza</label>
          <textarea 
          type="text"
          className="form-control"
          name="testo"
          placeholder="Raccontaci in breve la tua esperienza(max 100 caratteri)"
          value={formReview.testo}
          onChange={handleSetValue} 
          maxlength="100" minlength="5"
          />            
        </div>
        {errorMsg && <div className="text-danger mt-2">{errorMsg}</div>}
        <button
          type="submit"
          className="btn btn-lg button-modal w-50 my-3"          
        >
          Invia
        </button>
      </form>
    </div>
  );
};

export default FormReview;
