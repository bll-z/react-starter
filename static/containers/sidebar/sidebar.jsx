'use strict'

import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux'

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

import path from 'path';

import ActionDashboard from 'material-ui/lib/svg-icons/action/dashboard';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';

import Themeable from '../../style/themes/utils/themeable';

if(module.hot) module.hot.decline();


export default class Sidebar extends Component {

  constructor(props) {
    super(props)
    this.palette = {
      canvasColor: '#f00000'
    }
  }

  render () {
    return (
      <Themeable palette={this.palette} >
        <List>
          <ListItem onClick={() => this.props.push("/")} primaryText="Dashboard" leftIcon={<ActionDashboard/>} />
          <ListItem onClick={() => this.props.push("/user-list")} primaryText="User List" leftIcon={<ContentInbox/>} />
        </List>
      </Themeable>
    );

  }

}


export default connect(
  null,
  { push: routeActions.push }
)(Sidebar);
