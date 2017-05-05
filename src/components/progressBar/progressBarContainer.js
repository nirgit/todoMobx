import React from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';

import ProgressBarComponent from './progressBarComponent';

@observer(['store'])
class ProgressBarContainer extends React.Component {
  render() {
    return <ProgressBarComponent value={this.props.store.totalCompleted} total={this.props.store.todos.length} />
  }
}

export default ProgressBarContainer;
