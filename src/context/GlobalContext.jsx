import axios from "axios";
import { useContext, createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const api_url = import.meta.env.VITE_API_URL;
  const api_url_filter = import.meta.env.VITE_API_URL_FILTERED;
  const api_url_tipologie = import.meta.env.VITE_API_URL_TIPOLOGIE;

  const [immobili, setImmobili] = useState([]);
  const [immobile, setImmobile] = useState(null);
  const [tipologie, setTipologie] = useState([])
  const [filteredImmobili, setFilteredImmobili] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

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

  const fetchFilteredImmobili = (searchTerm) => {
    axios
      .get(`${api_url_filter}indirizzo=${searchTerm}`)
      .then((res) => {
        setFilteredImmobili(res.data);
      })
      .catch((err) => console.log(err));
  };

  const fetchTipologie = () => {
    axios.get(api_url_tipologie)
      .then((res) => {
        setTipologie(res.data)
      })
      .catch((err) => console.log(err));
  }



  const handleSearch = (e) => {

    const searchParam = e.target.value.toLowerCase()
    const matchFilter = filteredImmobili.filter(immobile => {
      const indirizzo = immobile.indirizzo.toLowerCase()
      return indirizzo.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setFilteredImmobili(matchFilter)
    setSearchTerm(searchParam)
  }

  const handleAdvancedSearch = ({ stanze, bagni, tipologia }) => {

    const matchFilter = immobili.filter(immobile => {
      const matchesStanze = stanze ? immobile.stanze == stanze : true;
      const matchesBagni = bagni ? immobile.bagni == bagni : true;
      const matchesTipologia = tipologia ? tipologia.toLowerCase().includes(tipologia.toLowerCase()) : true;
      return matchesStanze && matchesBagni && matchesTipologia;
    })
    setFilteredImmobili(matchFilter)
  }

  const value = {
    immobili,
    fetchImmobili,
    immobile,
    fetchImmobile,
    filteredImmobili,
    fetchFilteredImmobili,
    setFilteredImmobili,
    handleSearch,
    searchTerm,
    handleAdvancedSearch,
    tipologie,
    fetchTipologie
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { useGlobalContext, GlobalProvider };
