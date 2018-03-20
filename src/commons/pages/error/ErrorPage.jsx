import React from 'react'
import PropTypes from 'prop-types'

// eror page
const ErrorPage = ({ error }) => (
  <div>Error : {error} </div>
)

// prop type validation
ErrorPage.propTypes = {
  error: PropTypes.objectOf(PropTypes.object).isRequired,
}

export default ErrorPage
