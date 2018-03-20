import React, { Component, Fragment } from 'react'
import { graphql } from 'react-apollo'
import PropTypes from 'prop-types'
import { connect, compose } from 'react-redux'

// app import
import UserListQueries from '../graphql/UserListQueries'
import AppCommonModule from '../../commons/index'
import UserList from '../components/UserList'
import UserAdd from '../components/UserAdd'


// list page wrap with query
class UserListPage extends Component {
  // default props
  static defaultProps = {
    userListQueries: null,
  };

  // propsType (validation)
  static propTypes = {
    userListQueries: PropTypes.object,
  };

  // initial state
  state = {
    /* users: this.props.userListQueries.users,
    error: this.props.userListQueries.error,
    loading: this.props.userListQueries.loading, */
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
    // get params
    const { users, error, loading } = this.props.userListQueries

    // log values
    AppCommonModule.AppLogger.info('UserListPage state allUsersQuery : ', this.props.userListQueries)
    AppCommonModule.AppLogger.info('UserListPage state loading : ', loading)
    AppCommonModule.AppLogger.info('UserListPage state error : ', error)
    AppCommonModule.AppLogger.info('UserListPage state users : ', users)

    // loading status
    if (loading) {
      return <AppCommonModule.LoadingPage />
    }

    // error status
    if (error) {
      return <AppCommonModule.ErrorPage />
    }

    // emtpy status
    if (!users) {
      return <AppCommonModule.EmptyPage />
    }

    // render users
    return (
      <Fragment>
        <UserAdd />
        <UserList users={users} />
      </Fragment >
    )
  }
}

// redux config
const mapStateToProps = state => ({})
const mapDispatchToProps = (dispatch) => {
  return {}
}

// graphql wrapper
/* export default graphql(UserListQueries, {
  name: 'userListQueries',
  options: { pollInterval: process.env.REACT_APP_REFETCH_USERS_INTERVAL },
})(UserListPage) */

export default compose(
  graphql(UserListQueries, {
    name: 'userListQueries',
    options: { pollInterval: process.env.REACT_APP_REFETCH_USERS_INTERVAL },
  }),
  connect(mapStateToProps, mapDispatchToProps),
)(UserListPage)
