const marriage = `
type Marriage {
  id: ID!
  isOfficial: Boolean
  marriedAt: String
  divorcedAt: String
  person: Person
  marriedTo: Person
  updatedAt: String!
  createdAt: String!
}

input CreateMarriageInput {
  isOfficial: Boolean
  marriedAt: String
  divorcedAt: String
  person: ID!
  marriedTo: ID!
}
`

export {marriage as default}