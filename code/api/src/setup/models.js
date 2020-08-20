// Imports
import Sequelize from 'sequelize'

// App Imports
import databaseConnection from './database' // This appears to be importing the code needed to make a database connection

const models = {
  User: databaseConnection.import('../modules/user/model'),
  Product: databaseConnection.import('../modules/product/model'),
  Crate: databaseConnection.import('../modules/crate/model'),
  Subscription: databaseConnection.import('../modules/subscription/model') // This appears to be making a database connection and then importing the Subscription model
} // We will probably need to add a line to import the new Style model

// This code block appears to be providing the instructions for creating an association/relationship between two different models based on the model passed in and whether or not an associate relationship is defined in the model
Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models)
  }
})

models.sequelize = databaseConnection
models.Sequelize = Sequelize

export default models
