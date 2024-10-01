import React from "react";
import {Link} from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>MTOR COMPLEX</h1>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/alumnos">Alumnos</Link>
          </li>
          <li>
            <Link to="/preinscripcion">Preinscripción</Link>
          </li>
          <li>
            <Link to="/reportes">Reportes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
