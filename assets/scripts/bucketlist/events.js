'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

const onGetBucketList = function () {
  api.getBucketList()
    .then(ui.getBucketListSuccess)
    .catch(ui.getBucketListFailure)
}

const onPostBucketList = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  if (data.listitem.name.trim().length) {
    $('.message-form').html('')
    api.postBucketList(data)
      .then(ui.postBucketListSuccess)
      .catch(ui.postBucketListFailure)
  } else {
    $('.message-form').html('Name field is required')
  }
}

const getItemId = function (button) {
  const element = $(button).parent().parent().children()[0]
  const elementId = $(element).attr('data-id')
  return elementId
}

const getItemName = function (button) {
  const element = $(button).parent().prev().children()[0]
  const itemName = $(element).attr('data-item-name')
  return itemName
}

const getItemLocation = function (button) {
  const element = $(button).parent().prev().children()[1]
  const itemLocation = $(element).attr('data-item-location')
  return itemLocation
}

const getItemCategory = function (button) {
  const element = $(button).parent().prev().children()[2]
  const itemCategory = $(element).attr('data-item-category')
  return itemCategory
}

const getItemRating = function (button) {
  const element = $(button).parent().prev().children()[3]
  const itemRating = $(element).attr('data-item-rating')
  return itemRating
}

const getItemStatus = function (button) {
  const element = $(button).parent().prev().children()[4]
  const itemStatus = $(element).attr('data-item-status')
  return itemStatus
}

const onDeleteItem = function (event) {
  event.preventDefault()
  const deleteButton = event.target
  const data = getItemId(deleteButton)
  api.deleteItem(data)
    .then(() => {
      ui.deleteItemSuccess(deleteButton)
    })
    .catch(ui.deleteItemFailure)
}

const getCurrentData = function (editButton) {
  const itemName = getItemName(editButton)
  const itemLocation = getItemLocation(editButton)
  const itemCategory = getItemCategory(editButton)
  const itemRating = getItemRating(editButton)
  const itemStatus = getItemStatus(editButton)
  $('#input-item-name').val(itemName)
  $('#input-location').val(itemLocation)
  $('#input-category').val(itemCategory)
  $('#input-rating').val(itemRating)
  $('#ratingSelect1').val(itemStatus)
}

const getData = function (event) {
  event.preventDefault()
  const editButton = event.target
  store.editedItemId = getItemId(editButton)
  getCurrentData(editButton)
  $('#edit-listitem').on('submit', onUpdateItem)
  $('.message-form').html('')
}

let isChecked = $('#incomplete-button').is(':checked')

const getStatus = function (event) {
  const onClick = function () {
    if (isChecked) {
      isChecked = false
      store.status = 'Incomplete'
    } else {
      isChecked = true
      store.status = 'Completed ✅'
    }
    return isChecked
  }
  onClick()
  onGetBucketList()
}

const onUpdateItem = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  const elementId = store.editedItemId
  if (data.listitem.name.trim().length) {
    $('.message-form').html('')
    api.updateItem(elementId, data)
      .then(ui.updateItemSuccess)
      .catch(ui.updateItemFailure)
  } else {
    $('.message-form').html('Name field is required')
  }
}

const addHandlers = function () {
  $('.add-item-btn').on('click', function () {
    $('.message-form').html('')
    $('#input-yelp-item-name').val('')
    $('#input-yelp-location').val('')
    $('#input-yelp-category').val('')
    $('#input-yelp-rating').val('')
  })
  $('#add-listitem').on('submit', onPostBucketList)
  $('#listcontent').on('click', '.remove-button', onDeleteItem)
  $('#listcontent').on('click', '.edit-button', getData)
  $('#incomplete-button').on('click', getStatus)
}

module.exports = {
  addHandlers,
  onGetBucketList,
  onPostBucketList
}
