import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app/app'

const rootEl = document.getElementById('root');
const HmrContainer = (process.env.NODE_ENV === 'development')
  ? require('react-hot-loader').AppContainer
  : ({ children }) => (children);

export const Container = (
  <HmrContainer>
    <App />
  </HmrContainer>
);

try {
  ReactDOM.render(Container, rootEl);
  if (module.hot) {
    module.hot.accept('./components/app/app', () => {
      const NextApp = require('./components/app/app').default;
      ReactDOM.render(
        <HmrContainer>
          <NextApp />
        </HmrContainer>,
        rootEl
      );
    });
  }
} catch (err) {
  console.log('Render error', err);
}
