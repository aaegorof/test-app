import React from "react";
import "./styles/app.scss";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import navigation from "./navigation";
import Layout from "./Components/Layout";
import MainContent from "./Components/Layout/MainContent";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          {navigation.map((item, index) => (
            <Route
              key={item.name + index}
              exact
              path={'/'+item.name.toLowerCase()}
            >
              <MainContent item={item}/>
            </Route>
          ))}
          <Route path='/'>
            <MainContent item={navigation[0]}/>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
