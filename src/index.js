import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { Provider } from './state/provider';
import { reducer, initialState } from './state/reducer';

render(
  <Provider reducer={reducer} initialState={initialState}>
    <App />
  </Provider>,
  document.getElementById('root')
);
