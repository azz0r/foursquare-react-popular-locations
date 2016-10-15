import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app/app'
const rootEl = document.getElementById('root');

ReactDOM.render(
  <App />,
  rootEl
)

if (module.hot) {
  module.hot.accept('./components/app/app', () => {
    const NextApp = require('./components/app/app').default;
    ReactDOM.render(
      <NextApp />,
      rootEl
    );
  });
}
