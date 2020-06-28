import React from "react";
 
import HomeScreen from "./screens/home";
import LoginScreen from "./screens/login";
import CadastroScreen from "./screens/cadastro";
import HomeUserScreen from "./screens/user/home_user";
 
import { Switch, Route } from 'react-router-dom'
 
const Routes = (props) => (
  <Switch>
    <Route exact path='/' component={HomeScreen} />
    <Route exact path='/login' component={LoginScreen} />
    <Route exact path='/cadastro' component={CadastroScreen} />
    <Route exact path='/user' component={HomeUserScreen} />
  </Switch>
);
 
export default Routes;