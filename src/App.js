import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage';
import Checkout from './pages/checkout/checkout';

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default App;
