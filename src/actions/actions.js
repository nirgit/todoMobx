import Todo from '../todo';

export const ACTION_TYPE = {
  ADD_TODO: 'ADD_TODO',
  CLEAR_TODOS: 'CLEAR_TODOS',
  TOGGLE_TODO_DONE: 'TOGGLE_TODO_DONE',
  INCREMENT_COUNTER: 'INCREMENT_COUNTER'
};

export function addTodoAction(text) {
  return {
    type: ACTION_TYPE.ADD_TODO,
    text
  };
}

export function clearTodosAction() {
  return {
    type: ACTION_TYPE.CLEAR_TODOS
  };
}

export function toggleTodoDoneAction(todoId) {
  return {
    type: ACTION_TYPE.TOGGLE_TODO_DONE,
    id: todoId
  };
}

export function incrementCounterAction() {
  return {
    type: ACTION_TYPE.INCREMENT_COUNTER
  };
}
