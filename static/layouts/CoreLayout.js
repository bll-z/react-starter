'use strict'

import React from 'react'

// style and layout
import 'react-flexgrid/lib/flexgrid.css';
import 'font-awesome/css/font-awesome.css';
import '../style/main.scss';

// react components
import {Grid, Row, Col} from 'react-flexgrid';
import {Sidebar} from '../containers';
import {Header} from '../components';

// material-ui stuff
import {AppTheme} from '../style/themes/app-theme';
import Paper from 'material-ui/lib/paper';

class CoreLayout extends React.Component {

  render() {
    return (
      <AppTheme>
        <Header />
        <Grid>
          <Row>
            <Col xs={3}>
              <Sidebar />
            </Col>
            <Col xs={9}>
              {/* We wrap children in a Material-UI Component to theme all descendants appropriately */}
              <Paper children={this.props.children}/>
            </Col>
          </Row>
        </Grid>
      </AppTheme>
    );
  }

};

export default CoreLayout;