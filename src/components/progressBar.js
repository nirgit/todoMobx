import React from 'react';


class ProgressBar extends React.Component {

  render() {

    const progressStyle = {
      maxWidth: '200px',
      background: '#8bc34a',
      position: 'absolute',
      height: '100%',
      width: (200 * (this.props.value / (this.props.total || 1))) + 'px',
      transition: '0.25s ease width'
    };

    return <div style={{'border': '1px solid black', 'width': '200px', 'textAlign': 'center', 'position': 'relative', 'marginBottom': '10px'}}>
        <div style={progressStyle}></div>
        <div style={{'position': 'relative', 'fontSize': 'large', 'fontWeight': '900'}}>Progress</div>
    </div>
  }
}

export default ProgressBar;
