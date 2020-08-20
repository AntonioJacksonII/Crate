'use strict'

// Subscription
module.exports = function(sequelize, DataTypes) {
  let Subscription = sequelize.define('subscriptions', {
    userId: {
      type: DataTypes.INTEGER
    },
    // A survey model would look the same up to this point, but would not have crateId
    crateId: {
      type: DataTypes.INTEGER
    }
  })
// I think the survey model will look very similar to this model,
// it will probably only belong to a user though and will have a description
  Subscription.associate = function(models) {
    Subscription.belongsTo(models.User)
    Subscription.belongsTo(models.Crate)
  }

  return Subscription
}
