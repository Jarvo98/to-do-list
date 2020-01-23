import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage";

function App() {
  var items = JSON.parse('[{"key":0,"name":"Hoy","toDo":[{"title":"Jugar al Tera."},{"title":"Comer."},{"title":"Dormir."}]},{"key":1,"name":"Tareas","toDo":[{"title":"Trabajar"},{"title":"Bailar"},{"title":"Ir al ba\u00f1o"}]}]');

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={function (props) {
            return <MainPage info={items} />;
          }}
        />
        {items.map(function (item) {
          return (
            <Route
              exact
              path={"/" + item.name}
              render={props => {
                return <MainPage info={items} id={item.key} />;
              }}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
