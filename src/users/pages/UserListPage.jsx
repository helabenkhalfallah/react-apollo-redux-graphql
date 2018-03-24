import React, { Component, Fragment } from 'react'
import { graphql } from 'react-apollo'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, bindActionCreators } from 'redux'

// app module import
import AppCommonModule from '../../commons/index'

// gql queries import
import UserListQueries from '../graphql/UserListQueries'

// component import
import UserList from '../components/UserList'
import UserAdd from '../components/UserAdd'

// redux import
import { addUserAction } from '../redux/actions/UserActions'

// list page wrap with query
class UserListPage extends Component {
  // default props
  static defaultProps = {
    userListQueries: null,
    userToAdd: null,
    dispatch: null,
  }

  // propsType (validation)
  static propTypes = {
    userListQueries: PropTypes.object,
    userToAdd: PropTypes.object,
    dispatch: PropTypes.func,
  }

  // initial state
  state = {

  }

  // did mount staff
  componentDidMount() { }

  // force refetch
  // mapStateToProps
  componentWillReceiveProps(nextProps) {
    AppCommonModule.AppLogger.info('UserListPage componentWillReceiveProps nextProps: ', nextProps)
    if (this.props.userToAdd !== nextProps.userToAdd) {
      this.props.userListQueries.refetch()
    }
  }

  // on user add action
  onUserAddClicked = (event, params) => {
    AppCommonModule.AppLogger.info('UserListPage onUserAddClicked params: ', params)
    AppCommonModule.AppLogger.info('UserListPage onUserAddClicked event: ', event)
    if (event && event.preventDefault) {
      event.preventDefault()
      this.props.dispatch(addUserAction(params))
    }
  }

  // we pass only necessary props users={this.state.users}
  // to avoid unnecessary
  // render (reconcilation)
  render() {
    // get params
    const { users, error, loading } = this.props.userListQueries
    const { networkStatus } = this.props.userListQueries

    // log values
    AppCommonModule.AppLogger.info('UserListPage allUsersQuery : ', this.props.userListQueries)
    AppCommonModule.AppLogger.info('UserListPage loading : ', loading)
    AppCommonModule.AppLogger.info('UserListPage error : ', error)
    AppCommonModule.AppLogger.info('UserListPage users : ', users)
    AppCommonModule.AppLogger.info('UserListPage networkStatus : ', networkStatus)

    // loading status
    if (loading) {
      return <AppCommonModule.LoadingPage />
    }

    // error status
    if (error) {
      return <AppCommonModule.ErrorPage {...error} />
    }

    // emtpy status
    if (!users) {
      return <AppCommonModule.EmptyPage />
    }

    // render users
    return (
      <Fragment>
        <UserAdd onUserAddClicked={this.onUserAddClicked} />
        {
          (this.props.userToAdd && this.props.userToAdd.first_name) &&
          <span> I change my values when you click on add : {this.props.userToAdd.first_name}</span>
        }
        <UserList users={users} />
      </Fragment >
    )
  }
}

// graphql wrapper
/* export default graphql(UserListQueries, {
  name: 'userListQueries',
  options: { pollInterval: process.env.REACT_APP_REFETCH_USERS_INTERVAL },
})(UserListPage) */

// redux config
// each state change will been transformed
// to a propos change
function mapStateToProps(state) {
  AppCommonModule.AppLogger.info('mapStateToProps', state)
  return {
    userToAdd: state ? state[0].userToAdd : {},
  }
}

// users list gql query
const userListgqlQuery = graphql(UserListQueries, {
  name: 'userListQueries',
  // auto refetch option
  // options: { pollInterval: process.env.REACT_APP_REFETCH_USERS_INTERVAL },
})

// export module wrapped by gql and redux
export default compose(
  userListgqlQuery,
  connect(mapStateToProps),
)(UserListPage)
