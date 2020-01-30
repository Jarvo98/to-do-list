import React from "react";
import "./NavBarLink.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBarLink = props => {
  return (
    <button>
      <FontAwesomeIcon icon={props.iconName} />
    </button>
  );
};

export default NavBarLink;
