import React from "react";
import "./navbar.css";

const Navbar = (props) => {
  let name;
  {
    props.window < 650 ? (name = "N.S") : (name = "Nehan Sudasinghe");
  }
  return (
    <nav>
      <div className="nav-heading">
        <img
          src="/assets/images/icon_green.png"
          width="40"
          className="nav-img"
        />
        <h1 className="nav-title">{name}</h1>
      </div>
      <h1 className="nav-connect">
        <a href="#credits">Lets Connect!</a>
      </h1>
    </nav>
  );
};

export default Navbar;
