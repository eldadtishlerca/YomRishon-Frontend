import { boardService } from '../../services/board.service'

export function updateTask(board, groupId, taskId, taskToUpdate) {
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

export function loadBoard(boardId, filterBy) {
  return async (dispatch) => {
    try {
      const board = await boardService.getById(boardId, filterBy)
      console.log(board);
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
  return (dispatch) => {
    boardService
      .save(board)
      .then((savedBoard) => {
        dispatch(getActionUpdateBoard(savedBoard))
        dispatch(loadBoards())
      })
      .catch((err) => {
        console.log('Cannot savedBoard', err)
      })
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

export function addBoard(board) {
  return async (dispatch) => {
    try {
      const boards = await boardService.add(board)
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

// export function updateBoard(board) {
//   return (dispatch) => {
//     boardService
//       .save(board)
//       .then((savedBoard) => {
//         console.log('Updated Board:', savedBoard)
//         // dispatch(getActionUpdateBoard(savedBoard))
//         // showSuccessMsg('Board updated')
//       })
//       .catch((err) => {
//         // showErrorMsg('Cannot update board')
//         console.log('Cannot save board', err)
//       })
//   }
// }
