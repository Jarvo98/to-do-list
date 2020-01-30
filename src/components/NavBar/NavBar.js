import React from "react";
import "./NavBar.css";

const NavBar = () => {
  /* let navBarLinks = [
    {
      iconName: faBars,
      name: "Home"
    },
    {
      iconName: faPowerOff,
      name: "Log out"
    }
  ]; */

  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div></div>
        <div>
          <a href="/" className="toolbar__logo">
            THE LOGO
          </a>
        </div>
        <div className="toolbar__navigation__items">
          <ul>
            <li>
              <a href="/">Users</a>
            </li>
            <li>
              <a href="/">Products</a>
            </li>
          </ul>
        </div>
        {/* navBarLinks.map(navBarLink => {
          return (
            <NavBarLink iconName={navBarLink.iconName} name={navBarLink.name} />
          );
        }) */}
      </nav>
    </header>
  );
};

export default NavBar;
