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
    // button props : hcolor, hbackground, halign
    // hfont, hfamily, hsize, hstyle, hweight,
    // hborder, hradius, hmargin, hpadding
    <div>
      <Button
        onClick={onUserAddClick}
        hcolor="white"
        hbackground="green"
        halign="right"
        hfamily="system-ui"
        hsize="1.5rem"
        hstyle="normal"
        hweight="lighter"
        hborder="black 10px"
        hradius="5px"
        hmargin="15px 5px 5px 15px"
        hpadding="10px"
      >
        Click Me To Add User
      </Button>
      <Button primary > Primary me </Button>
      <Button secondary > Secondary me </Button>
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

