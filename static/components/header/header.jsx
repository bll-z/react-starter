import AppBar from 'material-ui/lib/app-bar';

import React, { Component, PropTypes} from 'react';

export default class Header extends Component {

  /**
   * Gives this component access to the context, specifically muiTheme
   * @type {{muiTheme: *}}
   */
  static contextTypes = {
    muiTheme: PropTypes.object
  };

  render() {
    return (
      <AppBar showMenuIconButton={false}>
        <header><h1>Welcome!</h1></header>
      </AppBar>
    );
  }

};
