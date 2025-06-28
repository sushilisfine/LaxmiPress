// src/components/Header.jsx
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-brand-purple text-brand-gold px-4">
      <div className="container-fluid">
        <Link
          className="navbar-brand d-flex align-items-center text-brand-gold"
          to="/"
        >
          <img src={logo} alt="Logo" className="me-2 rounded logo-img" />
          <strong>Laxmi Printing Press</strong>
        </Link>
        <div className="collapse navbar-collapse">
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
