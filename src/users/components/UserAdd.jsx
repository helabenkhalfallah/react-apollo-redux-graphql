import React from 'react'
import PropTypes from 'prop-types'
import AppCommonModule from '../../commons/index'

const UserAdd = (props) => {
  // log
  AppCommonModule.AppLogger.info('UserAdd props : ', props)

  // user to be filled from form
  const currentUser = {
    firstName: 'Ismail223ee',
    lastName: 'Ben Hamouda',
    birthday: '25/10/1986',
    job: 'Web lead Developer',
  }

  // on add click
  const onUserAddClick = (e) => {
    props.onUserAddClicked(e, currentUser)
  }

  // render error
  if (props.error && props.error.message) {
    return <AppCommonModule.ErrorPage {...props.error} />
  }

  // render only if not error
  return (
    <div>
      <button onClick={onUserAddClick}>Click Me To Add User</button>
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

