import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link
          className="brand-logo center light-blue-text text-lighten-2"
          to="/"
        >
          React Movie
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
