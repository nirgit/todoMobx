import { observable, computed } from 'mobx';
import Todo from './todo';

const Store = () => ({
  @observable todos: ['buy milk', 'buy flour', 'buy cheese', 'make pizza', 'eat', 'do dishes'].map(Todo),

  get incompletedTodos() {
    return this.todos.filter(t => !t.isDone);
  },

  @computed get totalCompleted() {
    return this.todos.length - this.incompletedTodos.length;
  }
})

export default Store;
