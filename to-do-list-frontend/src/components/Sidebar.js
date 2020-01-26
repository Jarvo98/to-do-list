import React from "react";
import { Link } from "react-router-dom";
import "../styles/button.css";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      info: []
    };
  }

  componentDidMount = () => {
    this.setState({
      info: this.props.info
    });
  }

  render = () => {
    return (
      <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="list-group">
          <button onClick={this.props.handleNewFolder}>
            Añadir
          </button>
          {this.state.info.map(item => {
            return (
              <Link to={"/" + item.name} className="button">
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Sidebar;
