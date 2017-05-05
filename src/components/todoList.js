import React from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';

import Counter from './counter';

import {toggleTodoDoneAction} from '../actions/actions';

@observer(['store', 'dispatcher'])
class TodoList extends React.Component {

  toggleCheck(todo) {
    this.props.dispatcher.dispatch(toggleTodoDoneAction(todo.id));
  }

  render() {
    console.log('rendering TodoList');
    return <div>
      <ul style={{listStyle: 'none'}}>{this.props.store.todos.map(todo =>
          (<li key={todo.id} onClick={this.toggleCheck.bind(this, todo)} style={{cursor: 'pointer'}}>
              <input type="checkbox" checked={todo.isDone}/>{todo.value}
            </li>)
          )}
      </ul>
      <Counter />
    </div>;
  }
}

export default TodoList;
