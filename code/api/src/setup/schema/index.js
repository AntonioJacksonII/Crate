// Imports
import { GraphQLSchema } from 'graphql'

// App Imports - This code imports the query and mutation specifics from their respective files
import query from './queries'
import mutation from './mutations'

// Schema - This code creates the schema with the imported query and mutation specifics
const schema = new GraphQLSchema({
  query,
  mutation
})

export default schema
