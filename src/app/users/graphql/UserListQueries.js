import gql from 'graphql-tag'

// We use the gql tag to parse our query string into a query document
const UserListQueries = gql`
    query UserListQueries{
      users{
        id,
        firstName,
        lastName,
        birthday,
        job
      }
    }
`
export default UserListQueries
