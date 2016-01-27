import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import Routes from '../../routes';

if(module.hot) module.hot.decline('../../routes');

export default class Root extends React.Component {

  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    DevTools: PropTypes.element
  };

  render () {

    return (
      <Provider store={this.props.store}>
        <div>
          <Routes history={this.props.history}/>
          {this.props.DevTools}
        </div>
      </Provider>
    )
  }
}