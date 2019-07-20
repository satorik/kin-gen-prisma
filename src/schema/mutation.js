const mutation = `type Mutation {
  login(email: String!, password: String!): AuthPayload!
  createUser(data: CreateUserInput): AuthPayload!
  deleteUser: User!
  updateUser(data: UpdateUserInput): User!
  createPerson(data: CreatePersonInput): Person!
  createMarriage(data: CreateMarriageInput): Marriage!
}`

export default mutation