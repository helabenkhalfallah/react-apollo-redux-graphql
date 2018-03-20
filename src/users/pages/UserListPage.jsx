import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import PropTypes from 'prop-types'
import UserList from '../components/UserList'
import UserListQueries from '../graphql/UserListQueries'
import AppCommonModule from '../../commons/index'


// list page wrap with query
class UserListPage extends Component {
  // default props
  static defaultProps = {
    userListQueries: [],
  };

  // propsType (validation)
  static propTypes = {
    userListQueries: PropTypes.arrayOf(PropTypes.object),
  };

  // initial state
  state = {
    /* error: {
       message: '',
     }, */
  }

  // did mount staff
  componentDidMount() { }

  // refetch
  /* componentWillReceiveProps(nextProps) {
    if (this.props.location.key !== nextProps.location.key) {
      this.props.allPostsQuery.refetch()
    }
  } */


  // we pass only necessary props users={this.state.users}
  // to avoid unnecessary
  // render (reconcilation)
  render() {
    // log values
    AppCommonModule.AppLogger.info('UserListPage userListQueries allUsersQuery : ', this.props.userListQueries)
    AppCommonModule.AppLogger.info('UserListPage userListQueries loading : ', this.props.userListQueries.loading)
    AppCommonModule.AppLogger.info('UserListPage userListQueries error : ', this.props.userListQueries.error)
    AppCommonModule.AppLogger.info('UserListPage userListQueries users : ', this.props.userListQueries.users)

    // emtpy status
    if (!this.props.userListQueries || !this.props.userListQueries.users) {
      return <AppCommonModule.EmptyPage />
    }

    // error status
    if (this.props.userListQueries.error) {
      return <AppCommonModule.ErrorPage />
    }

    // loading status
    if (this.props.userListQueries.loading) {
      return <AppCommonModule.LoadingPage />
    }

    // render users
    return (
      <div>
        <UserList users={this.props.userListQueries.users} />
      </div >
    )
  }
}

// graphql wrapper
export default graphql(UserListQueries, {
  name: 'userListQueries',
})(UserListPage)
