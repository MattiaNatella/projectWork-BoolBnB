import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";
import AdvancedSearchBar from "../components/AdvancedSearchBar";
import NewCard from "../partials/NewCard";

const AdvancedSearch = () => {
  const { searchTerm, filteredImmobili, fetchFilteredImmobili, advancedFilter } =
    useGlobalContext();

  const showFilter = (advancedFilter, filteredImmobili) => {
    if (advancedFilter == null) {
      return filteredImmobili?.map((immobile) => (
        <NewCard immobile={immobile} key={immobile.id} />
      ))
    }
    if (advancedFilter.length == 0) {
      return <h2>Immobile non presente</h2>
    }

    if (advancedFilter.length > 0) {
      return advancedFilter?.map((immobile) => (
        <NewCard immobile={immobile} key={immobile.id} />))
    }
  }


  useEffect(() => {
    fetchFilteredImmobili(searchTerm);
    console.log(filteredImmobili);
  }, []);

  return (
    <div className="container mt-2">
      <div className="mt-2 d-flex justify-content-center">
        <AdvancedSearchBar />
      </div>
      <h2 className="mb-5">Ecco i risultati di ricerca per {searchTerm.toUpperCase()}</h2>
      <div className="row row-cols-lg-3 mb-5">
        {showFilter(advancedFilter, filteredImmobili)}
      </div>
    </div>
  );
};

export default AdvancedSearch;
