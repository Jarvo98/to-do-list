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
    this.setState(state => {
      let counter = state.folders.length;

      for (let i = 0; i < counter; i++) {
        if (i !== index) {
          state.folders[i].selected = false;
        } else {
          state.folders[i].selected = true;
        }
      }

      return {
        folders: state.folders
      };
    });
  };

  renderContentBasedOnSelection = folders => {
    if (!!folders) {
      let amountOfFolders = folders.length;

      for (let i = 0; i < amountOfFolders; i++) {
        if (folders[i].selected) {
          return <Content folderInfo={folders[i]} index={i} />;
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
