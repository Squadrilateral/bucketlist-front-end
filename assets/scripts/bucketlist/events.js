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
  // const elementId = $(button).parent().parent().children().first().attr('data-id')
  const element = $(button).parent().parent().children()[0]
  const elementId = $(element).attr('data-id')
  return elementId
}

const getItemName = function (button) {
  // const itemName = $(button).parent().siblings('.listItemName').attr('data-item-name')
  const element = $(button).parent().prev().children()[0]
  const itemName = $(element).attr('data-item-name')
  return itemName
}

const getItemLocation = function (button) {
  // const itemLocation = $(button).parent().siblings('.listItemLocation').attr('data-item-location')
  const element = $(button).parent().prev().children()[1]
  const itemLocation = $(element).attr('data-item-location')
  return itemLocation
}

const getItemCategory = function (button) {
  // const itemCategory = $(button).parent().siblings('.listItemCategory').attr('data-item-category')
  const element = $(button).parent().prev().children()[2]
  const itemCategory = $(element).attr('data-item-category')
  return itemCategory
}

const getItemRating = function (button) {
  // const itemRating = $(button).parent().siblings('.listItemRating').attr('data-item-rating')

  const element = $(button).parent().prev().children()[3]
  const itemRating = $(element).attr('data-item-rating')
  return itemRating
}

const getItemStatus = function (button) {
  const element = $(button).parent().prev().children()[4]
  const itemStatus = $(element).attr('data-item-status')
  console.log('Item Status is ', itemStatus)
  return itemStatus
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
  const itemStatus = getItemStatus(editButton)
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
  $('#ratingSelect1').val(itemStatus)
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
  $('#edit-listitem').on('submit', onUpdateItem)
}

let isChecked = $('#incomplete-button').is(':checked')

const getStatus = function (event) {
  console.log(event.target)
  console.log('event.target.checked is ', $(event.target).is(':checked'))
  const onClick = function () {
    if (isChecked) {
      isChecked = false
      store.status = 'Incomplete'
      console.log('ischecked is', isChecked)
    } else {
      isChecked = true
      store.status = 'Completed ✅'
      console.log('ischecked is second log', isChecked)
    }
    return isChecked
  }
  onClick()
  onGetBucketList()
  console.log('isChecked after ', isChecked)
}

  // console.log('checked? ', $(event.target).is(':checked'))
  // if ($(event.target).is(':checked')) {
  //   console.log('incomplete')
  //   store.status = 'incomplete'
  // } else {
  //   console.log('complete')
  //   store.status = 'complete'
  // }
  // onGetBucketList()


const onUpdateItem = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  const elementId = store.editedItemId
  api.updateItem(elementId, data)
    .then(ui.updateItemSuccess)
    .catch(ui.updateItemFailure)
}

const addHandlers = function () {
  $('.add-item-btn').on('click', function () {
    $('.message-form').html('')
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
