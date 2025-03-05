
import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";
import Searchbar from "../components/Searchbar";
import NewCard from "../partials/NewCard";
import AnimatedTextNavbar from "../partials/AnimatedTextNavbar";

const HomePage = () => {
  const { immobili, fetchImmobili } = useGlobalContext();

  useEffect(() => {
    fetchImmobili()
  }, []);

  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-center pt-5">
          <AnimatedTextNavbar />
        </div>
        <div className="d-flex justify-content-center">
          <Searchbar />
        </div>
        <h2 className="mb-4 fw-bold text-wine text-uppercase">I più apprezzati</h2>
        <div className="row row-cols-lg-2 row-cols-xl-3 pb-5">
          {immobili.slice(0, 3).map((immobile) => (
            <div key={immobile.id}>
              <NewCard immobile={immobile} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
