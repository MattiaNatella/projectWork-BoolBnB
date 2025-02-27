import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import Button from "../partials/Button";
import SearchBar from "../partials/SearchBar";

const Searchbar = () => {
  const { handleSearch, immobili } = useGlobalContext();
  const [error, setError] = useState("");

  const validateSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const matchFilter = immobili.some((immobile) => {
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
    <div className="d-flex my-5 w-100">
      <SearchBar error={error} validateSearch={validateSearch} />
      <div>
        <Button error={error} text={"Ricerca"} link={"/ricerca-avanzata"} />
      </div>
    </div>
  );
};

export default Searchbar;
