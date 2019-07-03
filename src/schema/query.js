const query = `type Query {
  users(query: String, first: Int, skip: Int, after: String): [User!]!
  me: User!
}`

export default query