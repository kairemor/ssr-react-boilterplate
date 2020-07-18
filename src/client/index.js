import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { Router } from 'react-router-dom';
import configureStore from '../shared/store/app/configureStore';
import App from '../shared/app';
import '../i18n';

// Read the state sent with markup
const state = window.__STATE__;

// delete the state from global window object
delete window.__STATE__;

// reproduce the store used to render the page on server
const store = configureStore(state);

/**
 * hydrate the page to make sure both server and client
 * side pages are identical. This includes markup checking,
 * react comments to identify elements and more.
 */

const renderMethod = module.hot ? ReactDOM.hydrate : ReactDOM.render;

const app = (
  <Provider store={store}>
    <Suspense fallback={<div>Loading</div>}>
      <App />
    </Suspense>
  </Provider>
);

renderMethod(app, document.querySelector('#app'));
