import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/Header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img
            src="https://www.obioorganico.com/wp-content/uploads/2021/02/cropped-OBIO-Logo_color-RGB.png"
            alt="certificado1"
            className="logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Productos <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cooperativas/1">
                Cooperativas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/analytics">
                Analíticas
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button
              className="btn btn-outline-success mr-2 my-2 my-sm-0"
              type="submit"
            >
              Iniciar sesión
            </button>
            <button className="btn btn-success my-2 my-sm-0" type="submit">
              Regístrate
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Header;
