import React from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';

import Todo from './todo';

@observer
class App extends React.Component {

  addTodo(e) {
    if (e.keyCode === 13) { // Enter pressed
      const todoToAdd = e.target.value;
      if (todoToAdd && todoToAdd.length > 2) {
        this.props.todos.push(Todo(todoToAdd));
        e.target.value = '';
      }
    }
  }

  render() {
    return <div>
        <h1>My (Mobx) Todo App to be</h1>
        <div>
          <span>Add</span><input type='text' onKeyUp={(e) => this.addTodo(e)}></input>
        </div>
        <ul>{this.props.todos.map(todo => (<li key={todo.id}>{todo.value}</li>))}</ul>
      </div>;
  }
}

export default App;
