import { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

const Searchbar = () => {
  const { handleSearch, immobili } = useGlobalContext();
  const [error, setError] = useState("");

  const validateSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const matchFilter = immobili.some(immobile => {
      const indirizzo = immobile.indirizzo.toLowerCase();
      return indirizzo.includes(searchTerm);
    });

    if (!matchFilter) {
      setError("Nessun immobile trovato con questo indirizzo");
    } else {
      setError("");
      handleSearch(e);
    }
  };

  return (
    <div className="d-flex mt-2">
      <div>
        <input
          className="form-control searchBar"
          type="search"
          placeholder="Cerca un immobile nella tua città"
          aria-label="Search"
          onChange={validateSearch}
        />
        {error && <div className="text-danger mt-2">{error}</div>}
      </div>
      <div>
        <Link to={error ? "#" : "/ricerca-avanzata"}
          className={`btn btn-primary ms-2 ${error ? "disabled" : ""}`}>
          Ricerca Avanzata
        </Link>
      </div>
    </div>
  );
};

export default Searchbar;
