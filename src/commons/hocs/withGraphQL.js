import { graphql } from 'react-apollo'

// graphql query factory
const withGraphQL = (query, data) => graphql(query, data)

export default withGraphQL
