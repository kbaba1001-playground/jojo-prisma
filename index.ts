// import { prisma } from './generated/prisma-client'

// // A `main` function so that we can use async/await
// async function main() {
//   // Create a new user called `Alice`
//   const newUser = await prisma.createUser({ name: 'Alice' })
//   console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

//   // Read all users from the database and print them to the console
//   const allUsers = await prisma.users()
//   console.log(allUsers)
// }

// main().catch(e => console.error(e))

import { GraphQLServer } from 'graphql-yoga'

// Type Definition
const typeDefs = `
type Query {
  character: String!
}
`

// Resolvers
const resolvers = {
  Query: {
    character: () => `The force is strong with this API!`
  }
}

// Server
const server = new GraphQLServer({
  typeDefs,
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
