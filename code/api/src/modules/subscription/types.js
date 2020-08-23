// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType } from '../user/types' // This code imports the user type
import CrateType from '../crate/types' // This code imports the crate type
// We will probably need to import the user type in the style types.js file
// Subscription type - stylePrefs will have similar fields - id, user, & style fields of GraphQLInt, UserType & StyleType
const SubscriptionType = new GraphQLObjectType({
  name: 'subscription',
  description: 'Subscription Type',

  fields: () => ({
    id: { type: GraphQLInt }, // It appears this is where the requirements for the field types are set (ie: the id must be a GraphQLInt, the user a UserType, etc.)
    user: { type: UserType },
    crate: { type: CrateType },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default SubscriptionType
