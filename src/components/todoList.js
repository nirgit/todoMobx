import React from 'react';
import ReactDOM from 'react-dom';
import Container from './container';
import Counter from './counter';

import {toggleTodoDoneAction} from '../actions/actions';

class TodoList extends React.Component {

  toggleCheck(todo) {
    this.props.dispatcher.dispatch(toggleTodoDoneAction(todo.id));
  }

  render() {
    console.log('rendering TodoList');
    return <div>
      <ul style={{listStyle: 'none'}}>{this.props.todos.map(todo =>
          (<li key={todo.id} onClick={this.toggleCheck.bind(this, todo)} style={{cursor: 'pointer'}}>
              <input type="checkbox" checked={todo.isDone}/>{todo.value}
            </li>)
          )}
      </ul>
      <Container component={Counter} propNames={['count']} />
    </div>;
  }
}

export default TodoList;
