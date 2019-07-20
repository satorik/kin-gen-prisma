import { makeExecutableSchema } from 'graphql-tools';

import query from './query'
import mutation from './mutation'
import user from './types/user'
import person from './types/person'
import marriage from './types/marriage'
import resolvers from '../resolvers'

export const schema = makeExecutableSchema({
  typeDefs: [user, person, marriage, query, mutation],
  resolvers,
});
