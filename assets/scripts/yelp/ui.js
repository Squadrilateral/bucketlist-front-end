const store = require('../store')
const showList = require('../templates/listitems.handlebars')

const getYelpResultsSuccess = function (data) {
  console.log('getting to ui call')
  console.log('data from api is ', data)
}
const getYelpResultsFailure = function (error) {
  console.error(error)
}

module.exports = {
  getYelpResultsSuccess,
  getYelpResultsFailure
}
