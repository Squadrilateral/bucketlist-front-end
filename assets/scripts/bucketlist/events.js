'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

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
  console.log('onPostBucketList data is', data)
  if (data.listitem.name.trim().length) {
    api.postBucketList(data)
      .then(ui.postBucketListSuccess)
      .catch(ui.postBucketListFailure)
  } else {
    $('.add-listitem-message').html('Name field is require')
  }
}

const getItemId = function (button) {
  const elementId = $(button).parent().parent().attr('data-id')
  return elementId
}

const getItemName = function (button) {
  const itemName = $(button).parent().siblings('.listItemName').attr('data-item-name')
  console.log('itemName is', itemName)
  return itemName
}

const getItemLocation = function (button) {
  const itemLocation = $(button).parent().siblings('.listItemLocation').attr('data-item-location')
  console.log('itemLocation is', itemLocation)
  return itemLocation
}

const getItemCategory = function (button) {
  const itemCategory = $(button).parent().siblings('.listItemCategory').attr('data-item-category')
  console.log('itemCategory is', itemCategory)
  return itemCategory
}

const getItemRating = function (button) {
  const itemRating = $(button).parent().siblings('.listItemRating').attr('data-item-rating')
  console.log('itemRating is', itemRating)
  return itemRating
}

// const getItemName = function (button) {
//   const itemName = $(button).parent().siblings()[0]
//   // $(itemName).html('')
//   console.log('target', itemName)
//   console.log($(button))
//   // const listitem = $(button).attr('data-item-id')
//   // console.log('listitem is', listitem.location)
//   // console.log('itemNameTarge', itemName)
//   return itemName
// }

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
  // const target = editButton.parent()
  // const target = editButton.parent().parent().siblings()[0].html()
  const itemName = getItemName(editButton)
  const itemLocation = getItemLocation(editButton)
  const itemCategory = getItemCategory(editButton)
  const itemRating = getItemRating(editButton)
  // const itemName = $(editButton).attr('data-item-name')
  // console.log('this is', this)
  // const itemLocation = $(this).attr('data-item-location')
  // const itemCategory = $(this).attr('data-item-category')
  // const itemRating = $(this).attr('data-item-rating')
  // api.getOneBucketItem(store.editedItemId)
  //   .then((data) => {
  //     console.log('data', data.listitem)
  //     store.getOneBucketItem = data.listitem
  //     $('#input-item-name').val(item)
  //     $('#input-location').val(data.listitem.location)
  //     $('#input-category').val(data.listitem.category)
  //     $('#input-rating').val(data.listitem.rating)
  //     $('#modal-edit').modal('show')
  //   })
// console.log('itemName is', itemName)
  $('#input-item-name').val(itemName)
  $('#input-location').val(itemLocation)
  $('#input-category').val(itemCategory)
  $('#input-rating').val(itemRating)
  // debugger
  // $('#modal-edit').modal('show')
  // console.log('itemData is', itemData)
  // console.log('responsed data is', itemData.responseJSON)
  // console.log('target', target)
}

const getData = function (event) {
  event.preventDefault()
  const editButton = event.target
  store.editedItemId = getItemId(editButton)
  // store.edittedItemName = getItemName(editButton)
  // console.log('item name =', store.edittedItemName)
  getCurrentData(editButton)
  // $('#modal-edit').modal('show')
  console.log('elementId data is ', store.editedItemId)
  $('#edit-listitem').on('submit', onUpdateItem)
}

const onUpdateItem = function (event) {
  event.preventDefault()
  console.log('onUpdateItem ran')
  const data = getFormFields(this)
  console.log('data in onUpdateItem', data)
  const elementId = store.editedItemId
  api.updateItem(elementId, data)
    .then(ui.updateItemSuccess)
    .catch(ui.updateItemFailure)
}

const addHandlers = function () {
  // $('#').on('click', onGetBucketList)
  $('#add-listitem').on('submit', onPostBucketList)
  $('#listcontent').on('click', '.remove-button', onDeleteItem)
  $('#listcontent').on('click', '.edit-button', getData)
}

module.exports = {
  addHandlers,
  onGetBucketList
}
