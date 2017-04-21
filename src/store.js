import { observable } from 'mobx';
import Todo from './todo';

const Store = () => ({
  @observable todos: ['buy milk', 'buy flour', 'make pizza'].map(Todo)
})

export default Store;
