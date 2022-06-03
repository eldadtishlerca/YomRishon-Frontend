import { storageService } from './async-storage.service'
import axios from 'axios'

const STORAGE_KEY = 'boards'
const BASE_URL = 'http://localhost:3030/api/board/'
// const BASE_URL = (process.env.NODE_ENV === 'production')
// ? '/api/toy'
// : '//localhost:3030/api/board';




export const boardService = {
  query,
  getById,
  save,
  remove,
  add,
  updateTask,
  updateGroup
}

// function query() {
//   return storageService.query(STORAGE_KEY)
// }

async function query() {
  try {
    const { data } = await axios.get(BASE_URL)
    console.log('data from server :)', data)
    return data
  }
  catch (err) {
    console.log(err)
  }
}
async function getById(boardId) {
  try {
    const { data } = await axios.get(BASE_URL+boardId)
    console.log('data from server :)', data)
    return data
  }
  catch (err) {
    console.log(err)
  }
}

// async function getById(boardId) {
//   return storageService.get(STORAGE_KEY, boardId)
// }

async function updateTask(board, groupId, taskId, taskToUpdate ) {
  const groupIdx = board.groups.findIndex(group => group.id ===groupId)
  const taskIdx = board.groups[groupIdx].tasks.findIndex(task => task.id === taskId)
  board.groups[groupIdx].tasks.splice(taskIdx, 1, taskToUpdate)
  // http - updateBoard / Storage
  // await storageService.put(STORAGE_KEY, board)
  await axios.put(BASE_URL + board)
  return board
}

async function updateGroup( board, groupId, groupToUpdate ) {
  const groupIdx = board.groups.findIndex(group => group.id ===groupId)
  board.groups.splice(groupIdx, 1, groupToUpdate)
  // http - updateBoard / Storage
  // await storageService.put(STORAGE_KEY, board)
  await axios.put(BASE_URL , board)
  return board
}

async function remove(boardId) {
  // await storageService.remove(STORAGE_KEY, boardId)
  // return storageService.query(STORAGE_KEY) //change to useeffect + filter
  await axios.delete(BASE_URL+ boardId)
  return query()
  // boardChannel.postMessage(getActionRemoveBoard(boardId))
}

async function add(board) {
  if (!board) board = _getNewBoard()
  // await storageService.post(STORAGE_KEY, board)
  // return storageService.query(STORAGE_KEY)
  await axios.post(BASE_URL , board)
  return query()
  // boardChannel.postMessage(getActionAddBoard(board))
}

async function save(board) {
  let savedBoard
  if (board._id) {
    // savedBoard = await storageService.put(STORAGE_KEY, board)
    const {data} = await axios.put(BASE_URL , board)
    savedBoard = data
    // boardChannel.postMessage(getActionUpdateBoard(savedBoard))
  } else {
    // Later, owner is set by the backend
    // board.owner = userService.getLoggedinUser()
    // savedBoard = await storageService.post(STORAGE_KEY, board)
    const {data} = await axios.put(BASE_URL , board)
    savedBoard = data
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
