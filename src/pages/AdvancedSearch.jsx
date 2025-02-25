import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"
import Card from "../components/Card"

const AdvancedSearch = () => {

  const {searchTerm, filteredImmobili, fetchFilteredImmobili} = useGlobalContext()

  useEffect(() => {
    fetchFilteredImmobili(searchTerm); 
    console.log(filteredImmobili);
       
  }, []);  
  
  return (
    <div className="container mt-2 d-flex justify-content-center">
      <div className="col-12-md-4 mt-2">
        {Array.isArray(filteredImmobili) && filteredImmobili?.map((immobile) => (
          <Card immobile={immobile} key={immobile.id} />
        ))}
      </div>

    </div>
  );
};

export default AdvancedSearch;
