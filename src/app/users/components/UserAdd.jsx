import React from 'react'
import PropTypes from 'prop-types'
import AppLogger from '../../../commons/logger/AppLogger'
import AppCoreModule from '../../../core/index'

// button
const { Button } = AppCoreModule

const UserAdd = (props) => {
  // log
  AppLogger.info('UserAdd props : ', props)

  // user to be filled from form
  const currentUser = {
    firstName: 'H',
    lastName: 'Ben Kh',
    birthday: '25/10/1984',
    job: 'Tech lead Developer',
  }

  // on add click
  const onUserAddClick = (e) => {
    props.onUserAddClicked(e, currentUser)
  }

  // render error
  if (props.error && props.error.message) {
    return <AppCoreModule.ErrorPage {...props.error} />
  }

  // render only if not error
  return (
    <div>
      <Button
        onClick={onUserAddClick}
        family="fantasy"
      >
        Click Me To Add User
      </Button>
    </div >
  )
}

// prop type validation
UserAdd.propTypes = {
  onUserAddClicked: PropTypes.func,
  error: PropTypes.object,
}

// default prop
UserAdd.defaultProps = {
  onUserAddClicked: null,
  error: null,
}


export default UserAdd

