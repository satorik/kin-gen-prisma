const mutation = `type Mutation {
  login(email: String!, password: String!): AuthPayload!
  createUser(data: CreateUserInput): AuthPayload!
  deleteUser: User!
  updateUser(data: UpdateUserInput): User!
}`

export default mutation