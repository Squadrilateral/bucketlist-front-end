const store = require('../store')
const showResult = require('../templates/yelpresults.handlebars')

const getYelpResultsSuccess = function (data) {
  store.yelpresults = data.yelpresults
  // console.log("data.yelpresults", data.yelpresults)
  const showResultHTML = showResult({ yelpresults: store.yelpresults })
  $('#search-content').html(showResultHTML)

  // console.log('getting to ui call')
  // console.log('data from api is ', data)
  $('#search-content').show()
}

const getYelpResultsFailure = function (error) {
  console.error(error)
}

module.exports = {
  getYelpResultsSuccess,
  getYelpResultsFailure
}
