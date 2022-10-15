import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-warning">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">La caja de las Dulzuras</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
          </Link>
        </li>
        <li className="nav-item">
        <Link to="1">
          <a className="nav-link" href="#">Pasteleria</a>
          </Link>
        </li>
        <li className="nav-item dropdown">
        <Link to="2">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          </Link>
          <ul className="dropdown-menu">
            <li>
            <Link to="facturas">
            <a className="dropdown-item" href="#">Facturas</a>
            </Link>
            </li>
            <li>
            <Link to="cakes">
            <a className="dropdown-item" href="#">Cakes</a>
            </Link>
            </li>
            <li><hr className="dropdown-divider"/>
            </li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
     <Link to="/cart">
      <CartWidget></CartWidget>
     </Link>
        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
  );
};

export default Navbar;