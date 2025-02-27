import Button from "../partials/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-wine">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="https://img.freepik.com/vettori-premium/eccezionale-monogramma-bn-o-bnb-o-nb-lettere-logo-design_873531-453.jpg?w=996"
              alt="Logo"
              width="100"
              height="100"
              className="d-inline-block align-text-top imgLogo"
            />
          </a>
          <Button text={"Aggiungi Immobile"} link={"/nuovo-immobile"} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
