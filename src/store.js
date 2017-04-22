import { observable } from 'mobx';
import Todo from './todo';

const Store = () => ({
  @observable todos: ['buy milk', 'buy flour', 'make pizza'].map(Todo),

  get incompletedTodos() {
    return this.todos.filter(t => !t.isDone);
  }
})

export default Store;
