import { useGlobalContext } from "../context/GlobalContext"


const AdvancedSearchBar = () => {

  const {handleAdvancedSearch} = useGlobalContext()

  return (
    <div>
      <input 
          className="form-control me-2"
          type="number"
          placeholder="inserisci numero di stanze"
          aria-label="Search"
          onChange={handleAdvancedSearch} 
          min={1}
          max={10}
              
        />

      <input 
          className="form-control me-2"
          type="number"
          placeholder="inserisci numero di bagni"
          aria-label="Search"
          onChange={handleAdvancedSearch}
          min={1}
          max={10}       
        />

      <select className="form-select" aria-label="Default select example" onChange={handleAdvancedSearch}>
        <option selected>Seleziona la tipologia</option>
        {}
        
      </select>
    </div>
  )
}

export default AdvancedSearchBar