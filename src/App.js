import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage";

function App() {
  var items = [
    {
      name: "Dashboard"
    },
    {
      name: "Shortcuts"
    },
    {
      name: "Overview"
    },
    {
      name: "Events"
    },
    {
      name: "Profile"
    },
    {
      name: "Status"
    }
  ];

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        {items.map(item => {
          return (
            <Route
              exact
              path={"/" + item.name}
              render={props => {
                return <MainPage info={this.items} name={item} />;
              }}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
