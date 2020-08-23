// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports - This code imports the allowed mutation specifics for each object type from their respective folders - we would import style and stylePrefs mutation paths
import * as user from '../../modules/user/mutations'
import * as product from '../../modules/product/mutations'
import * as crate from '../../modules/crate/mutations'
import * as subscription from '../../modules/subscription/mutations'

// Mutation - This code defines the allowed mutations based on the object type - If we create Styles and stylePrefs, we would just need to add those to the fields
const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: 'API Mutations [Create, Update, Delete]',

  fields: {
    ...user,
    ...product,
    ...crate,
    ...subscription
  }
})

export default mutation
