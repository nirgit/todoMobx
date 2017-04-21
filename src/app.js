import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return <div>
        <h1>My (Mobx) Todo App to be</h1>
        <ul>{this.props.todos.map(todo => (<li>{todo}</li>))}</ul>
      </div>;
  }
}

export default App;
