import bcrypt from 'bcryptjs'
import getUserId from '../utils/getUserId'
import token from '../utils/getToken'
import hashPassword from '../utils/hashPassword'

const Mutation = {
  async login(parent, {email, password}, {prisma}, info) {
    if (typeof email !== 'string' || password.length < 6) {
      throw new Error('Wrong credentials')
    }

    const user = await prisma.query.user({where:{email}})
    if (!user) {
      throw new Error('No User!')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      throw new Error('Wrong password')
    }

    return {user, token: token(user.id)}
  },
  async createUser(parent, {data}, {prisma}, info) {

    const password = await hashPassword(data.password)

    const user = await prisma.mutation.createUser({
        data: { 
          ...data,
          password
        }
      })
    
    return {user, token: token(user.id) }
  },

  async deleteUser(parent, args, {prisma}, info) {

    const id = getUserId(req)

    const user = await prisma.exists.User({id})
    if (!user) {
      throw new Error('No User!')
    }

    return await prisma.mutation.deleteUser({where: {id}}, info)

  },
  async updateUser(parent, {data}, {prisma, req}, info) {

    if (typeof data.password === 'string') {
      data.password = await hashPassword(data.password)
    }

    const id = getUserId(req)

    return prisma.mutation.updateUser({
      where: {id},
      data
    }, info)
  }
}

export {Mutation as default}