import Button from "../partials/Button";
import AnimatedTextNavbar from "../partials/AnimatedTextNavbar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-wine">
        <div className="container d-flex justify-content-between">
          <div>
            <a className="navbar-brand" href="/">
              <img
                src="../../public/BoolBnb-logo.jpg"
                alt="Logo"
                width="100"
                height="100"
                className="d-inline-block align-text-top w-100 imgLogo"
              />
            </a>
          </div>

          <div>
            <ul className="list-unstyled gap-5 mt-4 d-none d-sm-flex">
              <li>
                <Link to={"/"} className="text-white-smoke">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/chi-siamo"} className="text-white-smoke">
                  Chi siamo
                </Link>
              </li>
              <li>
                <Link to={"/faq"} className="text-white-smoke">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to={"/lavora-con-noi"} className="text-white-smoke">
                  Lavora con noi
                </Link>
              </li>
              <li>
                <Link to={"/contatti"} className="text-white-smoke">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Button text={"Aggiungi Immobile"} link={"/nuovo-immobile"} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
