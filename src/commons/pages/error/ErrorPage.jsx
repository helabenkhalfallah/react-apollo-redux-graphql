import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

// app module import
import AppCommonModule from '../../index'

// error page
const ErrorPage = ({ message }) => {
  AppCommonModule.AppLogger.info('ErrorPage  message : ', message)
  return (
    <Fragment>
      <div>Error : {message} </div >
    </Fragment>
  )
}

// prop type validation
ErrorPage.propTypes = {
  message: PropTypes.string,
}

// default prop
ErrorPage.defaultProps = {
  message: 'Generale error',
}

export default ErrorPage
