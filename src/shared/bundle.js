import React, { Suspense } from 'react';
import { render } from 'react-dom';
// import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/app/configureStore';
import App from './app';
// import createHistory from './store/history';
import '../i18n';

// const history = createHistory();

// Create a fresh store
const store = configureStore();

render(
  <Provider store={store}>
    <Suspense fallback={<div>Loading</div>}>
      <App />
    </Suspense>
  </Provider>,
  document.querySelector('#app')
);
