import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ToDoTable from "./ToDoTable";

class MainPage extends React.Component {
  renderInfo(info) {
    if (!!info) {
      return info;
    } else {
      return 0;
    }
  }

  insertToDoTable(arrayOfObjects, id) {
    if (id != null) {
      return <ToDoTable info={arrayOfObjects} id={id} />;
    } else {
      return <ToDoTable info={arrayOfObjects} />
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container-fluid my-3">
          <div className="row">
            <div className="col-md-2 border-0 rounded">
              <Sidebar info={this.props.info} />
            </div>
            <div className="col-md-10 border-0 rounded">
              {this.insertToDoTable(this.props.info, this.props.id)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
