import React from "react";
import "./MainPage.css";
import Sidebar from "./Sidebar/Sidebar.js";
import Content from "./Content/Content.js";

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      folders: [
        {
          folderName: "Folder #1",
          selected: false,
          toDo: [
            {
              name: "Folder#1Item#1"
            },
            {
              name: "Folder#1Item#2"
            },
            {
              name: "Folder#1Item#3"
            }
          ]
        },
        {
          folderName: "Folder #2",
          selected: false,
          toDo: [
            {
              name: "Folder#2Item#1"
            },
            {
              name: "Folder#2Item#2"
            },
            {
              name: "Folder#2Item#3"
            }
          ]
        },
        {
          folderName: "Folder #3",
          selected: false,
          toDo: [
            {
              name: "Folder#3Item#1"
            },
            {
              name: "Folder#3Item#2"
            },
            {
              name: "Folder#3Item#3"
            }
          ]
        }
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

  renderContentBasedOnSelection = folders => {
    if (!!folders) {
      let amountOfFolders = folders.length;

      for (let i = 0; i < amountOfFolders; i++) {
        if (folders[i].selected) {
          return <Content folderInfo={folders[i].toDo} index={i} />;
        }
      }

      return <Content />;
    }
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
          {this.renderContentBasedOnSelection(this.state.folders)}
        </div>
      </div>
    );
  }
}

export default MainPage;
