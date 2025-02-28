import Social from "../partials/Social";
const Footer = () => {
  return (
    <div className="container pt-3">
      <div className="row row-cols-6 justify-content-center">
        <div className="col">
          <h5 className="border-bottom">Link Utili</h5>
          <ul className="list-unstyled">
            <li>
              <a to="/">Home</a>
            </li>
            <li>
              <a to="/chi-siamo">Chi siamo</a>
            </li>
            <li>
              <a to="/servizi">Servizi</a>
            </li>
            <li>
              <a to="/proprieta">Proprietà</a>
            </li>
            <li>
              <a to="/faq">FAQ</a>
            </li>
            <li>
              <a to="/contatti">Contatti</a>
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
