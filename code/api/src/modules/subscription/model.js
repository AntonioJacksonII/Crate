'use strict'

// Subscription
module.exports = function(sequelize, DataTypes) {
  let Subscription = sequelize.define('subscriptions', {
    userId: {
      type: DataTypes.INTEGER
    },
    crateId: {
      type: DataTypes.INTEGER
    }
    // here we would have syleId rather than crateId
  })
  Subscription.associate = function(models) {
    Subscription.belongsTo(models.User)
    Subscription.belongsTo(models.Crate)
    // this would also be the same, but with Style rather than Crate
  }

  return Subscription
}
