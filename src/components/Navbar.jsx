import Button from "../partials/Button";
import AnimatedTextNavbar from "../partials/AnimatedTextNavbar";

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
            <Button text={"Aggiungi Immobile"} link={"/nuovo-immobile"} />
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
