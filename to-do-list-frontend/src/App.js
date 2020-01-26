import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
  }

  addNewFolder = () => {
    const headers = new Headers();

    let folderName = prompt("Submit the folder's name.");

    let folderItem = {
      key: this.state.items.length,
      name: folderName,
      toDo: []
    };

    let headBody = JSON.stringify(folderItem);

    const head = {
      method: 'POST',
      header: headers,
      mode: 'cors',
      cache: 'default',
      body: headBody
    }

    /* fetch("http://localhost:8080/folder/add/", head).then(() => {
      this.state.items.push(folderItem);
      this.setState({
        items: this.state.items
      });
    }).catch((error) => {
      console.log(error);
    }); */
  }

  async componentDidMount() {
    const headers = new Headers();
    const head = {
      method: 'GET',
      header: headers,
      mode: 'cors',
      cache: 'default'
    }

    await fetch('http://localhost:8080/folder/get/', head).then((data) => {
      return data.json();
    }).then((data) => {
      this.setState({
        items: data
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <MainPage info={this.state.items} handleNewFolder={this.addNewFolder} />;
            }}
          />
          {this.state.items.map((item) => {
            return (
              <Route
                exact
                path={"/" + item.name}
                render={() => {
                  return <MainPage info={this.state.items} id={item.key} handleNewFolder={this.addNewFolder} />;
                }}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
