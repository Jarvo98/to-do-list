import React from "react";
import "./Sidebar.css";
import FolderLink from "./FolderLink/FolderLink";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="shadowBox">
        {this.props.folders.map((item, index) => {
          return (
            <FolderLink
              folderInfo={item}
              index={index}
              onClick={this.props.onClick}
            />
          );
        })}
      </div>
    );
  }
}

export default Sidebar;
