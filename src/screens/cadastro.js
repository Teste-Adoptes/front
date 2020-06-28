import React, {Fragment, useState} from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import UserService from '../services/user';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      '& > *': {
        width: '25ch',
      },
    },
  }),
);

const CadastroScreen = () => {
  
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [dt_nasci, setDtNasci] = useState('');
  const [tel, setTel] = useState('');
  const [redirect, setRedirect] = useState(false);
 
  const classes = useStyles();

  async function handleClick(e){
    const data = {
      email: email,
      nome: nome,
      cpf: cpf,
      password: senha,
      nascimento: dt_nasci,
      telefone: tel,
      local: ''
    }
    await UserService.post(data)
      .then((response) => {
        console.log(response)
        const id = response.body.id
        localStorage.removeItem('@vireachavefinanceira/user_id');
        localStorage.setItem('@vireachavefinanceira/user_id', id);
        setRedirect(true);
        alert('Usuário cadastrado com sucesso!');
      })
      .catch((error) => {
        console.log(error)
        setRedirect(false);
        alert('Usuário não cadastrado, verifique os campos obrigátorios!');
      });
  }

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to='/user' />
    }
  }

  return(
    <Fragment>
      {renderRedirect()}
      <p>Cadastro de novos usuários:</p>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="email" name='email' required={true} label="Email" 
          variant="outlined" onChange={(event) => setEmail(event.target.value)}/> <br/><br/>
        <TextField id="nome" name='nome' required={true} label="Nome completo" 
          variant="outlined" onChange={(event) => setNome(event.target.value)}/> <br/><br/>
        <TextField id="cpf" name='cpf' required={true} label="CPF" 
          variant="outlined" onChange={(event) => setCpf(event.target.value)}/> <br/><br/>
        <TextField id="senha" name='senha' type='password' required={true} 
          label="Senha" variant="outlined" 
          onChange={(event) => setSenha(event.target.value)}/> <br/><br/>
        <TextField id="dt_nasci" name='dt_nasci' required={true} label="Data de nascimento"
          type="date" InputLabelProps={{shrink: true,}} 
          onChange={(event) => setDtNasci(event.target.value)}/> <br/><br/>
        <TextField id="tel" name='tel' label="Telefone" variant="outlined"
          onChange={(event) => setTel(event.target.value)}/> <br/><br/>
        <Button onClick={handleClick}>Cadastrar</Button>
      </form>
    </Fragment>
  );

}

export default CadastroScreen;
