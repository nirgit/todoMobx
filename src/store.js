import { observable, computed } from 'mobx';
import Todo from './todo';

const randomizeIsDone = item => {
  item.isDone = Math.random() > 0.5;
  return item;
};

const Store = () => ({
  @observable todos: ['buy milk', 'buy flour', 'buy cheese',
                      'make pizza', 'eat', 'do dishes'].map(Todo).map(randomizeIsDone),

  get incompletedTodos() {
    return this.todos.filter(t => !t.isDone);
  },

  @computed get totalCompleted() {
    return this.todos.length - this.incompletedTodos.length;
  }
})

export default Store;
