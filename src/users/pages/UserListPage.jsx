import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import PropTypes from 'prop-types'
import UserList from '../components/UserList'
import UserListQueries from '../graphql/UserListQueries'
import AppCommonModule from '../../commons/index'


// loading status
const Loading = () => (
  <div>Loading</div>
)

// eror status
const Error = ({ error }) => (
  <div>Error : {error} </div>
)
// prop type validation
Error.propTypes = {
  error: PropTypes.objectOf(PropTypes.object).isRequired,
}

// eror status
const Empty = () => (
  <div>Empty</div>
)

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
    if (!this.props.userListQueries) {
      return <Empty />
    }

    // error status
    if (this.props.userListQueries.error) {
      return <Error />
    }

    // loading status
    if (this.props.userListQueries.loading) {
      return <Loading />
    }

    // empty status
    if (!this.props.userListQueries.users) {
      return <Empty />
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
