import { boardService } from '../../services/board.service'

// var subscriber

export function loadBoard(boardId) {
  return async (dispatch, getState) => {
    try {
      const board = await boardService.query(boardId)
      console.log(board)
      dispatch({ type: 'SET_BOARD', board })
    } catch (err) {
      console.log('Cannot load board', err)
    }
    // if (subscriber) boardService.unsubscribe(subscriber)
    // subscriber = (ev) => {
    //     console.log('Got notified', ev.data)
    //     dispatch(ev.data)
    // }
    // boardService.subscribe(subscriber)
  }
}
