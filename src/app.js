import React from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';

import Todo from './todo';

@observer
class App extends React.Component {

  addTodoByKey(e) {
    if (e.keyCode === 13) { // Enter pressed
      const todoToAdd = e.target.value;
      this.addTodo(todoToAdd);
    }
  }

  addTodoByClick(e) {
    const todoToAdd = this.refs.todoInput.value;
    this.addTodo(todoToAdd);
  }

  addTodo(todoToAdd) {
    if (todoToAdd && todoToAdd.length > 2) {
      this.props.todos.push(Todo(todoToAdd));
      this.refs.todoInput.value = '';
    }
  }

  render() {
    return <div>
        <h1>My (Mobx) Todo App to be</h1>
        <div>
          <span>Add</span><input ref='todoInput' type='text' onKeyUp={(e) => this.addTodoByKey(e)}></input><button onClick={(e) => this.addTodoByClick(e)}>Add</button>
        </div>
        <ul>{this.props.todos.map(todo => (<li key={todo.id}>{todo.value}</li>))}</ul>
      </div>;
  }
}

export default App;
