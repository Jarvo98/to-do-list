import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage";

function App() {
  var items = [
    {
      key: 0,
      name: "Dashboard",
      toDo: [
        {
          title: 'tarea'
        },
        {
          title: 'cocinar'
        },
        {
          title: 'comer'
        }
      ]
    },
    {
      key: 1,
      name: "Shortcuts",
      toDo: [
        {
          title: 'Estudiar'
        },
        {
          title: 'Trabajar'
        },
        {
          title: 'dormir'
        }
      ]
    },
    {
      key: 2,
      name: "Overview",
      toDo: [
        {
          title: 'Leer'
        },
        {
          title: 'Conversar'
        },
        {
          title: 'Pensar'
        }
      ]
    },
    {
      key: 3,
      name: "Events",
      toDo: [
        {
          title: 'Actuar'
        },
        {
          title: 'Hacer deporte'
        },
        {
          title: 'Codificar'
        }
      ]
    },
    {
      key: 4,
      name: "Profile",
      toDo: [
        {
          title: 'Fornicar'
        },
        {
          title: 'Ver el celular'
        },
        {
          title: 'Buscar trabajo'
        }
      ]
    },
    {
      key: 5,
      name: "Status",
      toDo: [
        {
          title: 'Ver JoJo'
        },
        {
          title: 'Ver fire force'
        },
        {
          title: 'Ver doctor stone'
        }
      ]
    }
  ];

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={props => {
          return <MainPage info={items} />
        }}/>
        {items.map(item => {
          return (
            <Route
              exact
              path={"/" + item.name}
              render={props => {
                return <MainPage info={items} id={item.key}/>;
              }}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
