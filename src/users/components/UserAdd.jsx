import React from 'react'
import PropTypes from 'prop-types'
import AppCommonModule from '../../commons/index'

const UserAdd = (props) => {
  // log
  AppCommonModule.AppLogger.info('UserAdd props : ', props)

  // render
  return (
    <div>
      <button>{props.count}</button>
    </div>
  )
}

// prop type validation
UserAdd.propTypes = {
  count: PropTypes.number.isRequired,
  // onClick: PropTypes.func.isRequired,
}

export default UserAdd

