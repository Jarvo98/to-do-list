import React from "react";
import "./NavBar.css";
import src from "../../assets/ensolvers.jpeg";

const NavBar = () => {
  return (
    <header>
      <nav>
        <div>
          <a href="/">
            <img src={src} alt="logo" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
