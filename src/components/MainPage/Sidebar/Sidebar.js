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

  selectItemInSidebar = index => {
    let updatedFolders = this.state.folders;

    for (let i = 0; i < updatedFolders.length; i++) {
      if (i !== index) {
        updatedFolders[i].selected = false;
      } else {
        updatedFolders[i].selected = true;
      }
    }

    this.setState({
      folders: updatedFolders
    });
  };

  render() {
    return (
      <div className="shadowBox">
        {this.state.folders.map((item, index) => {
          return (
            <FolderLink
              folderInfo={item}
              index={index}
              onClick={this.selectItemInSidebar}
            />
          );
        })}
      </div>
    );
  }
}

export default Sidebar;
