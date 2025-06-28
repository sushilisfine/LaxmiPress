import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

export default function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const toggleNavbar = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg bg-brand-purple text-brand-gold px-3 py-2">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Link
            className="navbar-brand d-flex align-items-center text-brand-gold mb-0"
            to="/"
          >
            <img src={logo} alt="Logo" className="me-2 rounded logo-img" />
            <strong className="fs-6">Laxmi Printing Press</strong>
          </Link>
        </div>
        <button
          className="navbar-toggler ms-auto"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${
            !isNavCollapsed ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
