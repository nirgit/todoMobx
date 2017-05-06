import React from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import _ from 'lodash';

const RESERVED_CONTAINER_PROPS = ['store', 'dispatcher', 'propNames', 'component'];

@observer(['store', 'dispatcher'])
class Container extends React.Component {
  render() {
    let childProps = _.pick(this.props.store, this.props.propNames);
    childProps = _.assign(childProps, _.omit(this.props, RESERVED_CONTAINER_PROPS));
    childProps = _.assign(childProps, {dispatcher: this.props.dispatcher});
    return React.createElement(observer(this.props.component), childProps);
  }
}


export default Container;
