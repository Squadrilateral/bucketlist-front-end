'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const bucketlistEvents = require('../bucketlist/events')

const onYelpSearch = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  // if (data.term.trim().length) {
  api.getYelpResults(data)
    // .then((data) => console.log('on yelp search is ', data))
    .then(ui.getYelpResultsSuccess)
    .catch(ui.getYelpResultsFailure)
  // } else {
    // console.log('name field required for yelp search')
    // $('.add-listitem-message').html('Name field is require')
  // }
}

const getItemName = function (button) {
  const itemName = $(button.target).parent().siblings('.resultName').attr('data-item-name')
  return itemName
}

const getItemLocation = function (button) {
  const itemLocation = $(button.target).parent().siblings('.resultLocation').attr('data-item-location')
  return itemLocation
}

const getCurrentData = function (addButton) {
  const itemName = getItemName(addButton)
  const itemLocation = getItemLocation(addButton)
  $('#input-yelp-item-name').val(itemName)
  $('#input-yelp-location').val(itemLocation)
}

const addHandlers = function () {
  $('#yelp-search').on('submit', onYelpSearch)
  $('#search-content').on('click', '.add-result-button', getCurrentData)
  $('#add-yelp-listitem').on('submit', bucketlistEvents.onPostBucketList)
}

module.exports = {
  addHandlers
}
