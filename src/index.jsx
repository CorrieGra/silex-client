import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from 'easy-peasy';
import App from './components/App/App';
import { store } from './store/index';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={ store }>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
