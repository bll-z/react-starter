import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
// import { userActions } from '../../actions';

if(module.hot) module.hot.decline();

class UserList extends React.Component {

    get userList () {
      let list = _.map(this.props.users, (user, i) => {
        /* key allows react to effieciently check for changes */
        return <ListItem key={i} primaryText={user.username}/>;
      });
      return list;
    }
    
    render() {
      return (
        <List>
          {this.userList}
        </List>
      )
    }

};

export default connect(
  (state) => { return {/* map state values to props */}; },
  {/* actions go here in dict*/}
)(UserList);