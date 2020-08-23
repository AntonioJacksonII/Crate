'use strict'
// This is the model for the crate, the styles model may be similar with a name and possible description attributes
module.exports = function(sequelize, DataTypes) {
  let Crate = sequelize.define('crates', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  })

  Crate.associate = function(models) {
    Crate.hasMany(models.Subscription) // If we do a joins table, the style model will have a hasMany relationship to stylePrefs
  }

  return Crate
}
