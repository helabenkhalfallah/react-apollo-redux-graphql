import React, { Component, Fragment } from 'react'
// import { graphql } from 'react-apollo'
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { compose } from 'redux'

// app module import
import AppCommonModule from '../../commons/index'

// gql queries & mutations import
import withApolloRedux from '../../commons/hocs/withApolloRedux'
import withGraphQL from '../../commons/hocs/withGraphQL'
import UserListQueries from '../graphql/UserListQueries'
import UserMutations from '../graphql/UserMutations'


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
    userToRemove: null,
    createUser: null,
    dispatch: null,
  }

  // propsType (validation)
  static propTypes = {
    userListQueries: PropTypes.object,
    userToAdd: PropTypes.object,
    userToRemove: PropTypes.object,
    createUser: PropTypes.func,
    dispatch: PropTypes.func,
  }

  // initial state
  state = {
    error: {
      message: '',
      networkError: '',
    },
  }

  // did mount staff
  componentDidMount() { }

  // force refetch
  // mapStateToProps
  componentWillReceiveProps(nextProps) {
    // add new user
    if (this.props.userToAdd !== nextProps.userToAdd) {
      this.addUser(nextProps.userToAdd)
    }
  }

  // on user add action
  onUserAddClicked = (event, params) => {
    if (event && event.preventDefault) {
      event.preventDefault()

      // mutation redux workflow
      this.props.dispatch(addUserAction(params))

      // direct apollo mutation call
      // without reudx workflow
      // this.addUser(params)
    }
  }

  // add new user
  addUser = (user) => {
    this.props.createUser(user)
      .then(({ data }) => {
        // force refetch if
        // user is added with success
        if (data) {
          this.props.userListQueries.refetch()
        }
      }).catch((error) => {
        this.setState({ error })
      })
  }

  // render
  render() {
    // render users
    return (
      <Fragment>
        <UserAdd onUserAddClicked={this.onUserAddClicked} error={this.state.error} />
        <UserList {...this.props.userListQueries} />
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
/* const userListgqlQuery = graphql(UserListQueries, {
  name: 'userListQueries',
  // auto refetch option
  // options: { pollInterval: process.env.REACT_APP_REFETCH_USERS_INTERVAL },
}) */
const userListgqlQuery = withGraphQL(UserListQueries, {
  name: 'userListQueries',
  // auto refetch option
  // options: { pollInterval: process.env.REACT_APP_REFETCH_USERS_INTERVAL },
})

// reate user mutation
/* const createUserMutation = graphql(UserMutations, {
  props: ({ mutate }) => ({
    createUser: ({
      firstName,
      lastName,
      birthday,
      job,
    }) =>
      mutate({
        variables: {
          firstName,
          lastName,
          birthday,
          job,
        },
      }),
  }),
}) */

const createUserMutation = withGraphQL(UserMutations, {
  props: ({ mutate }) => ({
    createUser: ({
      firstName,
      lastName,
      birthday,
      job,
    }) =>
      mutate({
        variables: {
          firstName,
          lastName,
          birthday,
          job,
        },
      }),
  }),
})

// export module wrapped by gql and redux
/* export default compose(
  userListgqlQuery,
  createUserMutation,
  connect(mapStateToProps),
)(UserListPage) */

// HOC for apollo
const queries = { queries: [userListgqlQuery] }
const mutations = { mutations: [createUserMutation] }
export default withApolloRedux(queries, mutations, mapStateToProps, UserListPage)
