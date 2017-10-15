'use strict'
const store = require('../store')
const bucketlistEvents = require('../bucketlist/events')

const signUpSuccess = function (data) {
  $('.message-form').html('Successfully signed up. Please log in!')
  clearForm()
}
const signUpFailure = function () {
  $('.message-form').html('Error on sign up')
}

const signInSuccess = function (data) {
  store.user = data.user
  store.isSignedIn = true
  store.status = 'Incomplete'
  clearForm()
  $('#examples').hide()

  $('.content').css('display', 'none')
  $('.message-form').html('Successfully signed in')
  $('#account').modal('hide')
  $('.create-list-btn').show()
  $('#modal-sign-in').modal('hide')
  $('.message-form').html('')
  $('#btn-sign-up').hide()
  $('#btn-sign-in').hide()
  $('#btn-change-password').show()
  $('#btn-sign-out').show()
  $('#add-listitem').show()
  $('.centered').hide()
  $('#yelp-search').show()
  $('.bucket-image').hide()
  $('.add-item-btn').show()
  $('.add-bucketList-message').show()
  $('#incomplete-button').show()
  $('.container').show()
  bucketlistEvents.onGetBucketList()
}

const signInFailure = function () {
  $('.message-form').html('Error on sign in')
  clearForm()
}

const changePasswordSuccess = (data) => {
  clearForm()
  $('#sign-out').show()
  $('.message-form').html('Successfully changed password')
}

const changePasswordFailure = () => {
  $('.message-form').html('Error on change password')
  clearForm()
}
const signOutSuccess = function (data) {
  store.user = null
  store.isSignedIn = false
  $('.message-form').html('Successfully signed out')
  $('#account').modal('hide')
  $('.content').hide()
  $('.create-list-btn').hide()
  $('#examples').show()
  $('#btn-sign-up').show()
  $('#btn-sign-in').show()
  $('#btn-change-password').hide()
  $('#btn-sign-out').hide()
  $('#add-listitem').hide()
  $('#listcontent').html('')
  $('.add-listitem-message').html('')
  $('.centered').show()
  $('#yelp-search').hide()
  $('#search-content').text('')
  $('.bucket-image').show()
  $('.add-item-btn').hide()
  $('.add-bucketList-message').hide()
  $('#incomplete-button').hide()
  $('.container-list').hide()
  $('.container-yelp').hide()
  $('.yelp-message').html('')
}

const signOutFailure = function () {
  $('.message-form').html('Error on sign out')
  $('#sign-out').hide()
  $('#examples').show()
}
const clearForm = function () {
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
