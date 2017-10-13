const store = require('../store')
const showResult = require('../templates/yelpresults.handlebars')

const getYelpResultsSuccess = function (data) {
  store.yelpresults = data.yelpresults
  $('.yelp-message').text('')
  // console.log("data.yelpresults", data.yelpresults)
  const showResultHTML = showResult({ yelpresults: store.yelpresults })
  $('#search-content').html(showResultHTML)

 // console.log('getting to ui call')
  // console.log('data from api is ', data)
  $('#search-content').show()
}

const getYelpResultsFailure = function (error) {
  $('.yelp-message').text('Search failed. Please try again.')
  console.log(error)
  $('#search-content').html('')
}

module.exports = {
  getYelpResultsSuccess,
  getYelpResultsFailure
}
