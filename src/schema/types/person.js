const person = `
enum Sex {
  MALE
  FEMALE
  OTHER
}

type Person {
  id: ID!
  firstname: String
  middlename: String
  lastname: String
  birthday: String
  deathday: String
  sex: Sex
  parents: [Person!] 
  children: [Person!]
  marriage: [Marriage!]
  updatedAt: String!
  createdAt: String!
  user: User
}

input CreatePersonInput {
  firstname: String
  middlename: String
  lastname: String
  birthday: String
  deathday: String
  sex: Sex
  parents: [ID!] 
  children: [ID!]
  marriage: [ID!]
}
`

export {person as default}