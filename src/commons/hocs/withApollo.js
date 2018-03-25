import { compose } from 'redux'

const withApollo = ({ queries }, { mutations }, WrappedComponent) =>
  compose(
    ...queries,
    ...mutations,
  )(WrappedComponent)

export default withApollo
