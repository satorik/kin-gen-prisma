import { Prisma } from 'prisma-binding'
import { fragmentReplacements } from './resolvers'

const prisma = new Prisma({
  typeDefs:'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false,
  fragmentReplacements
})

export { prisma as default }