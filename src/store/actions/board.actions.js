import { boardService } from '../../services/board.service'

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

export function loadBoard(boardId) {
  return async (dispatch) => {
    try {
      const board = await boardService.query(boardId)
      dispatch(getActionBoard(board))
    } catch (err) {
      console.log('Cannot load board', err)
    }
  }
}

export function updateBoard(board) {
  return (dispatch) => {
    boardService
      .save(board)
      .then((savedBoard) => {
        console.log('Updated Board:', savedBoard)
        dispatch(getActionUpdateBoard(savedBoard))
        // showSuccessMsg('Board updated')
      })
      .catch((err) => {
        // showErrorMsg('Cannot update board')
        console.log('Cannot save board', err)
      })
  }
}
