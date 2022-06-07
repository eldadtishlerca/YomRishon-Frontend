import { boardService } from '../../services/board.service'
import { userService } from '../../services/user.service'

export function getActionBoard(board) {
  return {
    type: 'SET_BOARD',
    board,
  }
}

export function getActionUpdateBoard(savedBoard) {
  return {
    type: 'SET_BOARD',
    board: savedBoard,
  }
}

export function getActionUpdateUser(savedUser) {
  return {
    type: 'SET_USER',
    savedUser,
  }
}

export function updateTask(board, groupId, taskId, taskToUpdate) {
  console.log(board)
  taskToUpdate = {
    ...taskToUpdate,
    lastUpdated: {
      _id: 'u103',
      fullname: 'Elon Barzani',
      imgUrl: 'imgs/mini-user-imgs/u103.png',
      updatedAt: Date.now(),
    },
  }
  return async (dispatch) => {
    try {
      const updatedBoard = await boardService.updateTask(
        board,
        groupId,
        taskId,
        taskToUpdate
      )
      // dispatch({ type: 'SET_BOARD', currBoard: updatedBoard })
      await dispatch(getActionUpdateBoard(updatedBoard))
      await dispatch(loadBoards())
    } catch (err) {
      console.log('BoardActions: err in loadBoards', err)
    }
  }
}

export function updateGroup(board, groupId, groupToUpdate) {
  return async (dispatch) => {
    try {
      const updatedBoard = await boardService.updateGroup(
        board,
        groupId,
        groupToUpdate
      )
      // dispatch({ type: 'SET_BOARD', currBoard: updatedBoard })
      await dispatch(getActionUpdateBoard(updatedBoard))
      // await dispatch(loadBoards())
    } catch (err) {
      console.log('BoardActions: err in loadBoards', err)
    }
  }
}

export function duplicateGroup(board, groupId, groupToCopy) {
  return async (dispatch) => {
    try {
      const updatedBoard = await boardService.duplicateGroup(
        board,
        groupId,
        groupToCopy
      )
      await dispatch(getActionUpdateBoard(updatedBoard))
    } catch (err) {
      console.log(err)
    }
  }
}

export function addGroup(board, groupId, groupToAdd) {
  return async (dispatch) => {
    try {
      const updatedBoard = await boardService.addGroup(
        board,
        groupId,
        groupToAdd
      )
      await dispatch(getActionUpdateBoard(updatedBoard))
    } catch (err) {
      console.log(err)
    }
  }
}

export function deleteGroup(board, groupId) {
  return async (dispatch) => {
    try {
      const updatedBoard = await boardService.deleteGroup(board, groupId)
      await dispatch(getActionUpdateBoard(updatedBoard))
    } catch (err) {
      console.log(err)
    }
  }
}

export function loadBoard(boardId, filterBy) {
  return async (dispatch) => {
    try {
      const board = await boardService.getById(boardId, filterBy)
      dispatch(getActionBoard(board))
    } catch (err) {
      console.log('Cannot load board', err)
    }
  }
}

export function loadBoards() {
  return async (dispatch) => {
    try {
      const boards = await boardService.query()
      dispatch({ type: 'SET_BOARDS', boards })
    } catch (err) {
      console.log('BoardActions: err in loadBoards', err)
    }
  }
}

export function updateBoard(board) {
  console.log('board from updateBoard', board)
  return async (dispatch) => {
    try {
      const savedBoard = await boardService.save(board)
      console.log('hhhhhhhhh', savedBoard)
      dispatch(getActionUpdateBoard(savedBoard))
      dispatch(loadBoards())
    } catch (err) {
      console.log('Cannot savedBoard', err)
    }
  }
}

export function removeBoard(boardId) {
  return async (dispatch) => {
    try {
      const boards = await boardService.remove(boardId)
      dispatch({ type: 'SET_BOARDS', boards })
    } catch (err) {
      console.log('err:', err)
    }
  }
}

export function setBoard(board) {
  return async (dispatch) => {
    try {
      dispatch({ type: 'SET_BOARD', board })
    } catch (err) {
      console.log('err:', err)
    }
  }
}

export function addBoard() {
  return async (dispatch) => {
    try {
      const boards = await boardService.add()
      dispatch({ type: 'SET_BOARDS', boards })
    } catch (err) {
      console.log('err:', err)
    }
  }
}

export function updateGroups(groups, _id) {
  return async (dispatch) => {
    try {
      const currBoard = await boardService.getById(_id)
      console.log(currBoard)
      // currBoard.groups = groups
      dispatch({ type: 'SET_BOARD', currBoard })
    } catch (err) {
      console.log('err:', err)
    }
  }
}

export function getLoggedinUser() {
  return async (dispatch) => {
    try {
      const savedUser = await userService.getLoggedinUser()
      if (savedUser) dispatch(getActionUpdateUser(savedUser))
      return savedUser
    } catch (err) {
      console.log('Cannot Login', err)
    }
  }
}

export function updateUser(user) {
  return async (dispatch) => {
    try {
      const savedUser = await userService.login(user)
      dispatch(getActionUpdateUser(savedUser))
    } catch (err) {
      console.log('Cannot Login', err)
    }
  }
}

export function logoutUser() {
  return async (dispatch) => {
    try {
      await userService.logout()
      dispatch(getActionUpdateUser(null))
    } catch (err) {
      console.log('Cannot Login', err)
    }
  }
}
