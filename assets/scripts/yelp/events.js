'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

const onYelpSearch = function (event) {
  event.preventDefault()


  console.log('onYelpSearch ran')
  api.getYelpResults()
    // .then((data) => console.log('on yelp search is ', data))
    .then(data => ui.getYelpResultsSuccess(data))
    .catch(ui.getYelpResultsFailure)
}

const addHandlers = function () {
  $('#yelp-search').on('submit', onYelpSearch)
}

module.exports = {
  addHandlers
}
