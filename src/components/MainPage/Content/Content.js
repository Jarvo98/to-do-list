import React from "react";
import "./Content.css";

const Content = props => {
  const renderContentBasedOnProps = folderInfo => {
    if (!!folderInfo) {
      return (
        <ul>
          {folderInfo.map(toDo => {
            return <li>{toDo.name}</li>;
          })}
        </ul>
      );
    }
  };

  return (
    <div className="shadowBox">
      {renderContentBasedOnProps(props.folderInfo)}
    </div>
  );
};

export default Content;
