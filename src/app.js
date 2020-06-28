import React, { Fragment } from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

const App = () => {

  require('dotenv').config()

  return(
    <Fragment>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </Fragment>
  )
}

export default App;
