//import getUserId from '../utils/getUserId'

const User = {
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

    return prisma.users(opArgs, info)
  },

  me(parent, args, {prisma, req}, info) {
    //const id = getUserId(req)

    return prisma.query.user({where:{id}})
  }
}

export {User as default}