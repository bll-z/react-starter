import React from 'react';
import DarkMui from './dark-mui';
import Themeable from './utils/themeable';

import zIndex from 'material-ui/lib/styles/zIndex';
import TinyColor from 'tinycolor2';

const CANVASCOLOR = '#303030';
export const APP_FONT_FAMILY = 'Roboto, sans-serif';
export const APP_BASE_GUTTER = 6;
export const APP_CANVAS_COLOR = CANVASCOLOR;
export const APP_TEXT_COLOR = TinyColor(CANVASCOLOR).lighten(75).toHexString();

export const AppThemeRaw = {
  spacing: {
    desktopGutterMini: APP_BASE_GUTTER,
    desktopGutterLess: APP_BASE_GUTTER * 2,
    desktopGutter: APP_BASE_GUTTER * 3,
    desktopGutterMore: APP_BASE_GUTTER * 4
  },
  zIndex: zIndex,
  fontFamily: APP_FONT_FAMILY,
  palette: {
    //primary1Color: Colors.cyan500,
    //primary2Color: Colors.cyan700,
    //primary3Color: Colors.lightBlack,
    //accent1Color: Colors.pinkA200,
    //accent2Color: Colors.grey100,
    //accent3Color: Colors.grey500,
    textColor: APP_TEXT_COLOR,
    //alternateTextColor: Colors.white,
    //borderColor: Colors.grey300,
    //disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
    //pickerHeaderColor: Colors.cyan500,
    canvasColor: APP_CANVAS_COLOR
  }
};

/**
 * Main theme wrapper component to include all of the apps base material ui settings
 */
export class AppTheme extends React.Component {

  render() {
    return (
      <DarkMui>
        <Themeable children={this.props.children}  
                   spacing={AppThemeRaw.spacing}
                   fontFamily={AppThemeRaw.fontFamily}
                   palette={AppThemeRaw.palette} />
      </DarkMui>
    )
  }
}