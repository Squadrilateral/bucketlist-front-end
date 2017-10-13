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

const addHandlers = function () {
  $('#yelp-search').on('submit', onYelpSearch)
}

module.exports = {
  addHandlers
}
