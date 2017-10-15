const store = require('../store')
const showList = require('../templates/listitems.handlebars')
const api = require('./api')

const getBucketListSuccess = function (data) {
  store.listitems = data.listitems
  if (store.listitems.length === 0) {
    $('.add-bucketList-message').html('Your bucket is empty. Please add items.')
    $('#incomplete-button').hide()
  } else {
    const newList = store.listitems.filter(item => item.status === store.status)
    const showListHTML = showList({ listitems: newList })
    $('#incomplete-button').show()
    $('#listcontent').html(showListHTML)
    $('.add-listitem-message').html('')
    $('.add-bucketList-message').html('')
  }
}

const getBucketListFailure = function () {
  $('.add-bucketList-message').html('Error. Please try again.')
}

const postBucketListSuccess = function (data) {
  $('form').trigger('reset')
  $('#modal-add').modal('hide')
  api.getBucketList()
    .then(getBucketListSuccess)
    .catch(getBucketListFailure)
}

const postBucketListFailure = function () {
  $('.add-bucketList-message').html('Error. Please try again.')
}

const deleteItemSuccess = function (deleteButton) {
  $(deleteButton).parent().parent().remove()
  api.getBucketList()
    .then(getBucketListSuccess)
    .catch(getBucketListFailure)
}

const deleteItemFailure = function () {
  $('.add-bucketList-message').html('Error. Please try again.')
}

const updateItemSuccess = function (data) {
  $('form').trigger('reset')
  $('#modal-edit').modal('hide')
  api.getBucketList()
    .then(getBucketListSuccess)
    .catch(getBucketListFailure)
}

const updateItemFailure = function () {
  $('.add-bucketList-message').html('Error. Please try again.')
}

module.exports = {
  getBucketListSuccess,
  getBucketListFailure,
  postBucketListSuccess,
  postBucketListFailure,
  deleteItemSuccess,
  deleteItemFailure,
  updateItemSuccess,
  updateItemFailure
}
