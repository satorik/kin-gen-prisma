const user = `type AuthPayload {
  token: String!
  user: User!
}

type User {
  id: ID!
  name: String!
  email: String
  password: String
  updatedAt: String!
  createdAt: String!
}

input CreateUserInput {
  name: String!
  email: String!
  password: String!
}

input UpdateUserInput {
  name: String
  email: String
  password: String
}`

export default user