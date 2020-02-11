import React from "react";
import "./Sidebar.css";
import FolderLink from "./FolderLink/FolderLink";

const Sidebar = props => {
  return (
    <div className="shadowBox">
      {props.folders.map((item, index) => {
        return (
          <FolderLink folderInfo={item} index={index} onClick={props.onClick} />
        );
      })}
    </div>
  );
};

export default Sidebar;
