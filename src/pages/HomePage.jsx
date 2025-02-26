import Hearts from "../components/Hearts";
import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";
import Card from "../components/Card";
import Searchbar from "../components/Searchbar";

const HomePage = () => {

  const { immobili, fetchImmobili } = useGlobalContext()

  useEffect(fetchImmobili, [])

  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-center">
          <Searchbar />
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          {immobili.map((immobile) => (
            <div className="col-md-4 m-2" key={immobile.id}>
              <Card immobile={immobile} />
            </div>
          ))}
        </div>
      </div>
      <Hearts />
    </div>
  );
};

export default HomePage;
