import * as React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Practice from './pages/Practice';

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/practice' component={Practice}/>
      </Switch>
    </Router>
  );
};
export default Routers;
