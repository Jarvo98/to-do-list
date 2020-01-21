import React from "react";
import Navbar from "./navbar";
import Sidebar from "./Sidebar";

class MainPage extends React.Component {
  renderInfo(info) {
    if (!!info) {
      return info.name;
    } else {
      return "";
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
              {this.renderInfo(this.props.name)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
