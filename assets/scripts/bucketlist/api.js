const config = require('../config')
const store = require('../store')

const getOneBucketItem = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/listitems/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const getBucketList = function () {
  return $.ajax({
    url: config.apiOrigin + '/listitems/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const postBucketList = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/listitems/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'listitem': {
        'name': data.listitem.name,
        'location': data.listitem.location,
        'category': data.listitem.category,
        'rating': data.listitem.rating
      }
    }
  })
}

const deleteItem = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/listitems/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateItem = function (elementId, data) {
  return $.ajax({
    url: config.apiOrigin + '/listitems/' + elementId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  getBucketList,
  postBucketList,
  deleteItem,
  updateItem,
  getOneBucketItem
}
