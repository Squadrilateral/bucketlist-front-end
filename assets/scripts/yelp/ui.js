const store = require('../store')
const showList = require('../templates/listitems.handlebars')
const api = require('./api')


const getYelpResultsSuccess = function (data) {
  console.log('data from api is ', data)
}

module.exports = {
  getYelpResultsSuccess
}
