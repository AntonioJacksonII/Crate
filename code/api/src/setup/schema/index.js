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
// we will need to add to find out if the migration will fix schema or we will need to edit it our selves
export default schema
