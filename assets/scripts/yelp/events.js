'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const bucketlistEvents = require('../bucketlist/events')

const onYelpSearch = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('on yelp search data is', data)
  if (data.location.trim().length) {
    $('.yelp-message').html('')
  api.getYelpResults(data)
    // .then((data) => console.log('on yelp search is ', data))
    .then(ui.getYelpResultsSuccess)
    .catch(ui.getYelpResultsFailure)
  } else {
    console.log('Location field required for yelp search')
    $('.yelp-message').html('Location field is required')
    $('#search-content').html('')
  }
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
