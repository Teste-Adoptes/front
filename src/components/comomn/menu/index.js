import React, {Fragment, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SessionService from '../../../services/session';
import LogoutComponent from '../logout';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const MenuComponent = () => {

  const [logout, isLogout] = useState([]);
  const classes = useStyles();

  async function handleClick(e) {
    isLogout(false);
    const auth = {token: localStorage.getItem('@vireachavefinanceira/token')}
    await SessionService.logout(auth)
      .then(function (response) {
        localStorage.removeItem('@vireachavefinanceira/token');
        isLogout(true);
        alert('Usuário deslogado do sistema!');
      })
      .catch(function (error) {
        //console.log(error);
        localStorage.removeItem('@vireachavefinanceira/token');
        isLogout(false);
      });
  }

  return(
    <Fragment>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              VireaChaveFinanceira
            </Typography>
            <Button onClick={handleClick}>Logout</Button>
          </Toolbar>
        </AppBar>
        <LogoutComponent isLogout={logout}/>
      </div>
    </Fragment>
  );
}

export default MenuComponent;