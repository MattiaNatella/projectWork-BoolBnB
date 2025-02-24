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
          <a href="/nuovo-immobile" className="text-dark bg-success">
            Aggiungi un immobile
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
