import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { userActions } from '../../actions';
import { UserList } from '../../containers';

import RaisedButton from 'material-ui/lib/raised-button';
import RefreshIndicator from 'material-ui/lib/refresh-indicator';
import Popover from 'material-ui/lib/popover/popover';

if(module.hot) module.hot.decline('../../containers');

class UserListView extends React.Component {

  constructor(props){
    super(props);
    this.style = {
      container: {
        position: 'relative'
      },
      refresh: {
        display: 'inline-block',
        position: 'relative'
      }
    };
  }

  get isRefreshing(){
    return this.props.users.getUsersPending ? 'loading' : 'hide';
  }

  render() {
    return (
      <div>
        <p>Group Edit</p>
        <UserList users={this.props.users.users} />
        <br/>
        <div style={this.style.container}>
          <RefreshIndicator style={this.style.refresh}
                            top={0}
                            left={0}
                            status={this.isRefreshing}/>
          <RaisedButton label="Fetch Users" onClick={this.props.getUsers}/>
        </div>
        <Popover animated={true}
                 useLayerForClickAway={true}
                 onRequestClose={this.props.acknowledgeGetUsersError}
                 open={this.props.users.getUsersRejected}
        >
          <p>{this.props.users.getUsersRejected ? this.props.users.getUsersError.message : ''}</p>
        </Popover>
      </div>
    );
  }

}

export default connect(
  (state) => {
    return {
      users: state.users
    };
  }, {
      'getUsers': userActions.getUsers,
      'acknowledgeGetUsersError': userActions.acknowledgeGetUsersError
  }
)(UserListView);