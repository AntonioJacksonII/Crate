// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports - This code imports the user types and create/remove resolvers
import { UserType } from './types'
import { create, remove } from './resolvers'

// Create - This may be updated to set the style value to null at initial signup
export const userSignup = {
  type: UserType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    }
  },
  resolve: create
}

// Remove
export const userRemove = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
