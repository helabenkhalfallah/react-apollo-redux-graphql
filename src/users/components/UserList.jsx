import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import AppCommonModule from '../../commons/index'

// display list
const UserList = ({ users, error, loading }) => {
  // log users props
  AppCommonModule.AppLogger.info('UserList users : ', users)
  AppCommonModule.AppLogger.info('UserList error : ', error)
  AppCommonModule.AppLogger.info('UserList loading : ', loading)

  // user list loading status
  if (loading) {
    return <AppCommonModule.LoadingPage />
  }

  // user list error status
  if (error) {
    return <AppCommonModule.ErrorPage {...error} />
  }

  // user list emtpy status
  if (!users) {
    return <AppCommonModule.EmptyPage />
  }

  // render only if data
  return (
    <Fragment>
      <ul >
        {users.map(item => (
          <li key={item.id}>
            {item.firstName} {item.lastName} {item.birthday}
          </li >
        ))
        }
      </ul >
    </Fragment>
  )
}

// prop type validation
UserList.propTypes = {
  users: PropTypes.array,
  error: PropTypes.object,
  loading: PropTypes.bool,
}

// default prop
UserList.defaultProps = {
  users: null,
  error: null,
  loading: false,
}

export default UserList

