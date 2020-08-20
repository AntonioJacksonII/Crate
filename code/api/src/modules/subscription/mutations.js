// Imports
import { GraphQLInt } from 'graphql'

// App Imports - This code block imports the subscription types and create/remove resolvers
import SubscriptionType from './types'
import { create, remove } from './resolvers'

// Subscription create
export const subscriptionCreate = {
  type: SubscriptionType,
  args: { // These are the allowed args for subscription create actions
    crateId: {
      name: 'crateId',
      type: GraphQLInt
    }
  },
  resolve: create
}

// Subscription remove
export const subscriptionRemove = {
  type: SubscriptionType,
  args: { // These are the allowed args for the subscription remove action
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
