import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

console.log(App);

function start() {
  console.log('Starting TODO App');

  var appDiv = document.getElementById('app');

  ReactDOM.render(<App />, appDiv);
}

start();
