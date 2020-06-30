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
import {logout} from '../../../services/auth';

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

  const [out, isOut] = useState([]);
  const classes = useStyles();

  async function handleClick(e) {
    isOut(false)
    await SessionService.logout()
      .then(function (response) {
        logout()
        isOut(true)
        alert('User logged out of the system')
      })
      .catch(function (error) {
        isOut(false)
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
              Adopets
            </Typography>
            <Button onClick={handleClick}>Logout</Button>
          </Toolbar>
        </AppBar>
        <LogoutComponent isLogout={out}/>
      </div>
    </Fragment>
  );
}

export default MenuComponent;