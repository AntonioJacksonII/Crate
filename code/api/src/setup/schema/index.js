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
// This is where the schema is defined and the actions that can be done to the
// resources. It imports all of the queries and mutations which are defined in another file
export default schema
