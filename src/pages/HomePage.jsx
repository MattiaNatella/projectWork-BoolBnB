import Hearts from "../components/Hearts";
import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";
import Card from "../components/Card";
import Searchbar from "../components/Searchbar";
import NewCard from "../partials/NewCard";

const HomePage = () => {
  const { immobili, fetchImmobili } = useGlobalContext();

  useEffect(fetchImmobili, []);

  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-center">
          <Searchbar />
        </div>
        <div className="row row-cols-lg-3 mb-5">
          {immobili.map((immobile) => (
            <div key={immobile.id}>
              <NewCard immobile={immobile} />
            </div>
          ))}
        </div>
      </div>
      <Hearts />
    </div>
  );
};

export default HomePage;
