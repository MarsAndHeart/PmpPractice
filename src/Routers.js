import * as React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Practice from './pages/Practice';
import ChapterList from './pages/ChapterList';

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/practice' component={Practice}/>
        <Route path='/chapterList' component={ChapterList}/>
      </Switch>
    </Router>
  );
};
export default Routers;
