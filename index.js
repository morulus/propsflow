const factory = require('extraflow/factory');

module.exports = factory(function(prev, next) {
  if (typeof next === 'object') {
    return Object.assign({}, prev, next);
  }
  return prev;
});
