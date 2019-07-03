import { makeExecutableSchema } from 'graphql-tools';

import query from './query'
import mutation from './mutation'
import user from './types/user'
import resolvers from '../resolvers'

export const schema = makeExecutableSchema({
  typeDefs: [user, query, mutation],
  resolvers,
});
