import React from "react";
import "./Sidebar.css";

class Sidebar extends React.Component {
  folders = ["Item 1", "Item 2", "Item 3", "Item 4"];

  render() {
    return (
      <ul>
        {this.folders.map(item => {
          return <li>{item}</li>;
        })}
      </ul>
    );
  }
}

export default Sidebar;
