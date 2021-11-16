import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Router from '../Service/Router';

import Footer from './static/Footer';
import Header from './static/Header';

import './static/scss/common.scss';

const App = (): JSX.Element => {
  return ( <BrowserRouter>
    <Header />
    <div id="pageContent">
      <Router />
    </div>
    <Footer />
  </BrowserRouter> );
};

export default App;
