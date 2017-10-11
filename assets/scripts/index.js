'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

const store = require('./store')
const authEvents = require('./auth/events')
// const listEvents = require('./lists/events')

$(() => {
  setAPIOrigin(location, config)
  $('#btn-change-password').hide()
  $('#btn-sign-out').hide()

  store.isSignedIn = false
  $('.create-list-btn').hide()
  // listEvents.addHandlers()
  // itemEvents.addHandlers()
  authEvents.addHandlers()
  $('#examples').show()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
