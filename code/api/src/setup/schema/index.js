// Imports
import { GraphQLSchema } from 'graphql'

// App Imports
import query from './queries'
import mutation from './mutations'

// Schema
const schema = new GraphQLSchema({
  query,
  mutation
})

// schema is defined here and all actions that can be done to all resources
// it's how database constructs itself and prepares to take in data 
// imports all queries and mutations

export default schema
