import React from 'react';
import ReactDOM from 'react-dom';
import {toggleTodoDoneAction} from '../actions/actions';

class Todo extends React.Component {

  constructor(props) {
    super(props);
    this.displayName = 'Todo';
  }

  toggleCheck() {
    this.props.dispatcher.dispatch(toggleTodoDoneAction(this.props.todo.id));
  }

  render() {
    console.log('rendering', 'Todo', this.props.todo.id);
    return <li key={this.props.todo.id} onClick={this.toggleCheck.bind(this)} style={{cursor: 'pointer'}}>
        <input type="checkbox" checked={this.props.todo.isDone} />
        {this.props.todo.value}
      </li>;
  }
}

export default Todo;
