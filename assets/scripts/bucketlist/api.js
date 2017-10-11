const config = require('../config')

const getBucketList = function () {
  return $.ajax({
    url: config.apiOrigin + '/listitems/',
    method: 'GET'
  })
}

module.exports = {
  getBucketList
}
