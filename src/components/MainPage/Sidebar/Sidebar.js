import React from "react";
import "./Sidebar.css";
import FolderLink from "./FolderLink/FolderLink";

class Sidebar extends React.Component {
  folders = ["", "", "", "", "", "", "", "", "", ""];

  render() {
    return (
      <div className="shadowBox">
        {this.folders.map(item => {
          return <FolderLink />;
        })}
      </div>
    );
  }
}

export default Sidebar;
