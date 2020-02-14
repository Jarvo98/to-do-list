import React from "react";
import "./Content.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const Content = props => {
  const renderContentBasedOnProps = folderInfo => {
    if (!!folderInfo) {
      return (
        <div>
          <div className="title">
            <div className="header"></div>
            <div>
              <button className="button" onClick={props.onClick(props.index)}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
          {folderInfo.toDo.map(toDo => {
            return (
              <div className="toDo">
                <div>{toDo.name}</div>
                <div>
                  <button className="button">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
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
