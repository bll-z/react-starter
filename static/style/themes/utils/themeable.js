import React, {Component, PropTypes} from 'react';
import {ThemeManager} from 'material-ui/lib/styles';


/**
 * @description Modifies the theme for all child elements, see material-ui documentation
 * @param {object} spacing - spacing options are below
 * * * @options {int} - {desktopGutterMini,desktopGutterLess,desktopGutter,desktopGutterMore}
 * @param {object} palette - palette options are below
 * desktopGutterMini,desktopGutterLess,desktopGutter,desktopGutterMore} 
 * * * @options {string} - {primary1Color, primary2Color, primary3Color, accent1Color, 
 * * *                      accent2Color, accent3Color, textColor, alternateTextColor, 
 * * *                      canvasColor, borderColor, disabledColor, pickerHeaderColor}
 * @param {string} fontFamily
 */
export default class Themeable extends Component {

  /**
   * Defines this Component's context, specifically a hook to modify the default App theme
   * @type {{muiTheme: *}}
   */
  static contextTypes = {
    muiTheme: PropTypes.object
  };

  /* Defines the proptypes its children can have */
  static childContextTypes = {
    muiTheme: PropTypes.object
  };

  componentWillMount () {

    let newTheme = this.context.muiTheme;

    if (this.props.spacing)
      newTheme = ThemeManager.modifyRawThemeSpacing(this.context.muiTheme, this.props.spacing);

    if (this.props.palette)
      newTheme = ThemeManager.modifyRawThemePalette(newTheme, this.props.palette);

    if (this.props.fontFamily)
      newTheme = ThemeManager.modifyRawThemeFontFamily(newTheme, this.props.fontFamily);

    this.setState({
      muiTheme: newTheme
    });

  }

  /**
   * Any child React Component will get the theme
   * @returns {{muiTheme: *}}
   */
  getChildContext () {
    return {
      muiTheme: this.state.muiTheme
    };
  }

  render () {
    return <span>{this.props.children}</span>;
  }

}