import gBoards from '../data/data.js'

export const boardService = {
  query,
  // save,
  // remove,
  // save
}

function query(boardId) {
  // When have more boards
  // var board = gBoards.filter((board) => board._id === boardId)
  var board = gBoards[0]
  return Promise.resolve(board)
}

// async function save(board) {
//   var savedBoard
//   if (board._id) {
//       savedBoard = await storageService.put(STORAGE_KEY, board)
//       // boardChannel.postMessage(getActionUpdateBoard(savedBoard))
      
//   } else {
//       // Later, owner is set by the backend
//       // board.owner = userService.getLoggedinUser()
//       savedBoard = await storageService.post(STORAGE_KEY, board)
//       // boardChannel.postMessage(getActionAddBoard(savedBoard))
//   }
//   return savedBoard
// }

// function remove(boardId, loggedinUser) {
//     const idx = gBoards.findIndex(board => board._id === boardId)
//     if (!loggedinUser.isAdmin &&  gBoards[idx].owner._id !== loggedinUser._id) {
//         return Promise.reject('Not your Board')
//     }
//     gBoards.splice(idx, 1)
//     return _saveBoardsToFile()
// }

// function getById(boardId) {
//     const board = gBoards.find(board => board._id === boardId)
//     return Promise.resolve(board)
// }

// function _saveBoardsToFile() {
//     return new Promise((resolve, reject) => {
//         fs.writeFile('data/board.json', JSON.stringify(gBoards, null, 2), (err) => {
//             if (err) {
//                 console.log(err);
//                 reject('Cannot write to file')
//             } else {
//                 console.log('Wrote Successfully!')
//                 resolve()
//             }
//         })
//     })
// }
