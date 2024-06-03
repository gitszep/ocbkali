// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './Contact';
import ThankYou from './ThankYou'; // Create a ThankYou component for displaying the thank you message

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Contact} />
        <Route path="/thank-you" exact component={ThankYou} />
      </Switch>
    </Router>
  );
};

export default App;
