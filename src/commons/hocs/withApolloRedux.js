import { connect } from 'react-redux'
import { compose } from 'redux'

const withApolloRedux = ({ queries }, { mutations }, mapStateToProps, WrappedComponent) =>
  compose(
    ...queries,
    ...mutations,
    connect(mapStateToProps),
  )(WrappedComponent)

export default withApolloRedux
