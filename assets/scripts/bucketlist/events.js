'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onGetBucketList = function () {
  console.log('onGetBucketList ran!')
  api.getBucketList()
    .then(ui.getBucketListSuccess)
    .catch(ui.getBucketListFailure)
}

const onPostBucketList = function (event) {
  console.log('onPostBucketList ran')
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  api.postBucketList(data)
    .then(ui.postBucketListSuccess)
    .catch(ui.postBucketListFailure)
}

const addHandlers = function () {
  // $('#').on('click', onGetBucketList)
  $('#add-listitem').on('submit', onPostBucketList)
}

module.exports = {
  addHandlers,
  onGetBucketList
}
