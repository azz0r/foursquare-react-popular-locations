export const HmrContainer = (process.env.NODE_ENV === 'development')
  ? require('react-hot-loader').AppContainer
  : ({ children }) => (children);
