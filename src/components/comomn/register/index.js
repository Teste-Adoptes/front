import React, { Component } from 'react';
import { Redirect } from 'react-router';


export default class CadastroComponent extends Component {

  render(){
      if(this.props.isRegister === true){
          return (<Redirect to="/register" />);
      }else{
          return (<div></div>);
      }
  }
}