module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('users', 'style', {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('User', 'style');
  }
}
