import React from "react";
 
import HomeScreen from "./screens/home";
import LoginScreen from "./screens/login";
import RegisterScreen from "./screens/register";
import AppScreen from "./screens/app";
 
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = (props) => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={HomeScreen} />
      <Route exact path='/login' component={LoginScreen} />
      <Route exact path='/register' component={RegisterScreen} />
      <PrivateRoute exact path='/app' component={AppScreen} />
    </Switch>
  </BrowserRouter>
);
 
export default Routes;