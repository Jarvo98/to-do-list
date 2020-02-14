import React from "react";
import "./Content.css";

const Content = props => {
  const renderContentBasedOnProps = folderInfo => {
    if (!!folderInfo) {
      return (
        <div>
          <div className="title">
            <div className="header">{folderInfo.folderName}:</div>
            <div>
              <button>Añadir</button>
            </div>
          </div>
          {folderInfo.toDo.map(toDo => {
            return (
              <div className="toDo">
                <div>{toDo.name}</div>
                <div>
                  <button>Eliminar</button>
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
