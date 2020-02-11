import React from "react";
import "./FolderLink.css";

const FolderLink = props => {
  const selectedCondition = (selected, defaultClassName) => {
    if (!!selected) {
      defaultClassName += " selected";
    }
    return defaultClassName;
  };

  return (
    <div
      className={selectedCondition(
        props.folderInfo.selected,
        "buttonContainer"
      )}
      onClick={() => props.onClick(props.index)}
    >
      <span>{props.folderInfo.folderName}</span>
    </div>
  );
};

export default FolderLink;
