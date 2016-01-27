'use strict'

import React from 'react';
import {DarkRawTheme, ThemeManager} from 'material-ui/lib/styles';

export default class DarkMui extends React.Component {

  //the key passed through context must be called "muiTheme"
  static childContextTypes = {
    muiTheme: React.PropTypes.object
  };

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(DarkRawTheme)
    };
  }

  //the app bar and button will receive our theme through
  //context and style accordingly
  render () {
    return <span>{this.props.children}</span>;
  }
};
