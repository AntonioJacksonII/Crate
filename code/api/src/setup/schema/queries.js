// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
// import appropriate queries
import * as user from '../../modules/user/query'
import * as product from '../../modules/product/query'
import * as crate from '../../modules/crate/query'
import * as subscription from '../../modules/subscription/query'

// Query
// This searches and returns data, does not update
// Would have to add style or stylePrefs and add them to fields.

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