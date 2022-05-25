import { boardService } from "../service/board.service"

var subscriber

export function loadBoard(boardId) {
    return (dispatch) => {
        boardService.query(boardId)
            .then(board => {
                console.log('Board from DB:', board)
                dispatch({
                    type: 'SET_BOARD',
                    board
                })
            })
            .catch(err => {
                showErrorMsg('Cannot load board')
                console.log('Cannot load board', err)
            })

        // if (subscriber) boardService.unsubscribe(subscriber)
        // subscriber = (ev) => {
        //     console.log('Got notified', ev.data)
        //     dispatch(ev.data)
        // }
        // boardService.subscribe(subscriber)
    }
}

