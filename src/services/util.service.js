export const utilService = {
  makeId,
  makeLorem,
  getRandomIntInclusive,
  delay,
  msToUpdate,
  monthIdxToName,
  getRandomColor,
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
    return `${minutes} minutes ago`
  }
  if (duration < 1000 * 60 * 60 * 24) {
    var hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    return `${hours} hours ago`
  }
  if (duration < 1000 * 60 * 60 * 24 * 365) {
    var days = Math.floor((duration / (1000 * 60 * 60 * 24)) % 365)
    return `${days} days ago`
  }
  var years = Math.floor(duration / (1000 * 60 * 60 * 24 * 365))
  return `${years} years ago`
}

function monthIdxToName(idx) {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  return monthNames[idx]
}

function getRandomColor() {
  const colors = getAllColors()
  const idx = getRandomIntInclusive(0, 18)
  return colors[idx]
}

function getAllColors() {
  const colors = [
    { name: 'darkgreen', color: '#037F4C', hover: '#359970' },
    { name: 'green', color: '#00C875', hover: '#33D391' },
    { name: 'lightgreen', color: '#9CD326', hover: '#B0DC51' },
    { name: 'brownyellow', color: '#CAB641', hover: '#D5C567' },
    { name: 'yellow', color: '#FFCB00', hover: '#FFD533' },
    { name: 'darkpurple', color: '#784BD1', hover: '#936FDA' },
    { name: 'purple', color: '#A25DDC', hover: '#B57DE3' },
    { name: 'lightblue', color: '#0086C0', hover: '#339ECD' },
    { name: 'lightpurple', color: '#579BFC', hover: '#B57DE3' },
    { name: 'whiteblue', color: '#66CCFF', hover: '#85D6FF' },
    { name: 'darkpink', color: '#BB3354', hover: '#C95C76' },
    { name: 'lightred', color: '#E2445C', hover: '#E8697D' },
    { name: 'pink', color: '#FF158A', hover: '#FF44A1' },
    { name: 'lightpink', color: '#FF5AC4', hover: '#FF7BD0' },
    { name: 'lightyellow', color: '#FDAB3D', hover: '#FDBC64' },
    { name: 'orange', color: '#FF642E', hover: '#FF8358' },
    { name: 'brown', color: '#7F5347', hover: '#99756C' },
    { name: 'lightgrey', color: '#C4C4C4', hover: '#D0D0D0' },
    { name: 'grey', color: '#808080', hover: '#999999' },
  ]
  return colors
}
