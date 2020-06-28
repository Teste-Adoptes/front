import React, { Component } from 'react';
import { Redirect } from 'react-router';


export default class CadastroComponent extends Component {

  render(){
      if(this.props.isCadastro === true){
          return (<Redirect to="/cadastro" />);
      }else{
          return (<div></div>);
      }
  }
}