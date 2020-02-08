import React from "react";
import "./MainPage.css";
import Sidebar from "./Sidebar/Sidebar.js";
import Content from "./Content/Content.js";

class MainPage extends React.Component {
  folders = [
    { folderName: "Folder #1", selected: false },
    { folderName: "Folder #2", selected: false },
    { folderName: "Folder #3", selected: false }
  ];

  render() {
    return (
      <div className="MainPage">
        <div className="side">
          <Sidebar folders={this.folders} />
        </div>
        <div className="content">
          <Content />
        </div>
      </div>
    );
  }
}

export default MainPage;
