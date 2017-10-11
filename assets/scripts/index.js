'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

const store = require('./store')
const authEvents = require('./auth/events')
const bucketlistEvents = require('./bucketlist/events')

$(() => {
  setAPIOrigin(location, config)
  $('#btn-change-password').hide()
  $('#btn-sign-out').hide()
  $('.btn-auth').on('click', function () {
    $('.message-form').html('')
  })

  store.isSignedIn = false
  $('.create-list-btn').hide()
  authEvents.addHandlers()
  bucketlistEvents.addHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
