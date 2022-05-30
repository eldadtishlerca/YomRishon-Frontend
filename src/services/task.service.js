import { storageService } from './async-storage.service'

const STORAGE_KEY = 'boards'

export const boardService = {
  query,
  getById,
  save,
  remove,
  // save
}

 function query() {
  return storageService.query(STORAGE_KEY)
}

function getById(boardId) {
  return storageService.get(STORAGE_KEY, boardId)
}

async function remove(boardId) {
  await storageService.remove(STORAGE_KEY, boardId)
  // boardChannel.postMessage(getActionRemoveBoard(boardId))
}

async function save(board) {
  let savedBoard
  if (board._id) {
    savedBoard = await storageService.put(STORAGE_KEY, board)
    // boardChannel.postMessage(getActionUpdateBoard(savedBoard))
  } else {
    // Later, owner is set by the backend
    // board.owner = userService.getLoggedinUser()
    savedBoard = await storageService.post(STORAGE_KEY, board)
    // boardChannel.postMessage(getActionAddBoard(savedBoard))
  }
  return savedBoard
}

// storageService.post(STORAGE_KEY, gBoards)