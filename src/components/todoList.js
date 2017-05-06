import React from 'react';
import ReactDOM from 'react-dom';
import Container from './container';
import Todo from './todo';

import {toggleTodoDoneAction} from '../actions/actions';

class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.displayName = 'TodoList';
  }

  render() {
    console.log('rendering', 'TodoList');
    return <div>
      <ul style={{listStyle: 'none'}}>
        {this.props.todos.map(todo => <Container key={todo.id} component={Todo} todo={todo} />)}
      </ul>
    </div>;
  }
}

export default TodoList;
