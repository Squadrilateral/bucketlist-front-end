const store = require('../store')

const getBucketListSuccess = function (data) {
  store.listitems = data.listitems
  console.log('getBucketListSuccess ran!')
}

const getBucketListFailure = function (error) {
  console.error(error)
}

module.exports = {
  getBucketListSuccess,
  getBucketListFailure
}
