import getUserId from '../utils/getUserId'

const User = {
  email:{
    fragment: 'fragment userId on User { id }',
    resolve(parent, args, {req}, info) {
      const userId = getUserId(req, false)
  
      if (userId && userId === parent.id) {
        return parent.email
      }
      
      return null
    }
  },
  password: {
    resolve(parent, args, ctx, info) {
      return null
    }
  }
}

export {User as default}