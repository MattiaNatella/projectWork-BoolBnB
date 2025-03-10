import { Link } from "react-router-dom";
import Social from "../partials/Social";
const Footer = () => {
  return (
    <div className="container pt-3">
      <div className="row row-cols-sm-6 justify-content-center">
        <div className="col">
          <h5 className="border-bottom">Link Utili</h5>
          <ul className="list-unstyled">
            <li>
              <Link className="footer-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/chi-siamo">
                Chi siamo
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/servizi">
                Servizi
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/faq">
                FAQ
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/contatti">
                Contatti
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/lavora-con-noi">
                Lavora con noi
              </Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <h5 className="border-bottom">Contatti</h5>
          <p>Email: info@boolbnb.com</p>
          <p>Telefono: +39 123 456 7890</p>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-12 text-center">
          <div>
            <p>Seguici sui nostri social!</p>
            <Social />
          </div>
          <p>&copy; {new Date().getFullYear()} BoolBnB</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
