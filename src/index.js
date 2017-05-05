import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';

import App from './components/app';
import ActionDispatcher from './actions/actionDispatcher';
import Store from './store';

function start() {
  console.log('Starting TODO App');
  const store = Store();
  const actionDispatcher = ActionDispatcher(store);

  var appDiv = document.getElementById('app');

  window.app = ReactDOM.render(
    <Provider store={store} dispatcher={actionDispatcher}>
      <App />
    </Provider>,
    appDiv
    );
}

start();
