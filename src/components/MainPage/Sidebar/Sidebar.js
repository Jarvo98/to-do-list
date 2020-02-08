import React from "react";
import "./Sidebar.css";
import FolderLink from "./FolderLink/FolderLink";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      folders: this.props.folders
    };
  }

  render() {
    return (
      <div className="shadowBox">
        {this.state.folders.map((item, index) => {
          return <FolderLink folderInfo={item} index={index} />;
        })}
      </div>
    );
  }
}

export default Sidebar;
