// This looks very similar to a migration in Rails and it seems like
// we will want to do another one for a survey resource that belongs to a user
// or we will have to add another field to the user table to store the stylen they were givin

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
        // I think Sequelize just translates to SQL
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.TEXT
      },
      password: {
        type: Sequelize.TEXT
      },
      role: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
      // This is what creates the user model in the DB, I am not sure If we can just
      // edit this file if we want to add a field, or if we will need to create an
      // entrirely new migration file to add a new field to an existing resource
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
}
