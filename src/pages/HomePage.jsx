import Hearts from "../components/Hearts";
import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";
import Card from "../components/Card";

const HomePage = () => {

  const {immobili, fetchImmobili} = useGlobalContext()

  useEffect(fetchImmobili, [])

  return (
    <div>
      <div className="conatiner">
        {(immobili.map((immobile) => {(
            <div className="col-md-4" key={immobile.id}>
              <Card immobile={immobile} />
            </div>)
        }))}
      </div>
      <Hearts />
    </div>
  );
};

export default HomePage;
