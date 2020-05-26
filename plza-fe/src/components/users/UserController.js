import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import Dashboard from './Dashboard';
import PrivateRoute from "../../components/PrivateRoute";


const UserController = () => (
  <Switch>
    <Route path="/users/login">
      <Login />
    </Route>

    <Route path="/users/register">
      <Register />
    </Route>
  
  
    <PrivateRoute path = "/users/dash" component = {Dashboard} /> 
  </Switch>
);

export default UserController;
