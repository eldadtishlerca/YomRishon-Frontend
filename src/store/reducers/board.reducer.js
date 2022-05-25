const initialState = {
    board: [],
}
export function boardReducer(state = initialState, action) {
    var newState = state
    var board
    switch (action.type) {
        case 'SET_BOARD':
            newState = { ...state, board: action.board }
            break
        // case 'REMOVE_CAR':
        //     const lastRemovedBoard = state.boards.find(board => board._id === action.boardId)
        //     boards = state.boards.filter(board => board._id !== action.boardId)
        //     newState = { ...state, boards, lastRemovedBoard}
        //     break
        // case 'ADD_CAR':
        //     newState = { ...state, boards:[...state.boards, action.board]}
        //     break
        // case 'UPDATE_CAR':
        //     boards = state.boards.map(board => (board._id === action.board._id)? action.board : board)
        //     newState = { ...state, boards}
        //     break
        // case 'ADD_TO_CART':
        //     newState = { ...state, boardt:[...state.boardt, action.board]}
        //     break
        // case 'REMOVE_FROM_CART':
        //     boardt = state.boardt.filter(board => board._id !== action.boardId)
        //     newState = { ...state, boardt}
        //     break
        // case 'CLEAR_CART':
        //     newState = { ...state, boardt: []}
        //     break
        // case 'UNDO_REMOVE_CAR':
        //     if (state.lastRemovedBoard) {
        //         newState = { ...state, boards: [...state.boards, state.lastRemovedBoard], lastRemovedBoard: null}
        //     }
        //     break
        default: break
    }

    // console.log('Prev State:', state)
    // console.log('Action:', action)
    // console.log('New State:', newState)
    return newState

}
