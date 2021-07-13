import React from "react";

import { Route, Switch } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Organizer from "./containers/Organizer/Organizer";
import Calendar from "./components/Calendar/Calendar";
import Auth from "./containers/Auth/Auth";

const App = (props) => {
  return (
    <Layout>
      <Switch>
        <Route path="/organizer" component={Organizer} />
        <Route path="/autentification" component={Auth} />
        <Route path="/" exact component={Calendar} />
      </Switch>
    </Layout>
  );
};

export default App;
