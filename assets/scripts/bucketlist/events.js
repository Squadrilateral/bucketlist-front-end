'use strict'

const api = require('./api')
const ui = require('./ui')

const onGetBucketList = function () {
  console.log('onGetBucketList ran!')
  api.getBucketList()
    .then(ui.getBucketListSuccess)
    .catch(ui.getBucketListFailure)
}

const onPostBucketList = function (data) {
  console.log('onPostBucketList ran')
  api.postBucketList()
    .then(ui.postBucketListSuccess)
    .catch(ui.postBucketListFailure)
}

const addHandlers = function () {
  // $('#').on('click', onGetBucketList)
}

module.exports = {
  addHandlers,
  onGetBucketList
}
