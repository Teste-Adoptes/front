import React, { Component } from 'react';
import { Redirect } from 'react-router';


export default class LoginComponent extends Component {

  render(){
      if(this.props.isLoggedIn === true){
          return (<Redirect to="/app" />);
      }else{
          return (<div></div>);
      }
  }
}