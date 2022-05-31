import { storageService } from './async-storage.service'
import { utilService } from './util.service'

// import gBoards from '../data/data'

const STORAGE_KEY = 'boards'

export const boardService = {
  query,
  getById,
  save,
  remove,
  add,
}

function query() {
  return storageService.query(STORAGE_KEY)
}

async function getById(boardId) {
  return storageService.get(STORAGE_KEY, boardId)
}

async function remove(boardId) {
  await storageService.remove(STORAGE_KEY, boardId)
  return storageService.query(STORAGE_KEY)
  // boardChannel.postMessage(getActionRemoveBoard(boardId))
}

async function add() {
  const board = _getNewBoard()
  await storageService.post(STORAGE_KEY, board)
  return storageService.query(STORAGE_KEY)
  // boardChannel.postMessage(getActionAddBoard(board))
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

function _getNewBoard() {
  return {
    title: 'New Board',
    statuses: [
      { name: '', color: '#0C4C4C4' },
      { name: 'Not Assignee', color: '#7F5347', hover: '#9E807A' },
      { name: 'Working On It', color: '#FDAB3D', hover: '#F6BE73' },
      { name: 'Bug', color: '#E2445C' },
      { name: 'Wating For Dev', color: '#784BD1', hover: '#997BDA' },
      { name: 'Wating For Deploy', color: '#037F4C' },
      { name: 'Wating For QA', color: '#FF158A', hover: '#F755A9' },
      { name: 'Done', color: '#00C875', hover: '#45D29A' },
    ],
    priority: [
      { name: 'High', color: '#BB3354' },
      { name: 'Medium', color: '#D974B0' },
      { name: 'Low', color: '#2B76E5' },
      { name: 'Done', color: '#00C875', hover: '#45D29A' },
      { name: '', color: '#0C4C4C4' },
    ],
    createdAt: new Date(),
    createdBy: {
      _id: 'u111',
      fullname: 'Guest',
      imgUrl: 'imgs/mini-user-imgs/u111.png',
    },
    members: [
      {
        _id: 'u111',
        fullname: 'Guest',
        imgUrl: 'imgs/mini-user-imgs/u111.png',
      },
    ],
    activities: [],
    groups: [],
    cmpsOrder: [
      'Assignee',
      'Status',
      'Priority',
      'Deadline',
      'Working Hours',
      'Last Updated',
    ],
  }
}

// storageService.post(STORAGE_KEY, gBoards)
