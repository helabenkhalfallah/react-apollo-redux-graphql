import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import AppCommonModule from '../../commons/index'

// display list
const UserList = ({ users }) => {
  // log users props
  AppCommonModule.AppLogger.info('UserList props : ', users)

  // break if no data available
  if (!users) {
    return null
  }

  // render only if data
  return (
    <Fragment>
      <ul >
        {users.map(item => (
          <li key={item.id}>
            {item.first_name} {item.last_name} {item.birthday}
          </li >
        ))
        }
      </ul >
    </Fragment>
  )
}

// prop type validation
UserList.propTypes = {
  users: PropTypes.array.isRequired,
}

export default UserList

