'use strict'

// Subscription - Our stylePrefs model will probably look similar
module.exports = function(sequelize, DataTypes) {
  let Subscription = sequelize.define('subscriptions', {
    userId: {
      type: DataTypes.INTEGER // This specifies the userId attribute as an integer - We will need this for stypePrefs userId
    },
    crateId: {
      type: DataTypes.INTEGER // This specifies the crateId attribute as an integer - We will need this for stylePrefs styleId
    }
  })

  Subscription.associate = function(models) {  // This establishes the belongsTo relationships between User and Crate that create the many to many relationship between Users and Crates
    Subscription.belongsTo(models.User) // StylePrefs will belongTo User and Style
    Subscription.belongsTo(models.Crate)
  }

  return Subscription
}
