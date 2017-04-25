import ActionHandler from './actionHandler';

const ActionDispatcher = (store) => {

  const actionHandler = ActionHandler(store);

  return {
    dispatch(action) {
      actionHandler.handleAction(action);
    }
  };
}

export default ActionDispatcher;
