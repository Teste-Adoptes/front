import React, {Fragment, useState} from 'react';
import SessionService from '../services/session'; 
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LoginComponent from '../components/comomn/login/index';
import CadastroComponent from '../components/comomn/cadastro/index';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const LoginScreen = () => {

  const [cpf, setCpf] = useState({});
  const [password, setPassword] = useState({});
  const [isLogin, setLogin] = useState({});
  const [cadastro, isCadastro] = useState({});

  const classes = useStyles();
  
  async function handleClickEntrar(e) {
    const data = {cpf: cpf, password: password}
    await SessionService.login(data)
      .then(function (response) {
        localStorage.removeItem('@vireachavefinanceira/token');
        localStorage.setItem('@vireachavefinanceira/token', response.data.token);
        setLogin(true);
      })
      .catch(function (error) {
        //console.log(error);
        localStorage.removeItem('@vireachavefinanceira/token');
        alert('Cpf ou senha inválidos!');
        setLogin(false);
      });
  }

  function handleClickCadastrar(e){
    isCadastro(true);
  }

  return(
    <Fragment>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField name="cpf" id="standard" label="Cpf" 
          onChange={(event) => {setCpf(event.target.value)} } />
        <TextField name="password" id="standard-password-input" label="Senha" 
          type="password" onChange={(event) => {setPassword(event.target.value)}}
          />
        <Button onClick={handleClickEntrar}>Entrar</Button>
        <Button onClick={handleClickCadastrar}>Cadastrar</Button>
      </form>
      <LoginComponent isLoggedIn={isLogin}/>
      <CadastroComponent isCadastro={cadastro} />
    </Fragment>
  )
}


export default LoginScreen;