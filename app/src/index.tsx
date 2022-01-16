import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { StoreProvider } from 'components/provider/StoreProvider';

import App from './App';

ReactDOM.render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>,
  document.getElementById('app')
);
