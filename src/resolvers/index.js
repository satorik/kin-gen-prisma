import Query from './query'
import Mutation from './mutation'

const resolvers = {
  Query: Query,
  Mutation: Mutation
}

//console.log(resolvers)

export { resolvers as default }