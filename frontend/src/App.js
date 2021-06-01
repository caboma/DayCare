import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.scss';

const App = () => {
  return (
    <main className="layout">
      <Router>
        
        <Switch>
          <Route path="/" exact>
            <div>
              <h1>This is root</h1>
            </div>
          </Route>
          <Router path="/dashboard">
            <div>
              <h1>This is dashboard</h1>
            </div>
          </Router>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
