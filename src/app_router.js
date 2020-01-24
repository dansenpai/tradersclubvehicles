import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './screens/home/home';
import VehiclesRegister from './screens/vehicles/vehicles_register';
import VehicleEdit from './screens/vehicles/vehicles_edit';

const AppRouters = props => {

  return(
    <Router>
      {props.children}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/vehicle-register">
          <VehiclesRegister />
        </Route>

        <Route path="/vehicle-edit/:id">
          <VehicleEdit />
        </Route>
      </Switch>
    </Router>
  )
}

export default AppRouters;
