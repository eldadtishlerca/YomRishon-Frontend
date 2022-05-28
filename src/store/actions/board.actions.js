import { boardService } from '../../services/board.service'

// var subscriber

export function loadBoard(boardId) {
  return async (dispatch, getState) => {
    try {
      const board = await boardService.query(boardId)
      dispatch({ type: 'SET_BOARD', board })
    } catch (err) {
      console.log('Cannot load board', err)
    }
  }
}

export function updateBoard(board) {
  return (dispatch) => {
      boardService.save(board)
          .then(savedBoard => {
              console.log('Updated Board:', savedBoard);
              // dispatch(getActionUpdateBoard(savedBoard))
              // showSuccessMsg('Board updated')
          })
          .catch(err => {
              // showErrorMsg('Cannot update board')
              console.log('Cannot save board', err)
          })
  }
}
