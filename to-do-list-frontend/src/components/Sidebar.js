import React from "react";
import { Link } from "react-router-dom";
import "../styles/button.css";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="list-group">
          {this.props.info.map(item => {
            return (
              <Link to={"/" + item.name} className="button">
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Sidebar;
