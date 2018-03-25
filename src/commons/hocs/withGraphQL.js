import { graphql } from 'react-apollo'

const withGraphQL = (query, data) => graphql(query, data)

export default withGraphQL
