const config = require('../config')
const store = require('../store')

const getYelpResults = function () {
  return $.ajax({
    url: 'https://api.yelp.com/v3/businesses/search' + '?term=' + 'food' + '&location=' + 'boston',
    method: 'GET',
    headers: {
      Authorization: 'Bearer p8d8IV929sZ6XNoIo3deV4YOcQRTxZYQekXTFhGRyrNsy_-2IFWYd3HoCIFORWid4ULMKoJBhzUpWveB-Dxowz4lHTkezdFZ69IYYYw-7k-fijhYM4YLH7lZLJjfWXYx'
    }
  })
}

// businesses/search?term=restaurant&latitude=40.82783908257346&longitude=-74.10162448883057

module.exports = {
  getYelpResults
}
