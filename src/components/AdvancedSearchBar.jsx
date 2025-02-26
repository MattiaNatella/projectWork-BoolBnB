import { useGlobalContext } from "../context/GlobalContext";
import { useEffect, useState } from "react";

const AdvancedSearchBar = () => {
  const { handleAdvancedSearch, tipologie, fetchTipologie } =
    useGlobalContext();

  const resetSearch = {
    stanze: "",
    bagni: "",
    tipologia: 0,
  };

  const [filters, setFilters] = useState(resetSearch);
  const [error, setError] = useState("");

  const validate = () => {
    if (!filters.stanze || !filters.bagni || !filters.tipologia) return false;
    return true;
  };

  useEffect(() => {
    fetchTipologie();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      setError(
        "Controlla bene i dati, potrebbe esserci qualche errore, ricordati i dati sono obbligatori"
      );
      return;
    }

    handleAdvancedSearch(filters);
    setFilters(resetSearch);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control me-2 my-2"
          type="number"
          placeholder="inserisci numero di stanze"
          aria-label="Search"
          onChange={handleChange}
          name="stanze"
          value={filters.stanze}
          min={1}
          max={10}
        />

        <input
          className="form-control me-2 my-2"
          type="number"
          placeholder="inserisci numero di bagni"
          aria-label="Search"
          onChange={handleChange}
          name="bagni"
          value={filters.bagni}
          min={1}
          max={10}
        />

        <select
          className="form-select my-2"
          aria-label="Default select example"
          onChange={handleChange}
          name="tipologia"
          value={filters.tipologia}
        >
          <option value="">Seleziona la tipologia</option>
          {Array.isArray(tipologie) &&
            tipologie?.map((tipologia) => (
              <option key={tipologia?.id} value={tipologia?.id}>
                {tipologia?.descrizione}
              </option>
            ))}
        </select>
        <h6 className="text-center text-danger">{error}</h6>
        <button type="submit" className="btn btn-primary mt-2 w-100 mb-5">
          Cerca
        </button>
      </form>
    </>
  );
};

export default AdvancedSearchBar;
