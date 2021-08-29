import React from "react";
import "./styles/app.scss";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import navigation from "./navigation";
import Layout from "./Components/Layout";

const App = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            Главная
          </Route>
          {navigation.map((item, index) => (
            <Route
              key={item.name + index}
              exact
              path={'/'+item.name.toLowerCase()}
            >
              <Layout item={item}/>
            </Route>
          ))}
        </Switch>
    </Router>
  );
};

export default App;
