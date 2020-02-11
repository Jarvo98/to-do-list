import React from "react";
import "./MainPage.css";
import Sidebar from "./Sidebar/Sidebar.js";
import Content from "./Content/Content.js";

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      folders: [
        { folderName: "Folder #1", selected: false },
        { folderName: "Folder #2", selected: false },
        { folderName: "Folder #3", selected: false }
      ]
    };
  }

  selectItemInSidebar = index => {
    let numberOfFolders = this.state.folders.length;

    for (let i = 0; i < numberOfFolders; i++) {
      if (i !== index) {
        this.state.folders[i].selected = false;
      } else {
        this.state.folders[i].selected = true;
      }
    }

    this.setState({
      folders: this.state.folders
    });
  };

  render() {
    return (
      <div className="MainPage">
        <div className="side">
          <Sidebar
            folders={this.state.folders}
            onClick={this.selectItemInSidebar}
          />
        </div>
        <div className="content">
          <Content />
        </div>
      </div>
    );
  }
}

export default MainPage;
