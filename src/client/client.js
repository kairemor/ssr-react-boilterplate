import React, { Suspense } from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore';
import App from './components/app';
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

hydrate(
  <Provider store={store}>
    <Suspense fallback={<div>Loading</div>}>
      <App />
    </Suspense>
  </Provider>,
  document.querySelector('#app')
);
