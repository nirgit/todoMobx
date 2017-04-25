import React from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';

import ProgressBar from './progressBar';

import {addTodoAction, toggleTodoDoneAction, clearTodosAction} from '../actions/actions';

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
      this.props.dispatcher.dispatch(addTodoAction(todoToAdd));
      this.refs.todoInput.value = '';
    }
  }

  toggleCheck(todo) {
    this.props.dispatcher.dispatch(toggleTodoDoneAction(todo.id));
  }

  clearAllDones() {
    this.props.dispatcher.dispatch(clearTodosAction());
  }

  render() {
    return <div>
        <h1>My (Mobx) Todo App</h1>

        <ProgressBar value={this.props.store.totalCompleted} total={this.props.store.todos.length} />

        <div>
          <span>Add</span><input ref='todoInput' type='text' onKeyUp={(e) => this.addTodoByKey(e)}></input><button onClick={(e) => this.addTodoByClick(e)}>Add</button>
        </div>

        <ul>{this.props.store.todos.map(todo =>
            (<li key={todo.id}>
                <input type="checkbox" onClick={this.toggleCheck.bind(this, todo)} checked={todo.isDone}/>{todo.value}
              </li>)
            )}
        </ul>

        <div>
          <a href="#" onClick={this.clearAllDones.bind(this)}>Clear all "Done"s</a>
        </div>
      </div>;
  }
}

export default App;
