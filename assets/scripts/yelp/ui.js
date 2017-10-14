const store = require('../store')
const showResult = require('../templates/yelpresults.handlebars')

const getYelpResultsSuccess = function (data) {
  store.yelpresults = data.yelpresults

  console.log('in get reults success')
  // console.log("data.yelpresults", data.yelpresults)
  if(data.yelpresults.length) {
    $('.yelp-message').text('')
    const showResultHTML = showResult({ yelpresults: store.yelpresults })
    $('#search-content').html(showResultHTML)
    $('#search-content').show()
  } else {
    $('.yelp-message').html('No results found')
    $('#search-content').html('')
  }
 // console.log('getting to ui call')
  // console.log('data from api is ', data)
}

const getYelpResultsFailure = function (error) {
  $('.yelp-message').text('Search failed. Please try again.')
  console.log(error)
  console.log('in yelp result fail')
  $('#search-content').html('')
}

module.exports = {
  getYelpResultsSuccess,
  getYelpResultsFailure
}
