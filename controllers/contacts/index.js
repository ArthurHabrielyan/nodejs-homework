const getAll = require('./getAll');
const getById = require('./getById');
const post = require('./post');
const update = require('./update');
const deleted = require('./delete');
const updateFavorite = require('./patch');

module.exports = {
  getAll,
  getById,
  update,
  post,
  deleted,
  updateFavorite,
};
