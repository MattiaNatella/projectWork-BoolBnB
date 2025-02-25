import { useGlobalContext } from "../context/GlobalContext"
import { useEffect, useState } from "react"


const AdvancedSearchBar = () => {

  const {handleAdvancedSearch, tipologie, fetchTipologie} = useGlobalContext()
  const [stanze, setStanze] = useState('');
  const [bagni, setBagni] = useState('');
  const [tipologia, setTipologia] = useState('');

  useEffect(()=>{ fetchTipologie()}, [fetchTipologie])

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdvancedSearch({ stanze, bagni, tipologia });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
          className="form-control me-2"
          type="number"
          placeholder="inserisci numero di stanze"
          aria-label="Search"
          onChange={(e) => setStanze(e.target.value)} 
          min={1}
          max={10}
              
        />

      <input 
          className="form-control me-2"
          type="number"
          placeholder="inserisci numero di bagni"
          aria-label="Search"
          onChange={(e) => setBagni(e.target.value)}
          min={1}
          max={10}       
        />

      <select 
        className="form-select" 
        aria-label="Default select example" 
        onChange={(e) => setTipologia(e.target.value)}>

        <option value="">Seleziona la tipologia</option>
        {Array.isArray(tipologie) && tipologie?.map((tipologia) => (
          <option key={tipologia?.id} value={tipologia?.id}>{tipologia?.descrizione}
          </option>
        ))}
        
      </select>
      <button type="submit" className="btn btn-primary mt-2">Cerca</button>
    </form>
  )
}

export default AdvancedSearchBar