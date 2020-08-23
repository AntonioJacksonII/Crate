// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import SubscriptionType from './types'
import { getAll, getByUser, get } from './resolvers'

// The stylePrefs model will have similar queries
// Subscriptions All
export const subscriptions = {
  type: new GraphQLList(SubscriptionType),
  resolve: getAll
}

// Subscriptions by user
export const subscriptionsByUser = {
  type: new GraphQLList(SubscriptionType),
  resolve: getByUser
}

// Subscription By id
export const subscription = {
  type: SubscriptionType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: get
}
