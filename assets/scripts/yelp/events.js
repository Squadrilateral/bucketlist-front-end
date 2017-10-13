'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

const onYelpSearch = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('onYeldSearch data is', data)
  // if (data.term.trim().length) {
  console.log('onYelpSearch ran')
  api.getYelpResults(data)
    // .then((data) => console.log('on yelp search is ', data))
    .then(data => ui.getYelpResultsSuccess(data))
    .catch(ui.getYelpResultsFailure)
  // } else {
    // console.log('name field required for yelp search')
    // $('.add-listitem-message').html('Name field is require')
  // }
}

const getItemName = function (button) {
  console.log('Button is ', button.target)
  const itemName = $(button.target).parent().siblings('.resultName').attr('data-item-name')
  console.log('itemName is', itemName)
  return itemName
}

const getItemLocation = function (button) {
  console.log('Button is ', button.target)
  const itemLocation = $(button.target).parent().siblings('.resultLocation').attr('data-item-location')
  console.log('itemLocation is', itemLocation)
  return itemLocation
}

const getCurrentData = function (addButton) {
  const itemName = getItemName(addButton)
  const itemLocation = getItemLocation(addButton)
  $('#listItemName').val(itemName)
  $('#listItemLocation').val(itemLocation)
}

const addHandlers = function () {
  $('#yelp-search').on('submit', onYelpSearch)
  $('#search-content').on('click', '.add-result-button', getCurrentData)
}

module.exports = {
  addHandlers
}
