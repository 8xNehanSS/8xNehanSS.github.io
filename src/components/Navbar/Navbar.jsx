import React from "react";
import "./navbar.css";

const Navbar = (props) => {
  let name;
  {
    props.window < 650 ? (name = "N.S") : (name = "Nehan Sudasinghe");
  }
  return (
    <nav>
      <h1 className="nav-heading">{name}</h1>
      <h1 className="nav-connect">
        <a href="#credits">Lets Connect!</a>
      </h1>
    </nav>
  );
};

export default Navbar;
