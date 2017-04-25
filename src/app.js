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
      this.props.store.todos.push(Todo(todoToAdd));
      this.refs.todoInput.value = '';
    }
  }

  toggleCheck(todo) {
    todo.isDone = !todo.isDone;
  }

  clearAllDones() {
    const incompletedTodos = this.props.store.incompletedTodos;
    this.props.store.todos.clear();
    this.props.store.todos.push(...incompletedTodos);
  }

  render() {
    const progressStyle = {
      maxWidth: '200px',
      background: '#8bc34a',
      position: 'absolute',
      height: '100%',
      width: (200 * (this.props.store.totalCompleted / (this.props.store.todos.length || 1))) + 'px',
      transition: '0.25s ease width'
    };

    return <div>
        <h1>My (Mobx) Todo App</h1>

        <div style={{'border': '1px solid black', 'width': '200px', 'textAlign': 'center', 'position': 'relative', 'marginBottom': '10px'}}>
          <div style={progressStyle}></div>
          <div style={{'position': 'relative', 'fontSize': 'large', 'fontWeight': '900'}}>Progress</div>
        </div>

        <div>
          <span>Add</span><input ref='todoInput' type='text' onKeyUp={(e) => this.addTodoByKey(e)}></input><button onClick={(e) => this.addTodoByClick(e)}>Add</button>
        </div>

        <ul>{this.props.store.todos.map(todo => (<li key={todo.id}><input type="checkbox" onClick={this.toggleCheck.bind(this, todo)} checked={todo.isDone}/>{todo.value}</li>))}</ul>

        <div>
          <a href="#" onClick={this.clearAllDones.bind(this)}>Clear all "Done"s</a>
        </div>
      </div>;
  }
}

export default App;
