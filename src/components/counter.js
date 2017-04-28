import React from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';

import {incrementCounterAction} from '../actions/actions';

@observer
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
