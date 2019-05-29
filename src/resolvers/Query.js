import getUserId from '../utils/getUserId'

const Query = {
  users(parent, {query, first, skip, after, orderBy}, {prisma}, info) {
    const opArgs = {
      first,
      skip,
      after,
      orderBy
    }

    if (query) {
      opArgs.where = {
        OR: [{
          name_contains: query
        }]

      }
    }

    return prisma.query.users(opArgs, info)
  },

  me(parent, args, {prisma, req}, info) {
    const id = getUserId(req)

    return prisma.query.user({where:{id}})
  }
}

export {Query as default}