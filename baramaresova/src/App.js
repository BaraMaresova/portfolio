import React from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { Homepage } from '../src/pages/Homepage.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Homepage />
      </Switch>
    </Router>
  );
}

export default App;
