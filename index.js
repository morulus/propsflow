var factory = require('extraflow/factory');

module.exports = factory(function(prev, next) {
  if (typeof next === 'object' && next !== prev) {
    return Object.assign({}, prev, next);
  }
  return prev;
});
