import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Homepage } from '../src/pages/Homepage.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;
