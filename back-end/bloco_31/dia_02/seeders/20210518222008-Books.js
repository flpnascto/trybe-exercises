'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'O Livro dos Espíritos',
        author: 'Allan Kardec',
        createAt: new Date(),
      },
      {
        title: 'A Caminho da Luz',
        author: 'Francisco Candido Xavier',
        pageQuantity: 206,
        createAt: new Date(),
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
