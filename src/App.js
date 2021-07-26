import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AboutPage from './pages/AboutPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
