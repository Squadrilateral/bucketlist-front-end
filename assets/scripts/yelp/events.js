'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

const onYelpSearch = function () {
  console.log('onYelpSearch ran')
  api.getYelpResults()
    .then(ui.getYelpResultsSuccess)
    .then(console.log('it worked'))
    .catch(console.log('it didnt work'))
}

const addHandlers = function () {
  $('#yelp-search').on('submit', onYelpSearch)
}

module.exports = {
  addHandlers
}
