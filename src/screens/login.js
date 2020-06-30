import React, {Fragment, useState} from 'react';
import SessionService from '../services/session'; 
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LoginComponent from '../components/comomn/login/index';
import RegisterComponent from '../components/comomn/register/index';
import {login, logout} from '../services/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const LoginScreen = () => {
  const [email, setEmail] = useState({})
  const [password, setPassword] = useState({})
  const [isLogin, setLogin] = useState({})
  const [isRegister, setRegister] = useState({})

  const classes = useStyles();
  
  async function handleClickEntrar(e) {
    const data = {email: email, password: password}
    
    await SessionService.login(data)
      .then(function (response) {
        login(response.data.token, response.data.id)
        setLogin(true);
      })
      .catch(function (error) {
        logout()
        alert('Email or password incorretc!');
        setLogin(false);
      });
  }

  function handleClickRegister(e){
    setRegister(true);
  }

  return(
    <Fragment>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField name="email" id="standard" label="E-mail" 
          onChange={(event) => {setEmail(event.target.value)} } />
        <TextField name="password" id="standard-password-input" label="Senha" 
          type="password" onChange={(event) => {setPassword(event.target.value)}}
          />
        <Button onClick={handleClickEntrar}>Log in</Button>
        <Button onClick={handleClickRegister}>Register</Button>
      </form>
      <LoginComponent isLoggedIn={isLogin}/>
      <RegisterComponent isRegister={isRegister} />
    </Fragment>
  )
}


export default LoginScreen;