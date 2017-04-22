const idGen = (() => {
  let id = 0;
  return () => {
    id++;
    return id;
  }
})();


const Todo = (val) => ({
    value: val,
    id: idGen(),
    isDone: false
  });

export default Todo;
