import React from 'react'
import PropTypes from 'prop-types'
import AppCommonModule from '../../commons/index'

const UserAdd = ({ onUserAddClicked }) => {
  // log
  AppCommonModule.AppLogger.info('UserAdd props : ', this.props)

  // user to be filled from form
  const currentUser = {
    first_name: 'Ismail',
    last_name: 'Ben Hamouda',
    birthday: '25/10/1986',
    job: 'Web lead Developer',
  }

  // on add click
  const onUserAddClick = (e) => {
    onUserAddClicked(e, currentUser)
  }

  // render
  return (
    <div>
      <button onClick={onUserAddClick}>Click Me To Add User</button>
    </div>
  )
}

// prop type validation
UserAdd.propTypes = {
  onUserAddClicked: PropTypes.func,
}

// default prop
UserAdd.defaultProps = {
  onUserAddClicked: null,
}


export default UserAdd

