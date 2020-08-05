import React from "react";
import { Link } from "react-router-dom";
export default function HeaderPerso() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          soacloud
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/login" className="nav-link ">
              login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
