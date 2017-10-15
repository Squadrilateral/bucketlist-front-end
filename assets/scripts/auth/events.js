'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  let isMatchPasswords
  let allFilledIn
  clearMessage()
  if (data.credentials.password !== data.credentials.password_confirmation) {
    // $('.message-form').text('Your passwords do not match. Please try again.')
    isMatchPasswords = false
  } else {
    isMatchPasswords = true
  }

  if (data.credentials.email.trim().length && data.credentials.password.trim().length && data.credentials.password_confirmation.trim().length) {
    allFilledIn = true
  } else {
    allFilledIn = false
    // $('.message-form').text('All fields are required.')
  }

  if (allFilledIn && isMatchPasswords) {
    api.signUp(data)
      .then(ui.signUpSuccess)
      .catch(ui.signUpFailure)
  } else {
    $('.message-form').text('Error on sign up')
  }
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  clearMessage()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  clearMessage()
  if (data.passwords.old.trim().length && data.passwords.new.trim().length) {
    api.changePassword(data)
      .then(ui.changePasswordSuccess)
      .catch(ui.changePasswordFailure)
  } else {
    $('.message-form').text('All fields are required.')
  }
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
const clearMessage = function () {
  $('#message-form').text('')
  $('#email-address').val('')
  $('#password').val('')
  $('#password-confirmation').val('')
  $('#email-address-sign-in').val('')
  $('#password-sign-in').val('')
  $('#old-password').val('')
  $('#new-password').val('')
}

const addHandlers = function () {
  $('#account').on('click', function () {
    $('message-form').text('')
  })
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#btn-sign-out').on('click', onSignOut)
  $('#btn-sign-up').on('click', clearMessage)
  $('#btn-sign-in').on('click', clearMessage)
  $('#btn-change-password').on('click', clearMessage)
}

module.exports = {
  addHandlers,
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
