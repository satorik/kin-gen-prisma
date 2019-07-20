const person = {
  async createPerson(parent, {data}, {prisma}, info) {
    console.log(data)
  }
}