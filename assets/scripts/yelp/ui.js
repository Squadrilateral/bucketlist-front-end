const store = require('../store')
const showResult = require('../templates/yelpresults.handlebars')

const getYelpResultsSuccess = function (data) {
  store.yelpresults = data.yelpresults

  if (data.yelpresults.length) {
    $('.yelp-message').text('')
    const showResultHTML = showResult({ yelpresults: store.yelpresults })
    $('#search-content').html(showResultHTML)
    $('#search-content').show()
  } else {
    $('.yelp-message').html('No results found')
    $('#search-content').html('')
  }
}

const getYelpResultsFailure = function () {
  $('.yelp-message').text('Search failed. Please try again.')
  $('#search-content').html('')
}

module.exports = {
  getYelpResultsSuccess,
  getYelpResultsFailure
}
