import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container d-flex flex-column justify-content-between">
        <div className="row">
          <div className="col-12 col-md-6">
            <h5>Link Utili</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/chi-siamo">Chi siamo</Link>
              </li>
              <li>
                <Link to="/servizi">Servizi</Link>
              </li>
              <li>
                <Link to="/proprieta">Proprietà</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/contatti">Contatti</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6">
            <h5>Contatti</h5>
            <p>Email: info@boolbnb.com</p>
            <p>Telefono: +39 123 456 7890</p>
            {/* <div className="social-icons"></div> */}
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center">
            <p>&copy; {new Date().getFullYear()} BoolBnB.</p>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #5b2333;
  color: #f7f4f3;
  padding: 2rem 0;

  h5 {
    color: #f7f4f3;
    margin-bottom: 1rem;
  }

  p {
    margin: 0.5rem 0;
  }

  a {
    color: #f7f4f3;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #d4d4d4;
    }
  }

  .social-icons {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;

    a {
      font-size: 1.5rem;
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export default Footer;
