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
    <div>
     {Array.isArray(filteredImmobili) && filteredImmobili?.map((immobile) => (
      <Card immobile={immobile} key={immobile.id} />
     ))}

    </div>
  );
};

export default AdvancedSearch;
