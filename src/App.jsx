import { GlobalProvider } from "./context/GlobalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import Detail from "./pages/Detail";
import NewHouse from "./pages/NewHouse";
import AdvancedSearch from "./pages/AdvancedSearch";
import NotFound404 from "./pages/NotFound404";

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/dettaglio-immobile/:id" Component={Detail} />
            <Route path="/nuovo-immobile" Component={NewHouse} />
            <Route path="/ricerca-avanzata" Component={AdvancedSearch} />
            <Route path="/*" Component={NotFound404} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
