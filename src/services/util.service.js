export const utilService = {
  makeId,
  makeLorem,
  getRandomIntInclusive,
  delay,
  msToUpdate,
}

function makeId(length = 6) {
  var txt = ''
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return txt
}

function makeLorem(size = 100) {
  var words = [
    'The sky',
    'above',
    'the port',
    'was',
    'the color of television',
    'tuned',
    'to',
    'a dead channel',
    '.',
    'All',
    'this happened',
    'more or less',
    '.',
    'I',
    'had',
    'the story',
    'bit by bit',
    'from various people',
    'and',
    'as generally',
    'happens',
    'in such cases',
    'each time',
    'it',
    'was',
    'a different story',
    '.',
    'It',
    'was',
    'a pleasure',
    'to',
    'burn',
  ]
  var txt = ''
  while (size > 0) {
    size--
    txt += words[Math.floor(Math.random() * words.length)] + ' '
  }
  return txt
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}

function delay(ms = 1500) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

function msToUpdate(duration) {
  if (duration < 1000 * 60) return 'Just now'
  if (duration < 1000 * 60 * 60) {
    var minutes = Math.floor((duration / (1000 * 60)) % 60)
    minutes = minutes < 10 ? '0' + minutes : minutes
    return `${minutes} minutes ago`
  }
  if (duration < 1000 * 60 * 60 * 24) {
    var hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    hours = hours < 10 ? '0' + hours : hours
    return `${hours} hours ago`
  }
  if (duration < 1000 * 60 * 60 * 24 * 365) {
    var days = Math.floor((duration / (1000 * 60 * 60 * 24)) % 365)
    return `${days} days ago`
  }
  var years = Math.floor(duration / (1000 * 60 * 60 * 24 * 365))
  return `${years} years ago`
}
