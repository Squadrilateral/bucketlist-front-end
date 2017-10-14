'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

const store = require('./store')
const authEvents = require('./auth/events')
const bucketlistEvents = require('./bucketlist/events')
const yelpEvents = require('./yelp/events')

$(() => {

// test
// $('#search-content').show()
// $('#listcontent').show()
// $('#add-listitem').show()
// $('#yelp-search').show()

// test end

  setAPIOrigin(location, config)
  $('.add-item-btn').hide()
  $('#btn-change-password').hide()
  $('#btn-sign-out').hide()
  $('#add-listitem').hide()
  $('.btn-auth').on('click', function () {
    $('.message-form').html('')
  })

  store.isSignedIn = false
  $('.create-list-btn').hide()
  authEvents.addHandlers()
  bucketlistEvents.addHandlers()
  yelpEvents.addHandlers()
})

// const Yelp = require('yelp')
//
// const opts = {
//   client_id: process.env.CLIENT_ID,
//   client_secret: process.env.CLIENT_SECRET,
//   token_type: process.env.TOKEN_TYPE,
//   token_secret: process.env.TOKEN_SECRET
// }
//
// const yelp = new Yelp(opts)




// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
