'use strict'

// User - This code defines the User model attributes and allowed data types for each attribute
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('users', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.TEXT
    }
  })
// This code creates a hasMany relationship between the User and Subscription objects (a User has many Subscriptions)
// We will probably need to create a hasMany relationship between User and a new Style object
  User.associate = function(models) {
    User.hasMany(models.Subscription) // This appears to be where the relationship is made - the function grabs models from models.js? and creates the hasMany association with the Subscription model that is imported into models.js
  }

  return User
}
