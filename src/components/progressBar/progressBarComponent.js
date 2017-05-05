import React from 'react';
import _ from 'lodash';

class ProgressBarComponent extends React.Component {

  barStyle = {'border': '1px solid black', 'borderRadius': '2px', 'width': '200px', 'textAlign': 'center', 'position': 'relative', 'marginBottom': '10px'};
  labelStyle = {'position': 'relative', 'fontSize': 'large', 'fontWeight': '900'};
  progressStyle = {maxWidth: '200px', background: '#8bc34a', position: 'absolute', height: '100%', width: '0px', transition: '0.25s ease width'};

  render() {
    console.log('rendering ProgressBarComponent');
    const percentage = (this.props.value / (this.props.total || 1));
    const funnyLabel = percentage === 0 ? 'You better start' : percentage === 1 ? 'Done Woohoo!' : 'Progress';
    const progressStyle = {width: (200 * percentage) + 'px'};

    return <div style={this.barStyle}>
        <div style={_.assign({}, this.progressStyle, progressStyle)}></div>
        <div style={this.labelStyle}>{funnyLabel}</div>
    </div>
  }
}

export default ProgressBarComponent;
