import React from 'react'
import App from './components/app/app'
import FourSquare from './pages/foursquare'
import About from './pages/about'
import { IndexRoute, Route } from 'react-router'

export default () => {
  return (
    <Route>
      <Route
        path="/"
        component={App}>
        <IndexRoute component={FourSquare} />
        <Route path="about">
          <IndexRoute component={About} />
        </Route>
      </Route>
      <Route
        path="*"
        component={FourSquare}
      />
    </Route>
  );
};
