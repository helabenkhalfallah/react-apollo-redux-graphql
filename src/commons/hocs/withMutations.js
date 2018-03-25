// export gql mutations to adequate format
const withMutations = (gqlMutations) => {
  // render gql queries
  return (
    {
      mutations: gqlMutations,
    }
  )
}

export default withMutations
