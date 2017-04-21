import Todo from './todo';

class Store {
  constructor() {
    this.todos = ['buy milk', 'buy flour', 'make pizza'].map(Todo);
  }
}

export default Store;
