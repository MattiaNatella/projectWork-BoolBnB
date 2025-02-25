import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

const Searchbar = () => {
  const { handleSearch } = useGlobalContext();

  return (
    <div className="d-flex mt-2">
      <div>
        <input
          className="form-control searchBar"
          type="search"
          placeholder="Cerca un immobile nella tua città"
          aria-label="Search"
          onChange={handleSearch}
        />
      </div>
      <div>
        <Link to={"/ricerca-avanzata"} className="btn btn-primary ms-2">
          Ricerca Avanzata
        </Link>
      </div>
    </div>
  );
};

export default Searchbar;
