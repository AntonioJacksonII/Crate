'use strict'

// User
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('users', {
    // defines the users attributes and sequelize translates to SQL
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
    // We would add another field here if we are saving the survey results as as
    // an attribute for users
  })

  User.associate = function(models) {
    User.hasMany(models.Subscription)
    // We would add a has many for stles if we are creating style as its own model
  }

  return User
}
