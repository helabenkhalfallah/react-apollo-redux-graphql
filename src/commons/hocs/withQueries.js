// export gql queries to adequate format
const withQueries = (gqlQueries) => {
  // render gql queries
  return (
    {
      queries: gqlQueries,
    }
  )
}

export default withQueries
