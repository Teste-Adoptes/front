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
)

const RegisterScreen = () => {
  
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)
  const classes = useStyles();

  async function handleClick(e){
    const data = {
      email: email,
      name: name,
      password: password
    }
    await UserService.post(data)
      .then((response) => {
        setRedirect(true)
        alert('Successfully registered user')
      })
      .catch((error) => {
        setRedirect(false)
        alert('Unregistered user, check the required fields')
      });
  }

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to='/login' />
    }
  }

  return(
    <Fragment>
      {renderRedirect()}
      <p>Registration of new users:</p>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="name" name='name' required={true} label="Full name" 
          variant="outlined" onChange={(event) => setName(event.target.value)}/> <br/><br/>
        <TextField id="email" name='email' required={true} label="Email" 
          variant="outlined" onChange={(event) => setEmail(event.target.value)}/> <br/><br/>
        <TextField id="password" name='password' type='password' required={true} 
          label="Password" variant="outlined" 
          onChange={(event) => setPassword(event.target.value)}/> <br/><br/>
        <Button onClick={handleClick}>Save</Button>
      </form>
    </Fragment>
  )

}

export default RegisterScreen;
