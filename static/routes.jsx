import React, {Component, PropTypes} from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import CoreLayout from './layouts/CoreLayout';
import {Dashboard, UserListView} from './views';

/**
 * @param history {react-router.history} 
 * @return {React.Component} fully populated react router
 */
export default class Routes extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired
  };

  render () {
    return (
       /**
       * sub-Routes are child components available in parent component via this.props.children
       * IndexRoute is the default children for the parent component, it should not have a path
       */
        <Router history={this.props.history}>
          <Route path="/" component={CoreLayout}>
            <IndexRoute component={Dashboard}/>
            <Route path="user-list" component={UserListView}/>
          </Route>
        </Router>
    );
  }

};

