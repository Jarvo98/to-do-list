import React from "react";
import "./MainPage.css";
import Sidebar from "./Sidebar/Sidebar.js";
import Content from "./Content/Content.js";

class MainPage extends React.Component {
  render() {
    return (
      <div className="MainPage">
        <div className="side">
          <Sidebar />
        </div>
        <div className="content">
          <Content />
        </div>
      </div>
    );
  }
}

export default MainPage;
