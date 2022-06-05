import { httpService } from './http.service';

export const boardService = {
  query,
  getById,
  save,
  remove,
  add,
  updateTask,
  updateGroup,
  duplicateGroup,
  addGroup,
  deleteGroup,
}

async function query() {
  try {
    return await httpService.get('board/')
  } catch (err) {
    console.log(err)
  }
}

async function getById(boardId) {
  try {
    return await httpService.get(`board/${boardId}`)
  } catch (err) {
    console.log(err)
  }
}



async function updateTask(board, groupId, taskId, taskToUpdate ) {
  const groupIdx = board.groups.findIndex((group) => group.id === groupId)
  const taskIdx = board.groups[groupIdx].tasks.findIndex((task) => task.id === taskId)
  board.groups[groupIdx].tasks.splice(taskIdx, 1, taskToUpdate)
  try {
    return await httpService.put('board/',board)
  } catch (err) {
      console.log(err);
  }
}

async function updateGroup( board, groupId, groupToUpdate ) {
  const groupIdx = board.groups.findIndex((group) => group.id === groupId)
  board.groups.splice(groupIdx, 1, groupToUpdate)
  // http - updateBoard / Storage
  try {
    return await httpService.put('board/',board)
  } catch (err) {
      console.log(err);
  }
}

async function duplicateGroup(board, groupId, groupToCopy) {
  const groupIdx = board.groups.findIndex((group) => group.id === groupId)
  board.groups.splice(groupIdx, 0, groupToCopy)
  try {
    return await httpService.put('board/',board)
  } catch (err) {
      console.log(err);
  }
}

async function addGroup(board, groupId, addGroup) {
  const groupIdx = board.groups.findIndex((group) => group.id === groupId)
  board.groups.splice(groupIdx, 0, addGroup)
  try {
    return await httpService.put('board/',board)
  } catch (err) {
      console.log(err);
  }
}

async function deleteGroup(board, groupId) {
  const groupIdx = board.groups.findIndex((group) => group.id === groupId)
  board.groups.splice(groupIdx, 1)
  try {
    return await httpService.put('board/',board)
  } catch (err) {
      console.log(err);
  }
}

async function remove(boardId) {
  await httpService.delete(`board/${boardId}`)
  return query()
  // boardChannel.postMessage(getActionRemoveBoard(boardId))
}

async function add(board) {
  if (!board) board = _getNewBoard()
  await httpService.post('',board)
  return query()
  // boardChannel.postMessage(getActionAddBoard(board))
}

async function save(board) {
  if (board._id) {
    return await httpService.put('',board)
    // boardChannel.postMessage(getActionUpdateBoard(savedBoard))
  } else {
    // Later, owner is set by the backend
    // board.owner = userService.getLoggedinUser()
    return await httpService.post('',board)
    // boardChannel.postMessage(getActionAddBoard(savedBoard))
  }
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
