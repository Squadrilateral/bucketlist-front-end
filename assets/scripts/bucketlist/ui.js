const store = require('../store')
const showList = require('../templates/listitems.handlebars')
const api = require('./api')

const getBucketListSuccess = function (data) {
  store.listitems = data.listitems
  console.log('getBucketListSuccess ran')
  console.log('List Items console log ', store.listitems)
  const showListHTML = showList({ listitems: store.listitems })
  $('#listcontent').html(showListHTML)
}

const getBucketListFailure = function (error) {
  console.error(error)
}

const postBucketListSuccess = function (data) {
  console.log('postBucketListSuccess ran')
  console.log(data)
  api.getBucketList()
    .then(getBucketListSuccess)
    .catch(getBucketListFailure)
}

const postBucketListFailure = function (error) {
  console.error(error)
}

const deleteItemSuccess = function (deleteButton) {
  $(deleteButton).parent().parent().remove()
}

const deleteItemFailure = function (error) {
  console.error(error)
}

module.exports = {
  getBucketListSuccess,
  getBucketListFailure,
  postBucketListSuccess,
  postBucketListFailure,
  deleteItemSuccess,
  deleteItemFailure
}
