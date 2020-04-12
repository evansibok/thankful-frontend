import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './pages/landing-page/landing-page';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;