import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
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
          <Link to={"/nuovo-immobile"} type="button" className="btn btn-info">
            Aggiungi Immobile
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
