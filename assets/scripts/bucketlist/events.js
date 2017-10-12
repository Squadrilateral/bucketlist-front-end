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
  }
}

const getItemId = function (button) {
  const elementId = $(button).parent().parent().attr('data-id')
  return elementId
}

const getItemName = function (button) {
  const itemName = $(button).parent().siblings()[0].text()
  // $(itemName).html('')
  console.log('itemNameTarge', itemName)
  return itemName
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

const getPreviousData = function (editButton) {
  const target = editButton.parent()
  // const target = editButton.parent().parent().siblings()[0].html()

  console.log('target', target)
}

const getData = function (event) {
  event.preventDefault()
  const editButton = event.target
  store.editedItemId = getItemId(editButton)
  // store.edittedItemName = getItemName(editButton)
  // console.log('item name =', store.edittedItemName)
  // getPreviousData(editButton)
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
