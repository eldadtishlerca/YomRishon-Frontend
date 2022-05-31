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
      const board = await boardService.getById(boardId)
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
    console.log(board)
    boardService
      .save(board)
      .then((savedBoard) => {
        console.log('savedBoard', savedBoard)
        dispatch(getActionUpdateBoard(savedBoard))
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
