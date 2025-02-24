import axios from "axios";
import { useContext, createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const api_url = import.meta.env.VITE_API_URL;

  const [immobili, setImmobili] = useState([]);
  const [immobile, setImmobile] = useState(null);

  const fetchImmobili = () => {
    axios
      .get(api_url)
      .then((res) => {
        setImmobili(res.data);
      })
      .catch((err) => console.log(err));
  };

  const fetchImmobile = (id) => {
    axios
      .get(`${api_url}/${id}`)
      .then((res) => {
        setImmobile(res.data);
      })
      .catch((err) => console.log(err));
  };

  const value = {
    immobili,
    fetchImmobili,
    immobile,
    fetchImmobile,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { useGlobalContext, GlobalProvider };
