import React from 'react';
import ReactDOM from 'react-dom';

import {incrementCounterAction} from '../actions/actions';

class Counter extends React.Component {
  inc() {
    this.props.dispatcher.dispatch(incrementCounterAction());
  }

  render() {
    console.log('rendering Counter');
    return <div onClick={this.inc.bind(this)}>Counter {this.props.count}</div>;
  }
}

export default Counter;
