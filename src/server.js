import {  ApolloServer } from 'apollo-server'
import { schema } from './schema'
import { prisma } from './generated/'

const server = new ApolloServer({ 
  schema,
  context: {
    prisma
  }
})

export {server as default}