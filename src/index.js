import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import Store from './store';

function start() {
  console.log('Starting TODO App');
  const store = Store();

  var appDiv = document.getElementById('app');

  window.app = ReactDOM.render(<App todos={store.todos} />, appDiv);
}

start();
