import {ACTION_TYPE} from './actions';
import Todo from '../todo';

const ActionHandler = (store) => {
  const handleAction = (action) => {
    if (!action || !action.type) {
      return;
    }

    console.log('handling action', action);

    switch (action.type) {
      case ACTION_TYPE.ADD_TODO: {
        store.todos.push(Todo(action.text));
        break;
      }
      case ACTION_TYPE.CLEAR_TODOS: {
        const incompletedTodos = store.incompletedTodos;
        store.todos.clear();
        store.todos.push(...incompletedTodos);
        break;
      }
      case ACTION_TYPE.TOGGLE_TODO_DONE: {
        const todoToToggle = store.todos.filter(it => it.id === action.id);
        todoToToggle.forEach(it => it.isDone = !it.isDone);
        break;
      }
      default: break;
    }
  }

  return {
    handleAction
  };
};

export default ActionHandler;
