import React, { Component } from 'react';
import { Redirect } from 'react-router';


export default class LogoutComponent extends Component {

  render(){
      if(this.props.isLogout === true){
          return (<Redirect to="/" />);
      }else{
          return (<div></div>);
      }
  }
}