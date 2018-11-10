import * as React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Practice from './pages/Practice';
import ChapterList from './pages/ChapterList';
import UnitTestList from './pages/UnitTestList';
import MockTestList from './pages/MockTestList';

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/practice' component={Practice}/>
        <Route path='/chapterList' component={ChapterList}/>
        <Route path='/unitTestList' component={UnitTestList}/>
        <Route path='/mockTestList' component={MockTestList}/>
      </Switch>
    </Router>
  );
};
export default Routers;
