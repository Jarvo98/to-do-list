import React from "react";
import NavBarLink from "./NavBarLink/NavBarLink.js";
import "./NavBar.css";
import { faHome, faPowerOff } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  let navBarLinks = [
    {
      iconName: faHome,
      name: "Home"
    },
    {
      iconName: faPowerOff,
      name: "Log out"
    }
  ];

  return (
    <nav>
      {navBarLinks.map(navBarLink => {
        return (
          <NavBarLink iconName={navBarLink.iconName} name={navBarLink.name} />
        );
      })}
    </nav>
  );
};

export default NavBar;
