const store = require('../store')

const getBucketListSuccess = function (data) {
  store.listitems = data.listitems
  console.log('getBucketListSuccess ran')
  console.log('List Items console log ', store.listitems)
  $('#listcontent').html(store.listitems)
}

const getBucketListFailure = function (error) {
  console.error(error)
}

const postBucketListSuccess = function (data) {
  console.log('postBucketListSuccess ran')
  console.log(data)
}

const postBucketListFailure = function (error) {
  console.error(error)
}

module.exports = {
  getBucketListSuccess,
  getBucketListFailure,
  postBucketListSuccess,
  postBucketListFailure
}
