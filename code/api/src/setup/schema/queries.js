// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports - This code imports the allowed query specifics for each object type from their respective files - we would need to import the style & stylePrefs queries
import * as user from '../../modules/user/query'
import * as product from '../../modules/product/query'
import * as crate from '../../modules/crate/query'
import * as subscription from '../../modules/subscription/query'

// Query - This code defines the allowed query specifics for each object type based on the imported info - we would need to add style & stylePrefs here to the fields
const query = new GraphQLObjectType({
  name: 'query',
  description: 'API Queries [Read]',

  fields: () => ({
    ...user,
    ...product,
    ...crate,
    ...subscription
  })
})

export default query
