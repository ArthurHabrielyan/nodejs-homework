const getAll = require('./getAll');
const getById = require('./getById');
const remove = require('./remove');
const add = require('./add');
const update = require('./update');
const updateFavorite = require('./patch');

module.exports = {
  getAll,
  getById,
  remove,
  add,
  update,
  updateFavorite,
};
